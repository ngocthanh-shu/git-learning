const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')


function showBuyTicket() {
    modal.classList.add('open')
}

function hideBuyTicket() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTicket)
}

modalClose.addEventListener('click', hideBuyTicket)
modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})