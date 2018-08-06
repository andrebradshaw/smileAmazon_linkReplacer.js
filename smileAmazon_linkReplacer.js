//first lets get the url and give it a name.
var url = window.location.href; // see https://www.w3schools.com/js/js_window_location.asp

//now we need to replace the www with smile and strip out the referral link information using regular expressions and the replace function. 
var newurl = url.replace(/\/www\./, '/smile.').replace(/ref=.+/, ''); //see https://www.w3schools.com/jsref/jsref_replace.asp

if(/amazon/.test(url) === true){//this checks to see if the user is on an amazon page. 
  
  //now we need a function to open the link. this is a built-in JS function for the browser
  //, and I want this to open in the current window. to do this, we say "_self"
  window.open(newurl, "_self"); //see https://www.w3schools.com/jsref/met_win_open.asp
  
}
