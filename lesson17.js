/* Assuming you completed lesson 15 and 16 properly. Now rewrite
the anonymous function using the arrow function.

Expected  output in console:

        This Ran 0
        This Ran 1 
        ['John', 'Roger']
*/
var people = [{
        name: "John",
        age: 55
    },
    {
        name: "Roger",
        age: 44
    },
    {
        name: "Betty",
        age: 37
    }
]


var nameFilter = function (filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            anonymousFunction(i)
            results.push(currentName)

        }
    }

    return results
}

function foo() {}


const myFunction = function (x) {
    return x * 2
}
let myArrow = x => x * 2


let mars = new Planet(500)

var filteredNames = nameFilter("Betty", (f => console.log(`This Ran ${f}`)))


console.log(filteredNames)