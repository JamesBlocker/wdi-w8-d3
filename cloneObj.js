var obj1 = {
    name: "James",
    age: 37
}

// function clone(obj) {
//     var result = {}
//     for(key in obj) {
//         result[key] = obj[key]
//     }
//     return result
// }

function clone(obj) {
    return { ...obj } 
}

var obj2 = clone(obj1)
console.log(obj1)
console.log(obj2)
console.log(obj1 === obj2)