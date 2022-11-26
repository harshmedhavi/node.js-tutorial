//Node.js uses CommonJS, every file is module
//MODULES - Encapsulated code (Only share minimum)

// const john = 'john'
// const peter = 'peter'
// const sayHi = (name) => {
//     console.log(`Hello ${name}`);
// }

const names = require('./4-names')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavour')

require('./7-mind-grenade');

sayHi(`Harsh`)
sayHi(names.john)
sayHi(names.peter)

//by alternate syntax
console.log(data.singlePerson);
console.log(data.items);