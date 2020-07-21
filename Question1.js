let arr= prompt("enter elements" ).split('')
let oddCube= arr.filter((el)=>el%2!==0).map(el=>el**3)
console.log(oddCube);