console.log("Hello")



var a = 2;
var b = 6
var c = "45"


// var is globally scoped , no block scope

// so we always try to use let 

// let is block scoped


// const cant be changed


console.log(a+b)
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)




// data types : primitive        object(user defined data type)

// premitive : 
// null number(both int and float) String Boolean Symbol bigint undefined(not yet defined ,but declared)


// null ka typeof is object even its a primitive data type 
// which is wrong but we cant modifi it as old database codes are relied on it so,we cant change
// WE HAVE TO REMEBER THIS -- Interview's ke liye



// object:
// it is the collection of key value pairs of diff datatypes and common name is given to access it , by {
// }

// ex:
let o = {
  name : "adithya",
  "roll number"  :2324
}

console.log(o)


// if we want to add another attribute which is not there in it then it will be added else updated
o.name = "dexa"
o.salary = 45645
console.log(o)
// both ways are valid
console.log("salary :  "+o.salary)
console.log("salary :  " + o['salary'])