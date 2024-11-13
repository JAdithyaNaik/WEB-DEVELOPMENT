console.log("Tutorial on Arrays -- Mutable")


let a = [1,3,4,6,7]

console.log(a)
console.log(a.length)

console.log(a.toString())
console.log(a.join("--"))

// a.push(34) -- adds at last
// a.pop() --- retrurns and removes the last Element
// a.shift -- removes from start
// a.unshift -- adds at front


// a.delete[5] -- removes the elment at that position but size doesnt change,if we try to print ot shows undefined

// a.sort()
// a.splice(strt,and number of elemts to be removed from strat)





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



  //                      MAP                                 FILTER                                     REDUCE
  // When ever we wnt to create a new array           takes a array and chamges the             applied on a array and a
  //  from the given array by performing some         elements of that array by applying       function is passed , first
  //  operation on each element                    some function or consition on the        on first 2 elements and so on.
                                                  //  elements of the given input array 


// MAP
   let arr = [2,5,8,9,56]
   let sqArray = arr.map(e=>{return e**2})
   console.log(sqArray)
   
   

  //  FILTER
  let a1 = [3,5,,8,9.6,78,93,2]
  let n1 = a1.filter(e=>{return e>7})
  console.log(n1)
  
  // REDUCE
  
  let b = [1,34,5,6,77,8,8]
  let newb = b.reduce((p,q)=>{return p*q})
  console.log(newb)