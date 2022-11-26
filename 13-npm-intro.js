const _ = require('lodash')

const items = [1,[2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);

//For external dependencies, we first need to run npm i <package-name>
//Then we can require them