var stat=0;
var roll=document.getElementById("roll");
var hold=document.getElementById("hold");
var curr1=document.getElementById("current1").value;
var score1=document.getElementById("score1").value;
var curr2=document.getElementById("current2").value;
var score2=document.getElementById("score2").value;
var val1=0;
var dice=document.getElementById("dice");
var val2=0;


function getRndInteger() {
    return Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
}
function holdVal(){
	if(stat%2===0){
		val1=val1+temp;
		curr1=0;
		score1=val1;
		document.getElementById("current1").value=0;
		document.getElementById("score1").value=val1;
	}else{
		val2=val2+temp;
		curr2=0;
		score2=val2;
		document.getElementById("current2").value=0;
		document.getElementById("score2").value=val2;		
	}
	stat=stat+1;
	console.log(stat);
	if(val1>=30||val2>=30){
		alert("Won");
	}else{
		temp=0;
	}
}
var temp=0;
function game(){
	console.log(stat);
	val=getRndInteger();

	switch(val){
		case 1:dice.src="dice-1.png";break;
		case 2:dice.src="dice-2.png";break;
		case 3:dice.src="dice-3.png";break;
		case 4:dice.src="dice-4.png";break;
		case 5:dice.src="dice-5.png";break;
		case 6:dice.src="dice-6.png";break;
		default:dice.src="dflt-dice.jpg";

	}



	if(val===1){
		if(stat%2===0){
			val1=0;
			curr1=0;
			score1=0;
			document.getElementById("score1").value=0;
			document.getElementById("current1").value=0;
		}else{
			val2=0;
			curr2=0;
			score2=0;
			document.getElementById("score2").value=0;
			document.getElementById("current2").value=0;
		}
		temp=0;
		stat=stat+1;		
	}
	else{

		temp=temp+val;
		if(stat%2===0){
			document.getElementById("current1").value=temp;
		}else{
			document.getElementById("current2").value=temp;
		}

	}
}

function resetGame(){
	window.location.assign("file:///C:/Users/Vaibhav Gupta/Desktop/JavaScript/Pig Game/index.html");
}

hold.addEventListener("click",holdVal);
roll.addEventListener("click",game);