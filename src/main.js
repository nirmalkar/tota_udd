import '../scss/main.scss'
import { game } from './constants/gameObj'
import { Modal } from './components/Modal'
import { Button } from './components/Button'
import { GameScreen } from './components/GameScreen'

const backgroundImagesArr = [
    'bg1',
    'bg2',
    'bg3',
    'bg4',
    'bg5',
    'bg6',
    'bg7',
    'bg8',
    'bg9',
    'bg10',
    'bg11',
    'bg12',
    'bg13',
    'bg14',
    'bg15',
    'bg16',
    'bg17',
]

const start = false
let randomIdxInterval
let randomShowInterval
let randomHideInterval
let intGameIdx = parseInt(Math.random() * game.length)

const wrapper = document.createElement('div')
const gameScreen = GameScreen()
const gameObjName = document.createElement('p')
const app = document.querySelector('#app')

wrapper.classList.add('wrapper')
app.append(wrapper)
document.querySelector('.wrapper').append(gameScreen)

function selectRandomIdx(start) {
    if (start) {
        randomIdxInterval = setInterval(() => {
            const randomInt = parseInt(
                Math.random() * backgroundImagesArr.length
            )
            let currInt
            if (randomInt !== currInt) {
                document.body.style.backgroundImage = `url(${
                    new URL(
                        `../assets/bg/${backgroundImagesArr[randomInt]}.svg`,
                        import.meta.url
                    ).href
                })`
                currInt = randomInt
            }
        }, 500)
    } else {
        clearInterval(randomIdxInterval)
    }
}

// insert after function
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function startGame(start) {
    const cloud = document.querySelector('#cloud')
    let count = 0

    addGameImg(count)
    if (start) {
        randomShowInterval = setInterval(() => {
            count += 1
            addGameImg(count)
            cloud.style.background = '#fff'
        }, 3001)
        randomHideInterval = setInterval(() => {
            removeGameImage()
            game_img_div.transform = 'none'
        }, 1500)
    } else {
        clearInterval(randomShowInterval)
    }
}

selectRandomIdx(true)

function addGameImg(count) {
    const cloud = document.querySelector('#cloud')
    gameObjName.classList.remove('hidden')
    gameObjName.style.color = ''
    if (count === 0) {
        const gameImg = document.createElement('img')
        gameImg.id = 'game_img'
        gameImg.classList.add('game_img_rtl')
        gameImg.setAttribute('src', `${game[intGameIdx].image_url}`)
        const gameImgDiv = document.querySelector('#game_img_div')
        gameImgDiv.appendChild(gameImg)
        game_img_div.style.transform = 'translateX(200%)'
        cloud.classList.remove('hidden')
        gameObjName.classList.add('obj_name_text')
        gameObjName.textContent = game[intGameIdx].name
        insertAfter(cloud, gameObjName)
    } else {
        cloud.classList.remove('hidden')
        intGameIdx = parseInt(Math.random() * game.length)
        document.querySelector('#game_img').src = game[intGameIdx].image_url
        game_img_div.style.transform = 'translateX(200%)'
        gameObjName.textContent = game[intGameIdx].name
    }
}

function removeGameImage() {
    const cloud = document.querySelector('#cloud')
    const currentGameImg = document.getElementById('game_img')

    cloud.classList.add('hidden')
    currentGameImg.src = ''
    game_img_div.style.transform = 'translateX(0%)'
    gameObjName.classList.add('hidden')
}

Button({
    innerText: 'Start Game',
    type: 'btn-primary',
    classes: [],
    styles: {
        height: '5%',
        width: '10%',
        positions: 'absolute',
        top: '62%',
        left: '45%',
    },
    onClickFunc: (ele) => Start(ele),
    id: 'start_game',
    referenceNode: gameScreen,
})

function Start(ele) {
    const startGameTxt = document.querySelector('#start_game_txt')
    startGameTxt.classList.add('hidden')
    ele.style.display = 'none'
    Button({
        innerText: 'UDD',
        type: 'btn-primary',
        classes: [],
        styles: {
            height: '5%',
            width: '10%',
            marginTop: '65rem',
            marginLeft: '40%',
            display: 'block',
            marginRight: '2rem',
            borderRadius: '50px',
        },
        onClickFunc: (ele) => uddFunc(ele),
        id: 'udd_button',
        referenceNode: gameScreen,
    })

    Button({
        innerText: 'NAHI UDDTA!',
        type: 'btn-primary',
        classes: [],
        styles: {
            height: '5%',
            width: '10%',
            marginTop: '65rem',
            marginLeft: '51%',
            display: 'block',
            marginRight: '2rem',
            borderRadius: '50px',
        },
        onClickFunc: (ele) => notUddFunc(ele),
        id: 'not_udd_button',
        referenceNode: gameScreen,
    })
    startGame(!start)
}

function uddFunc() {
    const cloud = document.querySelector('#cloud')

    if (game[intGameIdx].can_fly === true) {
        cloud.style.background = '#9FE6A0'
        gameObjName.style.color = '#fff'
    } else {
        cloud.style.background = '#F55C47'
        gameObjName.style.color = '#fff'
    }
}

function notUddFunc() {
    const cloud = document.querySelector('#cloud')

    if (game[intGameIdx].can_fly === false) {
        cloud.style.background = '#9FE6A0'
        gameObjName.style.color = '#fff'
    } else {
        cloud.style.background = '#F55C47'
        gameObjName.style.color = '#fff'
    }
}
