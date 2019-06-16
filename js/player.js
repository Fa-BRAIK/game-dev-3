export { Player }

export const playerLoadedStates = []

class Player {
    constructor (positionX, positionY, state) {
        this.positionX = positionX
        this.positionY = positionY
        this.state = state
    }

    static loadPlayerStates(callback) {
        const states = {
            idle: [],  // all idle states
            run: [] // all run states
        } // loading states file names
        for (let i = 0; i <= 7; i++) {
            states.idle.push('img/characters/male/Male_' + i + '_Idle0.png')
    
            for (let j = 0; j <= 9; j++)
                states.run.push('img/characters/male/Male_' + i + '_Run' + j + '.png')
        }

        let playerStatesIdle = []

        for (let i = 0; i < states.idle.length; i++) {
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
                        newStateRun.src = states.run[i]
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