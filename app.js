const lastName = prompt("enter your lastName");

if (lastName.length >= 6 && lastName.indexOf('  ') === -1) {
    console.log("valid last name");
}else{
    console.log("incorrect format for last name");
}