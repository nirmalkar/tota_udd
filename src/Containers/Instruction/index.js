import { instructions } from "../../constants/instructions.js"
import { Button } from "../../components/designSystem/Button.js"

const instructionPage = document.getElementById("app")


function instruction (){
    const card = document.createElement("div")
    const paragraph = document.createElement("p")
    paragraph.classList.add("ins_title")
    paragraph.innerText = "Instructions"
    card.classList.add("card")
    card.append(paragraph)
    instructions.map(ele => card.innerHTML += `<ul><li>${ele.text}.</li></ul>`)
    instructionPage.append(card)

    const changePage = ( route) => {
        history.pushState = ( f => function pushState(){
            var ret = f.apply(this, arguments);
            window.dispatchEvent(new Event('locationchange'));
            return ret;
        })(history.pushState);
        console.log();
        if(route === "multi"){
            window.history.pushState('this is game page', 'Game', '/game');
            
        }else{
            // window.location = "/game"
        }
    }
    

    Button({
        innerText: 'Multi',
        type: 'btn-darkest',
        classes: [],
        styles: {
            height: 'auto',
            width: 'auto',
            positions: 'absolute',
            top: '36%',
            left: '38%',
            padding:"1rem",
            borderRadius:"50%"
        },
        onClickFunc: ( e) => changePage( "multi"),
        id: 'multi_btn',
        referenceNode: instructionPage,
    })
    Button({
        innerText: 'Private',
        type: 'btn-darkest',
        classes: [],
        styles: {
            height: 'auto',
            width: 'auto',
            padding:"1rem",
            positions: 'absolute',
            top: '36%',
            left: '58%',
            borderRadius:"50%"
        },
        onClickFunc: () => changePage( "private"),
        id: 'private_btn',
        referenceNode: instructionPage,
    })
}

const Instruction = () => {

    return instruction
}

export default Instruction