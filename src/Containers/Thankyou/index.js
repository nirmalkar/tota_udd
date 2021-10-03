const thankyouPage = document.getElementById('app')


function thankyouComponent(){
    const thankyouPageHtml = `<div class="thankyou-container"><p class="thankyou">Thankyou for having fun with us!</p></div>`
    thankyouPage.innerHTML += thankyouPageHtml
    return thankyouPage
}

const Thankyou = () => {
    return thankyouComponent
}
export default Thankyou
