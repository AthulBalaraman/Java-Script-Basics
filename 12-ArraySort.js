const prompt = require('prompt-sync')()

let array = []
const size = prompt("Enter the size of the array : ")
console.log("Enter the values into the array : ")
for(var i = 0; i < size; i++){
  array[i] = prompt()
}
for(var i = 0; i<size;i++){
  var temp = 0 ;
  for(var j = 0; j < size; j++){
   
    if(array[i]<array[j]){
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
}

console.log("The sorted array is as follows : " + array)