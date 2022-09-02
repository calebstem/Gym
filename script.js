let popCount = 0
let genPop = 0;

let hourPop = []

function arrayAdd(x) {
  hourPop.push(x);
  if (hourPop.length > 6) {
    hourPop.length = 6;
  }
}

const timeCard = {
  inGym: 0,
};

document.getElementById('addUsr').onclick = function incPopCount(){
  popCount++;
}; 

function transcribeTime(){
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
  for (let i=0; i < hourPop.length; i++){
    genPop += hourPop[i].inGym * ((i+1)/hourPop.length);
  }
  console.log(genPop);
  genPop = 0;
}


//setInterval(timeCardObject, 15000)

