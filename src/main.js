import "../scss/main.scss";
import { game } from "./constants/gameObj";

const backgroundImagesArr = [
    "bg1",
    "bg2",
    "bg3",
    "bg4",
    "bg5",
    "bg6",
    "bg7",
    "bg8",
    "bg9",
    "bg10",
    "bg11",
    "bg12",
    "bg13",
    "bg14",
    "bg15",
    "bg16",
    "bg17",
];

let start = false;
let randomIdxInterval;
let randomGameIdxInterval;
let intGameIdx = parseInt(Math.random() * game.length);

const gameScreen = document.querySelector(".game_screen");
const startButton = document.getElementById("start_game");
const cloud = document.querySelector("#cloud")
const uddButton = document.createElement("button");

function selectRandomIdx(start) {
    if (start) {
        randomIdxInterval = setInterval(() => {
            let randomInt = parseInt(Math.random() * backgroundImagesArr.length);
            document.body.style.backgroundImage = `url(${new URL(
                `../assets/bg/${backgroundImagesArr[randomInt]}.svg`,
                import.meta.url
            ).href
                })`;
        }, 700);
    } else {
        clearInterval(randomIdxInterval);
    }
}

function startGame(start) {
    let count = 0
    addGameImg(count)
    if (start) {
        randomGameIdxInterval = setInterval(() => {
            count++
            // let gameCurrentIdx = parseInt(Math.random() * game.length);
            // document.querySelector("#game_img_div").appendChild(gameImg[gameCurrentIdx]?.image_url)
            removeGameImage()
            console.log(count);
        }, 2000);
    } else {
        clearInterval(randomGameIdxInterval);
    }
}

selectRandomIdx(true);

function addGameImg(count) {
    if (count === 0) {
        const gameImg = document.createElement("img")
        gameImg.id = "game_img"
        gameImg.classList.add("game_img_rtl")
        gameImg.setAttribute("src", `${game[intGameIdx].image_url}`)
        let gameImgDiv = document.querySelector("#game_img_div")
        gameImgDiv.appendChild(gameImg)
        game_img_div.style.transform = "translateX(200%)"
        cloud.classList.remove("hidden")
    } else {
        document.querySelector("#game_img").src = game[intGameIdx].image_url
    }
}

function removeGameImage() {
    let currentGameImg = document.getElementById("game_img")
    cloud.classList.add("hidden")
    currentGameImg.src = ""
}


startButton.addEventListener("click", () => {
    startButton.classList.add("hidden");
    uddButton.innerHTML = "UDD!";
    uddButton.classList.add("start_game_button");
    uddButton.style.width = "auto";
    uddButton.style.padding = "20px";
    uddButton.style.borderRadius = "50px";
    uddButton.setAttribute("id", "udd_button");
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    insertAfter(gameScreen, uddButton);
    startGame(!start);
    document.getElementById("udd_button")?.addEventListener("click", () => {
        console.log(game[intGameIdx].can_fly);
        if (game[intGameIdx].can_fly === true) {
            cloud.style.background = "#9FE6A0";
        }else{
            cloud.style.background = "#F55C47";
        }
    })
});
console.log(document.getElementById("udd_button"));

