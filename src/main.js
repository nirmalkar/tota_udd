import "../scss/main.scss";
import { game } from "./constant/gameObj"

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

let start = true
let randomIdxInterval 

function selectRandomIdx(start) {
    if(start){
        randomIdxInterval = setInterval(() => {
            let randomInt = parseInt(Math.random() * backgroundImagesArr.length);
            
            document.body.style.backgroundImage = `url(${new URL(`../assets/bg/${backgroundImagesArr[randomInt]}.svg`, import.meta.url)
                .href
            })`;
            console.log(game[gameCurrentIdx]);
        }, 700);
    }else{
        clearInterval(randomIdxInterval);
    }
}
selectRandomIdx(start)


document.getElementById("start_game").addEventListener("click", () => {
    if(start){
        start = false
        selectRandomIdx(start)
    }else{
        start = true
        selectRandomIdx(start)
    }
});
