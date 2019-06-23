import { obstArray } from './data.js'

export { Player }

class Player {
    constructor (positionX, positionY, state) {
        this.positionX = positionX
        this.positionY = positionY
        this.state = state
    }

    /**
     * This method will cause the character to advance in a certain position
     * for example : moving to the RIGHT by 20px
     * 
     * @param {String} position 
     * @param {Number} currentFrame
     * @param {Object} playerStates
     * @param {Number} value 
     */
    run (position, currentFrame, playerStates, value) {
        // we need to check if player is not going to collide before moving everytime
        console.log('Run the player towards ', position, ' by ', value)
        switch (position) {
            case 'left': 
                this.positionX -= value
                if (this.isGoingToCollide()) this.positionX += value
                
                this.setState(playerStates.run[10 * 6 + currentFrame])
            break
            case 'right':
                this.positionX += value
                if (this.isGoingToCollide()) this.positionX -= value
                
                this.setState(playerStates.run[10 * 2 + currentFrame])
            break
            case 'top':
                this.positionY -= value
                if (this.isGoingToCollide()) this.positionY += value
                
                this.setState(playerStates.run[currentFrame])
            break
            case 'bottom':
                this.positionY += value
                if (this.isGoingToCollide()) this.positionY -= value
                
                this.setState(playerStates.run[10 * 4 + currentFrame])
            break
        }
        console.log('Player state has changed to ', this.state)
        console.log('%c Player new Position x: ' + this.positionX + ', y: ' + this.positionY, 'color: #aa0000')
    }

    /**
     * this function will return true if the player is going to collide with an obst
     * 
     * @returns {Boolean}
     */
    isGoingToCollide() {
        // Att the moment the only obst is a 2
        // TODO update the map for more obsts
        try {
            return obstArray[Math.round(this.positionX)][Math.round(this.positionY)] === 1
        } catch (e) { return true } // index out of bounds exception ... it means the player is not allowed to move there
    }

    /**
     * 
     * @param {Image} state 
     */
    setState (state) {
        this.state = state
    }

    /**
     * This function will load all required images to run the program
     * 
     * @param {function} callback 
     */
    static loadPlayerStates(callback) {
        const states = {
            idle: [],  // all idle states
            run: [] // all run states
        } // loading states file names
        for (let i = 0; i <= 7; i++) {
            states.idle.push('img/characters/male/Male_' + i + '_Idle0.png')
    
            for (let j = 0; j <= 9; j++) {
                states.run.push('img/characters/male/Male_' + i + '_Run' + j + '.png')
            }     
        }

        let playerStatesIdle = []

        for (let i = 0; i < states.idle.length; i++) {
            // we'll start by loading idle0 states first
            const newStateIdle = new Image()
            newStateIdle.src = states.idle[i]
            newStateIdle.onload = () => {
                playerStatesIdle.push(newStateIdle)
                // if we finished loading all 'Idle0' states we'll continue
                // to loading all 'run' states
                if (playerStatesIdle.length === states.idle.length) { 
                    let playerStatesRun = []
                    for (let j = 0; j < states.run.length; j++) {
                        const newStateRun = new Image()
                        newStateRun.src = states.run[j]
                        newStateRun.onload = () => {
                            playerStatesRun.push(newStateRun)

                            if (playerStatesRun.length === states.run.length) {
                                return callback({ idle: playerStatesIdle, run: playerStatesRun })
                            }
                        }
                    }
                }
            }
        }
    }
}