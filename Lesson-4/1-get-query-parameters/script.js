//"https://my.site.com?userId=7"

//Example 1
//http://127.0.0.1:5500/Lesson-4/1-get-query-parameters/index.html?school=noroff
console.log(document.location)

//how to get the query param
console.log(this.location.search); //?school=noroff

const queryString = document.location.search
//in order to get the value
const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("school")); //noroff
const mySchoolParam = params.get("school");

//  I want to check that I have a param called school

if(!params.has("school")){
    console.log("I dont have the param");
}
// console log I have the param
else if (params.get("school")==="noroff"){
    console.log("okay the param is noroff")

}
// I want to check that this param is equal to noroff
// okay the param is Noroff
else {
    document.location.href = "second.html";
}

// else redirect to another page