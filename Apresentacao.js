document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM está funcionando corretamente.')
});

const iconMenu = document.querySelector('#icon-menu')
const iconModal = document.querySelector('#icon-modal')
const dialog = document.querySelector('.dialog')
const body = document.querySelector('body')

iconMenu.onclick = function () {
    dialog.showModal()
    body.style.opacity = '0.3';
}

iconModal.onclick = function () {
    dialog.close()
    body.style.opacity = '1' 
}
