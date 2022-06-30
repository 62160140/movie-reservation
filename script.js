const container = document.querySelector('.container');
const seats  = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')


const price = +movieSelect.value; //convert  movie to Integer

container.addEventListener('click',e=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){ 
    e.target.classList.toggle('selected') //toggle คือการสลับไปสลับมา 
    updateSelected()
  }
})


function updateSelected(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected').length //นับ class selected
  count.innerHTML = selectedSeats
  total.innerText = selectedSeats*price
}