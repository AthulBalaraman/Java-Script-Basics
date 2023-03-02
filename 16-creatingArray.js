// What are the different ways to create an array in javascript

// Using array literal
function arrayLiteral(){
  let array = ["Athul","vishnu","shone"]
  console.log("This is array created using array literal : ",array)
}

// using and array constructor

function arrayConstructor(){
  let array = new Array("Athul","vishnu","shone")
  console.log("This is array created using array constructor : ",array)
}

// Using array.of method

function arrayOF(){
  let array = Array.of("Athul","vishnu","shone")
  console.log("This is array created using array.of method : ",array)
}

// Using array.from method 

function arrayfrom(){
  let array = Array.from("Athul");
  console.log("This is array created using array.from method : ",array)
}

// Using spread operator

function spread(){
  let name = "Athul"
  let array = [...name]
  console.log("This is array created usging spread operator : ",array)
}


arrayLiteral()
arrayConstructor()
arrayOF()
arrayfrom()
spread()