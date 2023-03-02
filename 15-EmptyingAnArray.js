//How would you empty and array in the javascript

// Reassigning the array to a new empty array
function reAssign() {
  let array = ["Athul", "vishnu", "shone"];
  array = [];
  console.log("array 1 :", array);
}

// Setting length property to 0
function settingLength(){
  let array = ["Athul", "vishnu", "shone"];
  array.length = 0;
  console.log("array 2 :", array);
}

// using Splice function 
function usingSplice(){
  let array = ["Athul", "vishnu", "shone"];
  array.splice(0,array.length)
  console.log("array 3 :", array);
}

reAssign()
settingLength()
usingSplice()
