const messageSuccessContainer = document.querySelector(".message-container");
const messageInfoContainer = document.querySelector(".message-info");
const messageErrorContainer = document.querySelector(".message-error");
const messageWarningContainer = document.querySelector(".message-warning");

/*messageContainer.innerHTML = `<div class="message">some message</div>`*/

messageSuccessContainer.innerHTML = createToaster("Success", "Files are uploaded");
messageInfoContainer.innerHTML = createToaster("Info", "Files are uploaded but...");
messageErrorContainer.innerHTML = createToaster("Error", "Zry;(");
messageWarningContainer.innerHTML = createToaster("Warning", "Files must be less than 5mb");