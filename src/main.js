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
let randomShowInterval;
let randomHideInterval;
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
        randomShowInterval = setInterval(() => {
            count += 1
            // let gameCurrentIdx = parseInt(Math.random() * game.length);
            // document.querySelector("#game_img_div").appendChild(gameImg[gameCurrentIdx]?.image_url)
            addGameImg(count)
            cloud.style.background = "#fff"
            
        }, 3001);
        randomHideInterval = setInterval(() => {
            removeGameImage()
            game_img_div.transform = "none"
        }, 1500);
    } else {
        clearInterval(randomShowInterval);
    }
}

selectRandomIdx(true);

function addGameImg(count) {
    console.log(count);
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
        console.log("else");
        console.log(cloud.classList);
        cloud.classList.remove("hidden")
        intGameIdx = parseInt(Math.random() * game.length);
        document.querySelector("#game_img").src = game[intGameIdx].image_url
        game_img_div.style.transform = "translateX(200%)"
    }
}

function removeGameImage() {
    let currentGameImg = document.getElementById("game_img")
    cloud.classList.add("hidden")
    currentGameImg.src = ""
    console.log(cloud.classList);
    game_img_div.style.transform = "translateX(0%)"
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

