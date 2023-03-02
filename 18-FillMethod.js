// How would you fill static values in a given array in js
// You can use fill method

function fillMethod(){
  let numbers = [1,2,3,4,5]
  numbers.fill(0)
  console.log("This is numbers array after fill method",numbers)

  let numbers2 = [1,2,3,4,5]
  numbers2.fill(0,2,4) // Here 2,4(inclusive) is the range 
  console.log("This is numbers 2 after fill method",numbers2)
}
fillMethod()