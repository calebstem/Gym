let popCount = 0; //Number per set interval ie 10 minutes
let genPop = 0; //Total number calculated with calcPop

let hourPop = [] //empty array to record popCount's

function arrayAdd(x) { //function to keep array set to 6 (10 minute intervals, makes it an hour)
  hourPop.push(x);
  if (hourPop.length > 6) {
    hourPop.length = 6;
  }
}

const timeCard = { //basic object form
  inGym: 0,
};

document.getElementById('addUsr').onclick = function incPopCount(){ //increases popCount by one
  popCount++;
}; 

function transcribeTime(){ //get the curent Time
  const date = new Date();
  let minutes = date.getMinutes();
 // let hour = date.getHours();
  return minutes;
}

function timeCardObject(){
  let timeMinutes = transcribeTime();
  const tempCard = Object.create(timeCard);
  tempCard.inGym = popCount;
  tempCard.timeIn = timeMinutes;
  arrayAdd(tempCard);
  console.table(hourPop);
  popCount = 0;
}

function calcPop(){
  timeCardObject()
  for (let i=0; i < hourPop.length; i++){
    genPop += hourPop[i].inGym * ((i+1)/hourPop.length);
  }
  document.getElementById("usrCount").innerHTML = genPop;
  genPop = 0;
}


//setInterval(calcPop, 15000)

