// document.getElementById("box")

// document.getElementsByClassName("red")

// // selects the first occurance only , if there are multiple occurances 
// document.querySelector(".  / #")

// for selecting all the occurances,this returns a node list so to apply the styles otr to access it we need to iterate through each elemnt by for loop 
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach((e)=>{
  e.style.backgroundColor = " red";
})

console.log(document.getElementsByTagName("div"))
document.getElementsByTagName("div")


// Element.contains()
// Element.matches()

