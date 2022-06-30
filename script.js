const container = document.querySelector('.container');
const seats  = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')


let price = +movieSelect.value; //convert  movie to Integer

container.addEventListener('click',e=>{
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){ 
    e.target.classList.toggle('selected') //toggle คือการสลับไปสลับมา 
    updateSelected()
  }
})


function updateSelected(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected') //class selected
  setInnerHTML(selectedSeats.length);

  //save to localStorage
  saveToLocalStorage(selectedSeats);
}

movieSelect.addEventListener('change',e=>{
  price= +e.target.value
  setMovieData(e.target.selectedIndex,e.target.value)
  updateSelected()
})

function saveToLocalStorage(selectedSeats) {
  const selectedSeatsSpread = [...selectedSeats]; //Spread operator
  const seatsIndex = selectedSeatsSpread.map(seat => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
}

function setInnerHTML(selectedSeats) {
  count.innerHTML = selectedSeats;
  total.innerText = selectedSeats * price;
}

function setMovieData(movieIndex,moviePrice){
  localStorage.setItem('movieIndex',movieIndex)
  localStorage.setItem('moviePrice',moviePrice)
}

function init(){
  const priceSelectedMovie = localStorage.getItem('moviePrice')
  const selectedMovieIndex = localStorage.getItem('movieIndex')
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
  seats.forEach((seat,index)=>{
    if(selectedSeats.indexOf(index)>-1){ //เช็คว่า seat นี้ตรงกับ index หรือไม่
      seat.classList.add('selected')
    }
  })

  if(selectedMovieIndex!==null){
    movieSelect.selectedIndex=selectedMovieIndex
  }
  if(selectedMovieIndex!==null){
    movieSelect.selectedIndex=selectedMovieIndex
  }

  if(priceSelectedMovie !==null){
    price = +priceSelectedMovie
  }

  updateSelected()
}


init()