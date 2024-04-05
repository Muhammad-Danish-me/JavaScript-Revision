var text = "My Name is Muhammad Danish"

for(var i = 0; i < text.length; i++){
    console.log(text.slice(i, i + 6) === "Danish")
}


var myText = "Oligodon, commonly known as the kukri snakes, is a genus of colubrid snakes that was first described by Austrian zoologist Leopold Fitzinger in 1826."

var user = prompt("Enter your word")

for(var i = 0; i < myText.length; i++){
    if(myText.slice(i, i + user.length) === user){
        console.log("found")
    }
}


var myText1 = "Oligodon, commonly known as the kukri snakes, is a genus of colubrid snakes that was first described by Austrian zoologist Leopold Fitzinger in 1826."

if(myText1.indexOf("commonly") !== -1){
    console.log("Found")
}else{
    console.log("not found")
}