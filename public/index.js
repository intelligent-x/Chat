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
	document.querySelector("#chat").appendChild(userMessage);
	chat();
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

function chat(){
	var childs = document.querySelector("#chat").childNodes;
	var current = childs[ childs.length - 1 ].innerText;
	if( /你是(\?|？)*/g.test(current) ){
		resend( "我想想~~~嗯......", 500 );
		return resend( "你忘了吗? 我是你的机器人吴芷妍呀! ", 1000 );		
		if( /(你是|)谁发明的/g.test(current) ){
			resend( "那当然是聪明顶顶的郑禄曦啦!", 500 );
		}
	} 
	// switch( current ){
	// 	case "Hello":
	// 	case "hello":
	// 	case "Hello!":
	// 	case "hello!":
	// 	case "Hello！":
	// 	case "hello！":
	// 	case "Hi":
	// 	case "Hi!":
	// 	case "Hi！":
	// 	case "hi":
	// 	case "hi!":
	// 	case "hi！":
	// 	case "你好":
	// 	case "你好你好":
	// 	case "你好你好!":
	// 	case "你好你好！":
	// 	case "你好!":
	// 	case "你好！":
	// 	case "你好呀":
	// 	case "你好呀!":
	// 	case "你好呀！":
	// 		resend( "找我有什么事情吗?", 100 );
	// 	break;
	// 	case "没什么事":
	// 	case "想找你聊聊天!":
	// 	case "想找你聊天": 
	// 	case "有点无聊, 想找你聊天":
	// 	case "我好无聊":
	// 		resend( "你聪明可爱的机器人我可以陪陪你哦!", 500 );
	// 	break;
	// 	case "秒回呀":
	// 	case "秒回呀!":
	// 	case "秒回":
	// 	case "秒回!":
	// 		resend( "那必须的! 我可是你可爱的机器人呀! ", 500 );
	// 	break;
	// 	case "你是谁?":
	// 	case "你是?":
	// 	case "你叫什么名字?":
	// 	case "你叫什么名字":
	// 	case "你的名字?":
	// 	case "你的名字是?":
	// 		resend( "我想想~~~嗯......", 500 )
	// 		resend( "你忘了吗? 我是你的机器人吴芷妍呀! ", 1000 );
	// 	break;
	// 	default:
	// 		resend( "是的。。。", 500 );
	// 	break;
	// }
}