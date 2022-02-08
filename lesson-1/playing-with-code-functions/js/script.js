


//fat arrow function, function expression
const showPetName = (name) => { //det er god praksis å ha selvom arrowfunksjoner trenger ikke parentes her og heller ikke curly braces
    console.log("the pet name is: " + name);
}


/*
const showPetName = (name) => { //det er god praksis å ha selvom arrowfunksjoner trenger ikke parentes her og heller ikke curly braces
    console.log("the pet name is: " + name);
}*/

const showPetNameTwo = (name, age) => console.log("the pet name is: " + name + " and the age is: " + age);


showPetName("rhino");
showPetNameTwo("lion", "14");

//CONCATENATION (det er mellomrommene man får med '+ " " +')
console.log("my name is hesham")
//my name is hesham

const name ="hesham";
const age ="30";
console.log("my name is")
console.log(`my name is ${name} my age is ${age}`)


//global and local scope, global er eklært utenfor funksjon og kan brukes overalt (globalt)
const cityName = "Oslo";
function showMeTheCityName (){
    console.log("The cityname is: " + cityName);
}
showMeTheCityName();
console.log(cityName)

function isScania(){
    if(cityName === "Oslo"){ //bruk strict equality
        console.log(cityName + " " + "is Scandinavian");
    } else {
        console.log("not scandinavian");
    }
}

isScania(cityName)

{
    const name = "Uzo";
    const car = "Tesla";
    let someBuildingNumber = 21;
    var someAge = 18;
    console.log(name);
    console.log(car);
}


console.log(someAge);
//console.log(someBuildingNumber);
//console.log(car);


//å logge'car' her fungerer ikke, fordi verdiene er definert inni block
//"var someAge" fungerer selvom det er inni, fordi var er gammalt. 
// let hadde derimot ikke fungert

//this

//"console.log(this)" får opp hele window, men i situasjon under får det kun opp myFunction

const myObject = {
    number: 10,
    myFunction: function() {
        console.log(this.number);
    }
}

myObject.myFunction();

//this

//ternary operator
const pet = "rhino";
let isDangerous;

if(pet === "rhino") {
    isDangerous = true; //boolean
} else {
    isDangerous = false;
}

//hvordan konvertere disse fem linjene til èn: 

isDangerous = pet === "rhino" ? true : false;
//condition ? true : false

//Sudi way
isDangerous = pet === "rhino";
//kan også gjøres sånn
isDangerous = pet === "hesham" && pet === "rhino";
