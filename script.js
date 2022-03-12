const countdown = () => {
  const finalTime = new Date('January 01, 2023 00:00:00').getTime() //pega a data desejada e getTime transforma em milisegundos
  const now = new Date().getTime()
  const gap = finalTime - now

  const day = 1000 * 60 * 60 * 24
  const hour = 1000 * 60 * 60
  const minute = 1000 * 60
  const second = 1000

  const countDay = gap / day
  const countHour = (gap % day) / hour
  const countMinute = (gap % hour) / minute
  const countSecond = (gap % minute) / second

  const getDay = document.querySelector('#days')
  const getHour = document.querySelector('#hours')
  const getMinute = document.querySelector('#minutes')
  const getSecond = document.querySelector('#seconds')

  getDay.innerText = countDay.toFixed()
  getHour.innerText = countHour.toFixed()
  getMinute.innerText = countMinute.toFixed()
  getSecond.innerText = countSecond.toFixed()
}

setInterval(countdown, 1000)

const openModal = document.querySelector('#openModal')
openModal.addEventListener('click', function () {
  const modal = document.querySelector('.modal')
  modal.classList.add('active')
})
