/*
function printMessage (message){
    //I want to check if there is no message
    //I want to assign text to this message
    //I want to console log the message
    if(!message){
        message = "No value is here";
    }
    console.log(message);
}

printMessage();
*/
//default value for the property argument

function printMessage(message = "No value is here two"){
    console.log(message)
}

//printMessage();
printMessage("Hello Claes how are you?")

//example 3

function getSum(numA, numB){
    return numA + numB;
}

const totalSum = getSum(4, 4);
console.log("totalSum: "+ totalSum);

const totalSumTwo = getSum();
console.log(totalSumTwo);
//her blir NaN logget
