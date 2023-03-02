
function arrayMap(){
  let numbers = [1,2,3,4,5,6,7,8,9,10]
  let doubledNumbers = numbers.map(function(num){
    return num*2
  })
  let tripleNumbers = numbers.map((num)=>num*3)
  console.log("This is doubled numbers: " + doubledNumbers)
  console.log("This is triple numbers: " + tripleNumbers)
}
// arrayMap()

function arrayFilter(){
  let numbers = [1,2,3,4,5,6,7,8,9,10]
  let output =  numbers.filter(function(num){
    return num%2==0
  })
  let output2 = numbers.filter((num)=>num%3==0)
  console.log("This is output1 : " + output)
  console.log("This is output2 : " + output2)
}
// arrayFilter()


// Reduce function actualy doesnt reduce anything
// It is used when you have to take all the elements of an array and comeup with a  single value output

function arrayReduce(){
let numbers = [1,2,3,4,5,6,7,8,9,10]
const output = numbers.reduce(function(accumulator,current){
  accumulator = accumulator+current
  return accumulator
})
console.log("This is reduce output: " + output)
}
arrayReduce()


