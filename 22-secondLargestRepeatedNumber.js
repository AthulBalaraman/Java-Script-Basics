const array = [1, 58, 75, 1, 11, 25, 25, 9, 65, 84, 75, 84,84,95,95,95];

function logic(){
  const length = array.length
  const countArray = []
  let countVariable = 0
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

    for(var i=0;i<array.length;i++){
      if(array[i]==array[p]){
        count++;
      }
      else{
        answer = array[i-1]
        countArray[countVariable] = {
          number: answer,
          countValue: count
        }
        countVariable++
        p = p+count
        count = 0
        i--
      }
    }

    console.log("The second largest number in the array is : ",answer)
    console.log("This is count array")
    console.log(countArray)
  }

  function findSecondLargestCounted(){
    const arrayLength = countArray.length
    let maxCount = 0;
    let minCount = 0;
    for(var i=0; i<arrayLength; i++){
      if(countArray[i].countValue >  && )
    }
  }
}
logic()