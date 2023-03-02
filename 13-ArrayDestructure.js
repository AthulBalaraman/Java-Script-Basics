 // Basic destructuring

 function basicDestructuring(){
  const array = ["Athul", "vishnu", "shone", "pranav"];
  console.log("array : " + array);
  const [ a, b, c, d ] = array;
  console.log("this is a :", a);
  console.log("this is b :", b);
  console.log("this is c :", c);
  console.log("this is d :", d);
 }
 basicDestructuring()


  // How would you use arrays to swap variables in js
  // You can use an array to swap two variables in javascript by using destructuring assignment


  function swapVariables(){
    let x = 10;
    let z = 30
    let y = 20;

    [x,z,y] = [y,x,z]
    console.log("this is x ",x)
    console.log("this is y ",y)
    console.log("this is z ",z)
  }

  swapVariables()
  