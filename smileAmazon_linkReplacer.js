var url = window.location.href;
if(/amazon/.test(url) === true){
var newUrl = url.replace(/\/www\./, '/smile.');
window.opem(newUrl, '_self');
}



