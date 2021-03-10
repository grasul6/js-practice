const lastName = prompt("enter your lastName");

if (lastName.length >= 6 && lastName.indexOf('  ') === -1) {
    console.log("valid last name");
}else{
    console.log("incorrect format for last name");
}

const firstName = prompt("enter your firstName");

if (firstName.length >= 6 && firstName.indexOf('  ') === -1) {
    console.log("valid first name");
}else{
    console.log("incorrect format for first name");
}


let random = Math.random()

if (random<0.5) {
    console.log("your number is less than 0.5");
}else if (random = 0.5) {
    console.log("your number is equal 0.5");
}else {
    console.log("your number is greater than  0.5");
}