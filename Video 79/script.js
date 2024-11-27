let a = 13;

let b = 4;



try{
  let sum = parseInt(a)+parseInt(b);
  if(sum>10){
    throw console.log("Exceed hogaya")
  }
  console.log(sum);
}
catch{
  console.log("Error aayaga")
}