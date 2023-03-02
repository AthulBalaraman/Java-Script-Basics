const prompt = require('prompt-sync')();

function findEven(){
  const array = []
  const size = prompt("Enter the size of the array : ")
  let count = 0 ;
  console.log("Enter the values into the array : ")
  for(var i = 0; i < size;i++){
    array[i]=prompt()
  }
  for(var i = 0;i<size;i++){
    if(array[i]%2==0)
      count++;
  }
  console.log("The no of even numbers in the array is " + count)
}

findEven()