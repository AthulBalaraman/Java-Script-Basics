function interchange(){
  let a = [1,2,3,4,5,6,7]
  let b = [11,12,13,14,15,16,17]
  let temp = []

  temp = a
  a=b
  b=temp
  console.log("THis is array a",a)
  console.log("This is a array b",b)
}
interchange()