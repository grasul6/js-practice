// const lastName = prompt("enter your lastName");

// if (lastName.length >= 6 && lastName.indexOf('  ') === -1) {
//     console.log("valid last name");
// }else{
//     console.log("incorrect format for last name");
// }

// const firstName = prompt("enter your firstName");

// if (firstName.length >= 6 && firstName.indexOf('  ') === -1) {
//     console.log("valid first name");
// }else{
//     console.log("incorrect format for first name");
// }


// let random = Math.random()

// if (random<0.5) {
//     console.log("your number is less than 0.5");
// }else if (random = 0.5) {
//     console.log("your number is equal 0.5");
// }else {
//     console.log("your number is greater than  0.5");
// }



// const password = prompt("please enter a new password ");

// password must be 6+ character


// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//        console.log("valid password!"); 
//     }else {
//         console.log("password cannot contain spaces!");
//     }
// }else {
//     console.log("password too short! must be 6+ character");
// }


// const password = prompt("Please enter your new password");

// // password must be 8+ character
// if (password.length >= 8) {
//     if (password.indexOf(' ') === -1) {
//         console.log("valid password");
//     }else{
//     console.log("password too short! must be enter 8+ character");
//     }
// // password can not include space
// }else{
//     console.log("password can not contain spaces!");
// }tou

// and or not logic

// const password = prompt('enter password');

// if (password.length >= 8 && password.indexOf(' ') === -1) {
//     console.log("valid password");
// }else {
//     console.log("incorrect formate for password");
// }

// 0-5 free 
// 6-10 $10
// 11-64 $20
// 65+ free 

const age = 64;
if (age >= 0 && age < 6 || age >=65) {
    console.log("free");
}else if   (age >= 6 && age < 11){
    console.log("$10");
}else if (age >= 11 && age < 65) {
    console.log("$20");
}else {
    console.log("invalid age!");
}