const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

//hàm hiển thị modal (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}

//hàm đóng modal (gỡ bỏ class open của modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}

//lặp qua từng thẻ button và nghe click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

//nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})