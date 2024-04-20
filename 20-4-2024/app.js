//  finding palindrome words

var word = prompt("Enter word")
var reverse = "";
for(var i = word.length - 1; i >= 0; i--){
    reverse += word[i]
}

if (reverse === word){
    console.log("it's palindrome word")
}else{
    console.log("it's not palindrome word")
}


