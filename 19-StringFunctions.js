// In this program we discuss about most commonly used string functions in javascript

function stringFunctions(){
  let str = "Athul"
  let c = str.charAt(3)
  console.log("This is charAt: " + c)

  let str1="Athul"
  let str2="Balaraman"
  console.log("This is str2.length : " + str2.length)

  let str3 = str1.concat(str2)
  console.log("This is concat: " + str3)

  let str4 = str1.toLowerCase()
  console.log("This is toLowerCase: " + str4)

  let str5 = str1.toUpperCase()
  console.log("This is toUpperCase: " + str5)

  let str6 = "  Athul  "
  console.log("This is str6       : " + str6)
  console.log("This is str6.trim  :",str6.trim())


  let index = str2.indexOf("la")
  console.log("This is indexOf :",index)

  let str7 = "Hello, world"
  let slice = str7.slice(7,11) // 11rd place not included
  console.log("This is slice :",slice)

  let substring = str7.substring(7,11)
  console.log("This is substring :",substring)
 
  let substr1 = str7.substr(7,5) // This function is depreciated
  console.log("This is substr :",substr1)

  let lastIndex = str7.lastIndexOf("o")
  console.log("This is last index :",lastIndex)

}
stringFunctions()