export const Cloud = () => {
    const cloudDiv = document.createElement('div')

    cloudDiv.classList.add('cloud')
    cloudDiv.classList.add('hidden')
    cloudDiv.setAttribute('id', 'cloud')

    return cloudDiv
}
