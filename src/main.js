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
const NotUddButton = document.createElement("button");
const gameObjName = document.createElement("p")

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

//insert after function
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function startGame(start) {
    let count = 0
    addGameImg(count)
    if (start) {
        randomShowInterval = setInterval(() => {
            count += 1
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
    gameObjName.classList.remove("hidden")
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
        gameObjName.classList.add("obj_name_text")
        gameObjName.textContent = game[intGameIdx].name  
        insertAfter(cloud, gameObjName)      
    } else {
        console.log("else");
        console.log(cloud.classList);
        cloud.classList.remove("hidden")
        intGameIdx = parseInt(Math.random() * game.length);
        document.querySelector("#game_img").src = game[intGameIdx].image_url
        game_img_div.style.transform = "translateX(200%)"
        gameObjName.textContent = game[intGameIdx].name
    }
}

function removeGameImage() {
    let currentGameImg = document.getElementById("game_img")
    cloud.classList.add("hidden")
    currentGameImg.src = ""
    console.log(cloud.classList);
    game_img_div.style.transform = "translateX(0%)"
    gameObjName.classList.add("hidden")
}


startButton.addEventListener("click", () => {
    startButton.classList.add("hidden");
    uddButton.innerHTML = "UDD!";
    uddButton.classList.add("start_game_button");
    uddButton.style.width = "auto";
    uddButton.style.padding = "20px";
    uddButton.style.borderRadius = "50px";
    uddButton.setAttribute("id", "udd_button");
    NotUddButton.innerHTML = "NAHI UDDTA!";
    NotUddButton.classList.add("not_udd_button");
    NotUddButton.style.width = "auto";
    NotUddButton.style.padding = "20px";
    NotUddButton.style.borderRadius = "50px";
    NotUddButton.setAttribute("id", "not_udd_button");
    insertAfter(gameScreen, uddButton);
    insertAfter(gameScreen, NotUddButton);
    startGame(!start);
    document.getElementById("udd_button")?.addEventListener("click", () => {
        if (game[intGameIdx].can_fly === true) {
            cloud.style.background = "#9FE6A0";
        }else{
            cloud.style.background = "#F55C47";
        }
    })
    document.getElementById("not_udd_button")?.addEventListener("click", () => {
        if (game[intGameIdx].can_fly === false) {
            cloud.style.background = "#9FE6A0";
        }else{
            cloud.style.background = "#F55C47";
        }
    })
});
console.log(document.getElementById("udd_button"));

