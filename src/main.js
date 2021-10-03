import GamePage from './Containers/GamePage'
import Instruction from './Containers/Instruction'
import Thankyou from './Containers/Thankyou'
const location = window.location.pathname

// console.log(Thankyou);

console.log(location);
function changeThePage(){
    console.log(window.location.hash);
    if (location === '/') {
        Instruction()()
    } else if (location === '/game') {
        GamePage()()
    }else if(location === '/thankyou'){
        Thankyou()()
    }
}

changeThePage()