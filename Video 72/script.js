// if you want to insert  a variable inside JS use ${}


// best way to generate numbers in range of a,b is ;
// a+Math.random*(b-a)


// here we want a random color which range is 0 -- 255
function generateColor(){
  let p1 = Math.ceil(0+Math.random()*255)
  let p2 =  Math.ceil(0+Math.random()*255)
  let p3 =  Math.ceil(0+Math.random()*255)

  return `rgb(${p1},${p2},${p3})`;
}

// console.log("red")
// this below code wont give us resultant output as this getelementsbyclassanme retuns listnode,so we need to iterate over it

// document.getElementsByClassName("box").style.backgroundColor = generateColor()
// document.getElementsByClassName("box").style.color = generateColor()


Array.from(document.getElementsByClassName("box")).forEach(element => {
  element.style.backgroundColor = generateColor();
  element.style.color = generateColor();
});

// Array.from(document.getElementsByClassName("box")).forEach(element => { element.style.backgroundColor = generateColor(); element.style.color = generateColor(); });