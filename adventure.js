
var zwaard = false

var enchanted = false 

//////////////////

function begin() {
	title.innerHTML = "title1";
	document.getElementById("description").innerHTML = "1) Volg de weg naar huis <br> 2) rechtdoor <br> 3) naar rechts";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "naarHuis();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rechtdoor();");
	document.getElementById("button2").style.visibility = "visible"
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "rechtsaf();");
	document.getElementById("button3").style.visibility = "visible"

	document.getElementById("img").src = "images/begin.bos.png";
	document.getElementById("inventoryItem").style.visibility = "hidden"
}

////////////
function naarHuis() {
	title.innerHTML = "title1";
	document.getElementById("description").innerHTML = "1) Volg de weg naar huis <br> 2) rechtdoor <br> 3) naar rechts";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "naarHuis();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rechtdoor();");
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "rechtsaf();");

	document.getElementById("img").src = "images/begin.bos.png";
	document.getElementById("inventoryItem").style.visibility = "hidden"
}
















///////////////////
function rechtdoor() {

	title.innerHTML = "G-zwaard";
	document.getElementById("description").innerHTML = "1)Loop door <br> 2)Probeer het zwaard uit de steen te halen  <br> 3)Ga terug ";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "enchant();");

	document.getElementById("button2").setAttribute("onclick", "begin();");

	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "begin();");
	document.getElementById("button3").style.visibility = "visible"

if (zwaard == false){
document.getElementById("img").src = "images/zwaard.bos2.jpg";
title.innerHTML = "Fail"
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "sword();");
document.getElementById("button2").style.visibility = "visible"
} else{
title.innerHTML = "zwaard"
document.getElementById("img").src = "images/bos.jpg";
document.getElementById("description").innerHTML = "1)Loop door <br> 2)Ga terug";
document.getElementById("button3").style.visibility = "hidden"
document.getElementById("button2").innerHTML = "keuze 2";
}
	
	}

function rechtdoor2(){

title.innerHTML = "zwaard"
document.getElementById("img").src = "images/bos.jpg";
document.getElementById("description").innerHTML = "1)Loop door <br> 2)Ga terug";
document.getElementById("button3").style.visibility = "hidden"
document.getElementById("button2").innerHTML = "keuze 2";


}


function sword(){
  if (enchanted == false) {
 alert("Je bent niet sterk genoeg")

    document.getElementById("description").innerHTML = "1)Loop door <br> 2)Ga terug ";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "enchant();");

	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "begin();");

	document.getElementById("button3").style.visibility = "hidden"
}

else{ 

zwaard = true;
document.getElementById("description").innerHTML = "1)Loop door <br> 2)Ga terug ";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "enchant();");

document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "begin();");

document.getElementById("inventoryItem").src = "images/zwaard2.jpg"
document.getElementById("inventoryItem").style.visibility = "visible"
document.getElementById("img").src = "images/bos.jpg";
document.getElementById("button3").style.visibility = "hidden"
  }
  
}//einde function zwaard
	

function enchant(){

	document.getElementById("description").innerHTML = "Je bent in wat het lijkt een magisch bos. <br><br> 1)Loop door  <br> 2)Raak een van de rare stenen aan  <br> 3)Ga terug ";
    document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "trol();");

	if (enchanted == false) {

	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "steen();");
    document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "rechtdoor();");
	document.getElementById("button3").style.visibility = "visible";
	}

	else{ 

document.getElementById("description").innerHTML = "Je bent in wat het lijkt een magisch bos. <br><br> 1)Loop door  <br> 2)Ga terug ";
document.getElementById("button3").style.visibility = "hidden";

	}
	document.getElementById("img").src = "images/enchanted_forest.png";

}

function steen(){

enchanted = true
alert("Je voelt opeens een rare schok door je lijf heen gaan.")
alert("Het was een steen waardoor je sterker word")
alert("Dit kan van pas komen")

document.getElementById("description").innerHTML = "1)Loop door  <br> 2)Ga terug";

document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "trol();");

	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rechtdoor();");

	document.getElementById("button3").style.visibility = "hidden";

}




function trol(){

	document.getElementById("description").innerHTML = "Oh nee! Er staat een trol op het pad. Wat ga je doen. <br><br> 1)Probeer langs de trol te lopen <br> 2)Vecht met de trol";
    document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "trol1();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "trol2();");

	document.getElementById("button3").style.visibility = "hidden"

    document.getElementById("img").src = "images/bos.trol.jpg";

}


function trol1(){
 document.getElementById("description").innerHTML = "De trol heeft je er niet langs gelaten, hij heeft je dood geslagen";
    document.getElementById("button1").innerHTML = "Restart";
	document.getElementById("button1").setAttribute("onclick", "begin();");
	document.getElementById("button2").style.visibility = "hidden";


 document.getElementById("img").src = "images/died.jpg";
}


function trol2(){

if (zwaard == false) {
 
 document.getElementById("description").style.visibility = "hidden";
 document.getElementById("button1").innerHTML = "Restart";
 document.getElementById("button1").setAttribute("onclick", "begin();");
 document.getElementById("button2").style.visibility = "hidden";
 document.getElementById("img").src = "images/died.jpg";

}
else{ 
	document.getElementById("description").innerHTML = "De trol is dood, je kunt er nu langs. <br><br> 1)Loop door <br> 2)Ga terug";
    document.getElementById("img").src = "images/dode.trol.jpg";
}
}


function dorp(){




}




























/////////////////////////////////
	function rechtsaf() {
	title.innerHTML = "title1";
	document.getElementById("description").innerHTML = "1) Vecht met de wolven <br> 2) Vlucht voor de wolven <br> 3) Blijf staan";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "naarHuis();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rechtdoor();");
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "rechtsaf();");

	document.getElementById("img").src = "images/wolven.jpg"; 
}



begin();






















































// var shovel = false;


// function startgame(){
	
//  img.src = "images/dorp.jpg";		
//  button1.innerHTML = "start game";
//  button1.setAttribute("onclick", 'getShovel');
//  button2.style.display = 'none';
//  button3.style.display = 'none';

// }

// function	getShovel(){

//  shovel = true;
//  startgame();	


// }

// startgame();


// function startgame(){

// 	if (shovel == false) {
// 	images.src = "images/begin.bos.jpg"}
//     else{
//    //andere image

//     }

//  button1.innerHTML = "start game";
//  button1.setAttribute("onclick", 'getShovel';
//  button2.style.display = 'none';
//  button3.style.display = 'none';
