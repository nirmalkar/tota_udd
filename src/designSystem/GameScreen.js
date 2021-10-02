import { Cloud } from './Cloud'
export const GameScreen = (gameScreenProps) => {
    const gameScreenDiv = document.createElement('div')
    const startGameTextP = document.createElement('p')
    const gameImgContainerDiv = document.createElement('div')

    gameScreenDiv.classList.add('game_screen')
    startGameTextP.classList.add('start_game_txt')
    gameImgContainerDiv.classList.add('game_img_div')

    startGameTextP.setAttribute('id', 'start_game_txt')
    gameImgContainerDiv.setAttribute('id', 'game_img_div')

    startGameTextP.textContent = 'Start Game'

    gameScreenDiv.append(startGameTextP)
    gameImgContainerDiv.append(Cloud())
    gameScreenDiv.append(gameImgContainerDiv)
    return gameScreenDiv
}
