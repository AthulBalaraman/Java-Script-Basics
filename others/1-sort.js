const prompt = require('prompt-sync')()


function sort(){
  const array = []
  const size = prompt('ENTER THE SIZE OF THE ARRAY : ')
  console.log("ENTER THE VALUES INTO THE ARRAY : ")
  for (var i=0;i<size;i++){
    array[i] = prompt()
  }
  console.log("THE ENTERED ARRAY IS AS FOLLOWS : ")
  array.map(function(item){
    console.log(item)
    return(item)
  })

  var temp = 0
  for(var i=0;i<size;i++){
    for(var j=0;j<size;j++){
      if(array[i]<array[j]){
        temp = array[j]
        array[j] = array[i]
        array[i] = temp
      }
    }
  }

  console.log("THE SORTED ARRAY IS AS FOLLOWS : ")

  array.map(function(item){
    console.log(item)
    return(item)
  })

}
sort()
