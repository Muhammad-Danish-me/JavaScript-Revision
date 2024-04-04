// // var userName = prompt("Enter your username")
// // if (userName == "male"){
// //     alert("you are male")
// // }else if (userName == "female"){
// //     alert("you are female")
// // }else{
// //     alert("invalid input")
// // }


// // var education = prompt("Enter your education");

// // if (education !== "matric"){
// //     alert("eligible")
// // }else{
// //     alert("not eligible")
// // }


// // var age = prompt("Enter Your Age! Must be 18 or above otherwise not eligble")
// // if (age >= 18){
// //  alert("eligible")
// // }else  {
// //     alert("Not Eligible")
// // }


// // var friesLekarAo = prompt("fries kidr se laye ho")
// // if (friesLekarAo === "khubaib"){
// //     alert("Phyli Dafa koi acha kam kya")
// // }else if (friesLekarAo === "waseem"){
// //     alert("is se nhi lani thi. Chalo Khair hai")
// // }else if (friesLekarAo === "imran"){
// //     alert("is se nhi lani thi chalo khair hai")
// // }else{
// //     alert("wapis krwao mene iski nhi khani")
// // }



// // var myAnswer = prompt("where is Quaid e Azam Mazar")
// // if (myAnswer.toLowerCase() === "karachi"){
// //     alert("correct")
// // }else{
// //     alert("wrong")
// // }



// // var userName = prompt("Enter a username") || "not provided"

// // console.log(userName)



// // var userName = prompt("enter a username");

// // if (userName){
// //     console.log(userName)
// // }else{
// //     console.log("not provided")
// // }\


// // Arrays 

// var students = ["Danish" , "Hammad" , "Ahmed" , "Ali" , "Kamran"]

// console.log(students)

// students[5] = "jawad"   // add jawad

// // console.log(students)

// var pushReurnValue = students.push("Faraz","Rizwan")  // Add one or more elements from end on an array

// console.log(pushReurnValue)  // push return lenght

// // console.log(students)

// var popReturnValue = students.pop() // remove one element from end of an array

// console.log (popReturnValue)   // pop Return Removing value


// // console.log(students)


// var myStudents = ["Danish" , "Hammad" , "Ahmed" , "Ali" , "Kamran"]

// var shiftReturnValue = myStudents.shift() 

// console.log(shiftReturnValue)  // return remove value

// console.log(myStudents)


// var unshiftReturnValue = myStudents.unshift("Danish" , "faraz" , "Rizwan" )

// console.log(unshiftReturnValue)  // return value is lenght

// console.log(myStudents)


// var myStudentsNames = ["Danish" , "Hammad" , "Ahmed" , "Ali" , "Kamran"]
// console.log(myStudentsNames)

// myStudentsNames.splice(1, 1) // Delete index 1 value
// console.log(myStudentsNames)

// myStudentsNames.splice(1 , 0 ,  "Hammad") // update value before Element index 1
// console.log(myStudentsNames)


// var myStudentsNames = ["Danish" , "Hammad" , "Ahmed" , "Ali" , "Kamran"]

// var copyarr = students.slice(1,3) // copy array     1 value is index second also index  and slice accept minus value

// console.log(copyarr)

// console.log(myStudentsNames)



// var  fullName = "Muhammad Danish"

// var copy = fullName.slice(9)
// console.log(copy)




// // for loop

// // for(var i = 1; i <= 5; i++ ){
// //     console.log(i)
// // }

// // var cities = ["Karachi", "Islamabad", "Lahore" , "sukkur" , "hyderabad"]

// // for(var i = 0; i < cities.length; i++){
// //     console.log(i , cities[i])
// // } 



// // table

// var table = 2

// for(var i = 1; i <= 10; i++){
//     console.log("Table", table + " x " + i + " = " + table * i)
// }



// var cities = ["Karachi", "Islamabad", "Lahore" , "sukkur" , "hyderabad"]
// var flag = "false"
// for(var i = 0; i < cities.length; i++){
//     if (cities[i] === "Karachi"){
//         flag = "true"
//         console.log("milgaya")
//     }
// }
// if (flag === "false"){
//     console.log("nhi mila")
// }



// var userInput = prompt("Inter Anything")
// var palindromeWords = ["civic", "madam" , "maham", "radar" , "level", "refer"]
// var flag = "false"
// for (var i = 0; i < palindromeWords.length; i++){
//     if (palindromeWords[i] == userInput){
//         flag = "true"
//         alert("Palindrome word")
//     }
// }
// if (flag == "false"){
//     alert("Not Palindrome Word")
// }


// min & max

var arr = [2,5,6,8,3,1,9,7]
var min = arr[0]

for(var i = 0; i < arr.length; i++){
    if (arr[i] < min){
        min = arr[i]
    }
}
console.log(min)