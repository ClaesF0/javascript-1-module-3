/*function createToaster(type = "", message = ""){
    const html = `<div class="toaster">${message}</div>`
    // det blir overflødig å skrive "return html;" her
}*/
/*
function createToaster(type = "", message = "") {
    const html = 
    <div class="toaster">${message}</div>
    ;
    return html;
}
*/

function createToaster(type="", message = ""){
return `<div class="toaster ${type}">;
    <span>${type}</span>
    <span>${message}</span>
</div>`;
}