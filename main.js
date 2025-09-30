//This file is to be executed before writeFileSync.js

var obj = require('./writeFileSync')   //loading the user defined module / local module

var readLine = require('readline');  // this interface is used to read the data from the console

var r1 = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
});




r1.question('Enter name', function(name){
    r1.question('Enter price', function(price){
        obj.writeProduct(name,price)
    });
})

console.log(obj.user1());
console.log(obj.user2());
console.log(obj.user3());   