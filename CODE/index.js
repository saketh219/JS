function displayclock(){
  var time = new Date;
  var hur = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var a = "AM";

  if (hur>= 12){
    a = "PM"
  }
  if (hur>12){
    hur = hur-12;
  }
  if (hur<10){
    hur = '0'+hur;
  }
  if (min<10){
    min = '0'+min;
  }
  if (sec<10){
    sec = '0'+sec;
  }
  document.querySelector("#timejs").innerText= hur+" : "+min+" : "+sec+" "+a;
  setTimeout(displayclock,1000);

}
displayclock();
function displaydate(){
  var date = new Date;
  var dname = date.getDay();
  var m = date.getMonth();
  var dnum = date.getDate();
  var y = date.getFullYear();

  let months = ["January", "February", "March", "April"," May", "June", "July", "August", "September", "October","November", "December"]
  let weeks = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let values= [weeks[dname],dnum,months[m],y];

  document.querySelector("#datejs").innerHTML = values[0]+", "+values[2]+" "+values[1]+", "+values[3];
  setTimeout(displaydate,1000);
}
displaydate();

function clr(){
  document.querySelector("#result").value = " "
}
function display(val){
  document.querySelector("#result").value+=val;
}
function equate(){
  let x = document.querySelector("#result").value;
  let y = eval(x);
  document.querySelector("#result").value = y
}




var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

  }
}
