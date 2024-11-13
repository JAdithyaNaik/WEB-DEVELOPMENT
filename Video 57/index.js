console.log("Tutorial on Loops")

// loops(5)

// for 
for(let i=0;i<34;i++){
  console.log(i+1);
}


// for in
let object = {
  name :"adi",
  num : "343"
}
for (let key in object) {
    let element = object[key];
    console.log(element)
  }
  
  
  // for of
  let string  = "adithya"
  for (let element of string) {
  console.log(element)
  
}


// while
let i =8;
while(i<15){
  console.log(i++)
}



// do while  
let j = 10;
do{
  console.log(j++)
}while(j<12);
