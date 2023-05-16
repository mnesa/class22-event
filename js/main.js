// // background color change with button:

function redColor() {
  document.body.style.backgroundColor ='red';
}
function greenColor() {
  document.body.style.backgroundColor='green';
}

const yellowBtn=document.getElementById('make-yellow');
// console.log(yellowBtn);
yellowBtn.onclick=makeYellow; 
function makeYellow() {
  document.body.style.backgroundColor='yellow';
}



//anonymous function
const makeSkyBtn =document.getElementById('make-sky');
console.log(makeSkyBtn);
makeSkyBtn.onclick= function () {
  document.body.style.backgroundColor='skyBlue';
}

const goldenBtn =document.getElementById('make-gold');
goldenBtn.addEventListener('click', function(){
  document.body.style.backgroundColor='gold'
})


document.getElementById('black').addEventListener('click', function () {
 document.body.style.backgroundColor = 'black' 
})



