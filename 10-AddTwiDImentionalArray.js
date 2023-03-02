var prompt = require('prompt-sync')()

function sum(){
const array1 = []
const array2 = []
const sum = []

let limit = prompt("enter the size of the array")
console.log("Enter the values of the first array")
for(var i=0;i<limit;i++){
  array1[i]=[]
  for(var j=0;j<limit;j++){
  array1[i][j] = prompt()
  }
}

console.log("Enter the values of the second array")
for(var i=0;i<limit;i++){
  array2[i]=[]
  for(var j=0;j<limit;j++)
  {
    array2[i][j] = prompt()
  }
}

console.log("This is the first array")
console.table(array1)

console.log("This is the second array")
console.table(array2)

for(var i=0;i<limit;i++){
  sum[i]=[]
  for(var j=0;j<limit;j++)
  {
    sum[i][j] = Number(array1[i][j]) + Number(array2[i][j])
  }
}

console.log("This is the sum of the two arrays")
console.table(sum)

}
sum()