var timer = null;
var start = ["你好呀!","Hello~","Hi!","在嘎哈?"];

window.onload = function(){
	clearInterval( timer );
	timer = setInterval( function(){
		var date = new Date(),
			hour = date.getHours(),
			minute = date.getMinutes(),
			second = date.getSeconds();
		hour = hour < 10 ? `0${hour}` : hour;
		minute = minute < 10 ? `0${minute}` : minute;
		second = second < 10 ? `0${second}` : second;
		document.querySelector("#time").innerText = hour + ":" + minute + ":" + second;
	}, 1000 );
	resend( start[ Math.floor( Math.random() * start.length ) ], 500 );
}

document.addEventListener( "keydown", function( e ){
	if( e.key === "Enter" && e.ctrlKey ){
		send();
	}
} );

function send(){
	if( !document.querySelector("#message").value ) return;
	var userMessage = document.createElement("div"),
		headImg = document.createElement("img"),
		message = document.createElement("p");

	userMessage.className = `userMessage`;
	headImg.src = "./public/user.jpg";
	headImg.setAttribute("width","50px");
	headImg.setAttribute("height","50px");
	message.innerText = document.querySelector("#message").value;
	document.querySelector("#message").value = "";

	userMessage.append(headImg);
	userMessage.append(message);
	document.querySelector("#chat").append(userMessage);
}

function resend( content, delayTime ){
	setTimeout( function(){
		var computerMessage = document.createElement("div"),
		headImg = document.createElement("img"),
		message = document.createElement("p");

		computerMessage.className = `computerMessage`;
		headImg.src = "./public/computer.jpg";
		headImg.setAttribute("width","50px");
		headImg.setAttribute("height","50px");
		message.innerText = content;

		computerMessage.append(headImg);
		computerMessage.append(message);
		document.querySelector("#chat").append(computerMessage);
	}, delayTime );
}