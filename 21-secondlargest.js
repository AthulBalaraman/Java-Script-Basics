const array = [1, 58, 75, 1, 11, 25, 25, 9, 65, 84, 75, 84,84,95,95,95];
function inbuilt() {
  const unique = [...new Set(array)];
  console.log(unique);

  unique.sort(function (a, b) {
    return a - b;
  });
  console.log(unique);

  console.log(
    "The second largest element in the array is : ",
    unique[unique.length - 2]
  );
}


function logic(){
  const length = array.length
  sort()
  find()
  function sort(){
    let temp; 

    for(var i=0;i<length;i++)
    {
      for(var j=0;j<length;j++)
      {
        if(array[i]<array[j]){
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    console.log("The sorted array is as follows :")
    console.log(array)
  }

  function find(){
    let p = 0;
    let count = 0;
    let answer = 0
    let maxCount = 0 ;
    let secondCount = 0;
    let answer2 = [] ;
    let answerCount = 0
    for(var i=0;i<array.length;i++){
      if(array[i]==array[p]){
        count++;
      }
      else{
        answer = array[i-1]
        p = p+count
        if(count>maxCount){maxCount=count}
        else{
          if(count>secondCount){
            secondCount = count
          }
          else if(count == secondCount){
            answer2[answerCount] = array[i-1]
            answerCount++
          }
        }
        count = 0
        i--
      }
    }

    console.log("The second largest number in the array is : ",answer)
    console.log('The second largest repeatd number is :' ,answer2)
  }

}
logic()