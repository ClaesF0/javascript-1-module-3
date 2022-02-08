console.log("test123")

//hva er synchronous system? 
//som en hånd som skal gjøre ti oppgaver
//asynchronous system er som ti hender som gjør ti oppgaver 
//-> tasks are completed independently
//I sync er det feks tre bilder som laster når det forrige er ferdig
//I async er det feks tre bilder som laster samtidig og uavhengig av hverandre


//synchronous code example

console.log(" I ")
console.log(" eat ")
console.log(" Ice Cream ")

/* La oss anta det tar etpar sekunder å spise en iskrem. La oss teste 
asynkront system. */

//asynk eksempel

console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
    console.log("eat");
},2000)

console.log("Ice Cream");


// Now that you know the difference between synchronous and async operations

