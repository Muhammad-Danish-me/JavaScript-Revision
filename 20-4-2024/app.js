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


// finding min and max word

var arr = [10, 11, 9, 20, 22, 33, 44, 77,8]
var  min = arr[0]

for(var i = 0; i < arr.length; i++){
    if (arr[i] < min){
       min = arr[i]
    }
  
}
  console.log(min)