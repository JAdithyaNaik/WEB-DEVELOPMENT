console.log("Tutorial on functions")



// function nameOfFunction(name){
  //   console.log("hello man " + name)
//   console.log("hello good to see u " + name)
//   console.log("hello " + name)
//   console.log("hello guys " + name)
//   console.log("good morning " + name)
// }


// arrow function
// let nameOfFunction = (name)=>{
//   console.log("BY Arrow function")
//   console.log("hello man " + name)
//   console.log("hello good to see u " + name)
//   console.log("hello " + name)
//   console.log("hello guys " + name)
// }

// nameOfFunction("adithya")
// nameOfFunction("aravind")



let sum = (a,b)=>{
  return a+b
}
let ThreeSum = (a,b,c=8)=>{
  return a+b+c
}

console.log(sum(34,5))
console.log(ThreeSum(34,5))