//What do you understand by map function in javascript ?

// 1 - Map function in javascript is a built in object that holds key value pairs and provides
//    a simple way to lookup values based on keys.

function MAP() {
  let map = new Map();

  map.set("name", "Athul");
  map.set("age", 21);
  map.set("city", "calicut");

  console.log("1 : ", map.get("name"));
  console.log("2 : ", map.get("age"));
  console.log("3 : ", map.get("city"));
}

MAP()

// 2 - map -> In Array method

function arrayMap(){
  let numbers = [1,2,3,4,5,6,7,8,9,10]
  let doubledNumbers = numbers.map(function(num){
    return num*2
  })
  let tripleNumbers = numbers.map((num)=>num*3)
  console.log("This is doubled numbers: " + doubledNumbers)
  console.log("This is triple numbers: " + tripleNumbers)
}

arrayMap()

