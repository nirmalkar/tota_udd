export const Button = (buttonProps) => {
    const {
        innerText,
        type,
        classes,
        height,
        width,
        onClickFunc,
        referenceNode,
        hidden,
        id,
        styles,
    } = buttonProps

    const button = document.createElement('button')

    button.classList.add(type)
    classes?.forEach((className, i) => {
        button.classList.add(className)
    })

    button.addEventListener('click', (e) => {
        e.preventDefault()
        onClickFunc(button)
    })

    button.setAttribute('id', id)
    button.style.display = hidden ? 'none' : 'block'
    button.innerHTML = innerText

    Object.assign(button.style, styles)

    // insert after function
    function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(
            newNode,
            referenceNode.nextSibling
        )
    }
    insertAfter(referenceNode, button)
}
