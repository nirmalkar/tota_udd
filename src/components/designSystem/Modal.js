export const Modal = (modalProps) => {
    let byId = (query) => document.getElementById(query)

    const { height, width } = modalProps
    const modal = byId('modal')
    const modalContent = byId('modal_content')
    const close = byId('close')

    modal.style.display = 'block'

    Object.assign(modalContent.style, {
        height,
        width,
    })

    close.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}
