var availHeight = window.innerHeight - 50;

var chatHeight = availHeight * 4 / 5;
var typeHeight = availHeight / 5;

document.querySelector("#chat").style.height = `${chatHeight}px`;
document.querySelector("#type").style.height = `${typeHeight}px`;