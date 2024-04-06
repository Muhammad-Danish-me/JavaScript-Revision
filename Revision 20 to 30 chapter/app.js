// changing case

var fullName = "Muhammad Danish"

console.log(fullName.toUpperCase())

var fullName = "Muhammad Danish"

console.log(fullName.toLowerCase())


// check length

var text = "Hello world"

console.log(text.length)

// slice method

var copy = "Danish"

console.log(copy.slice(0,1,))


var text = "World War II"

var firstChar = text.indexOf("World War II");
 if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
    console.log(text)
 }