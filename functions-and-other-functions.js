/*
# Learning Goals

- Modify a function to call another function as a means
to eliminate duplication
- Pass a function as an argument
- Define an anonymous function
- Refactor an anonymous function to an assigned function
*/

let fullName = (fName, lName) => {
  return `${fName} ${lName}`
}

let greet = (taco, monkey) =>{
  return `Hello there, ${fullName(taco, monkey)}`
}

let firstName = 'Taco'
let lastName = 'Monkey Esq. III'

console.log(greet(firstName, lastName))

// let names = [
//   'Thor',
//   'Antman',
//   'Gammora',
//   'Spiderman',
//   'Dr. Strange'
// ]

// // names.forEach(name => {
// //   charCheck(name)
// // })

// let cool = []
// let lame = []

// let print = (array) =>{
//   array.forEach(string =>{
//     console.log(string)
//   })
// }

// let charCheck = (name) =>{
//   if(name.toLowerCase().includes("t")){
//     cool.push(`${name} is a cool character is the Marvel Universe`)
//   }else{
//     lame.push(`${name} is a lame character is the Marvel Universe`)
//   }
//   print(cool)
//   print(lame)
// }

// names.forEach(charCheck)

// // charCheck('Wonder Woman')