/*
//When we are using async/await, we use this format:


//magical keyword

async function kitchen(){

    try{
        // la oss lage et fake problem
        await abc;
    }

    catch(error){
        console.log("abc does not exist", error)
    }
    finally{
        console.log("Runs code anyways")
    }
}

kitchen(); //run the code
*/


// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]



// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword
async function kitchen(){}

    function getSomething(){
        console.log('hello I am RESPONSE FROM API');
    }

    const result = document.querySelector(".result")

    try{
getSomething();
result.innerHTML="SUCCESS!";
    }

    catch(error){
        console.log("abc does not exist", error);
        result.innerHTML="nah there is an error!";
    }

    finally{
        console.log("Runs code anyways")
    }


kitchen()  // run the code