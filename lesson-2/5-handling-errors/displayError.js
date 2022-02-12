//i want a function whcih takes somem essage 
//and it returns an HTML tag with this message in it

function displayError(message = "Some error happened : ( "){
    return`<div class="error">${message}</div>`;
}
