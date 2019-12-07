
var zwaard = false

var enchanted = false 

var axe = false

var wachtwoord = true



//////////////
function start(){
title.innerHTML = "The woods";
document.getElementById("description").style.visibility = "hidden";
document.getElementById("button2").innerHTML = "Start";
document.getElementById("button2").setAttribute("onclick", "begin();");
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("button3").style.visibility = "hidden"
document.getElementById("inventoryItem").style.visibility = "hidden"
document.getElementById("img").src = "images/start.jpg";
}





//////////////////

function begin() {
	title.innerHTML = "title1";
	document.getElementById("description").innerHTML = "1) Volg de weg naar huis <br> 2) rechtdoor <br> 3) naar rechts";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "naarHuis();");
	document.getElementById("button1").style.visibility = "visible"
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rechtdoor();");
	document.getElementById("button2").style.visibility = "visible"
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "rechtsaf();");
	document.getElementById("button3").style.visibility = "visible";
    document.getElementById("description").style.visibility = "visible";
	document.getElementById("img").src = "images/begin.bos.png";
	document.getElementById("inventoryItem").style.visibility = "hidden";
}













////////////
function naarHuis() {
	title.innerHTML = "Ridder";
	document.getElementById("description").innerHTML = "1) Loop langs de ridder <br> 2) Praat met de ridder <br> 3) Terug";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "ridderdood();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "praat();");
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "begin();");

	document.getElementById("img").src = "images/ridder.path.jpg";
	document.getElementById("inventoryItem").style.visibility = "hidden"
}

function ridderdood(){
title.innerHTML = "";
document.getElementById("description").innerHTML = "De ridder vertrouwde het niet en heeft je dood gestoken. <br> <br>";	
document.getElementById("button1").innerHTML = "Restart";
document.getElementById("button1").setAttribute("onclick", "begin();");
document.getElementById("button3").style.visibility = "hidden"
document.getElementById("button2").style.visibility = "hidden"
document.getElementById("img").src = "images/died.jpg";
}


function praat(){
alert("Je verteld de ridder dat wat je is overkomen en dat je probeert naar je huis te komen")
alert("De ridder weet niet precies de weg, maar hij verteld je dat er iemand in het bos is die dat wel zal weten")	
document.getElementById("description").innerHTML = "1) De weg van de ridder gebruiken <br> 2) Terug <br>";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "rivier();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "begin();");
document.getElementById("button3").style.visibility = "hidden";
}


function rivier(){
title.innerHTML = "De rivier";
document.getElementById("description").innerHTML = "Je komt aan bij een rivieer, Wat ga je doen? <br> 1) Proberen over te steken <br> 2) Hakbijl pakken <br> 3) Terug <br>";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "rivierdood();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "bijl();");
document.getElementById("button3").innerHTML = "keuze 3";
document.getElementById("button3").setAttribute("onclick", "naarHuis();");
document.getElementById("button3").style.visibility = "visible";
document.getElementById("img").src = "images/rivier.jpg";
}


function rivierdood(){

title.innerHTML = "You died";
document.getElementById("description").innerHTML = "Je haalde het niet om te springen en de stroming was te hard om te zwemmen <br> <br>";
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("button2").innerHTML = "Restart";
document.getElementById("button2").setAttribute("onclick", "begin();");
document.getElementById("img").src = "images/died.jpg";


}

function bijl(){
axe = true;
    alert("Je hebt de bijl opgepakt")
    document.getElementById("description").innerHTML = "1) Proberen over te steken <br> 2) Boom omhakken <br> 3) Terug";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "rivierdood();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "boom();");
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "naarHuis();");
	document.getElementById("button3").style.visibility = "visible";
	document.getElementById("img").src = "images/rivier.zonder.jpg";
	document.getElementById("inventoryItem").style.visibility = "visible";
	document.getElementById("inventoryItem").src = "images/bijl.webp"
}

function boom(){
document.getElementById("description").innerHTML = "1) Veilig oversteken <br> 2) Terug";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "bosman();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "naarHuis();");
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("img").src = "images/rivier2.jpg";	
}


function bosman(){
	title.innerHTML = "Man in het bos";
document.getElementById("description").innerHTML = "1) De man vragen om de weg naar het kasteel <br> 2) De man onthoofden <br> 3) Terug";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "vragen();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "onthoofd();");
document.getElementById("button3").innerHTML = "keuze 3";
document.getElementById("button3").setAttribute("onclick", "rivier();");
document.getElementById("button3").style.visibility = "visible";
document.getElementById("img").src = "images/normaal.pad2.jpg";	
}

function vragen(){
wachtwoord = true
alert("Je vraagt de man of hij de weg naar het kasteel kan vinden")	
alert("De man verteld je hoe je thuis zult komen")
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "vragen();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "onthoofd();");
document.getElementById("button3").innerHTML = "keuze 3";
document.getElementById("button3").setAttribute("onclick", "rivier();");
}

function onthoofd(){
document.getElementById("img").src = "images/onthoofd.pad2.jpg";
}

function kasteel(){
title.innerHTML = "Ingang van het kasteel";

document.getElementById("img").src = "images/kasteel.jpg";
}

function kasteeldorp(){
title.innerHTML = "Gewonnen!";
document.getElementById("img").src = "images/stad.jpg";
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

    document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "dorp();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "enchant();");

}
}


function dorp(){
	document.getElementById("description").innerHTML = "De trol is dood, je kunt er nu langs. <br><br> 1)Naar het dorp lopen <br> 2)Het dorp in rennen <br> 3)Ga terug";
    document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "lopen();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rechtdoor();");
	document.getElementById("button2").style.visibility = "visible"
	document.getElementById("img").src = "images/dorp.jpg";
}

////// keuze 3 showen, doorgaan na het enchanted zonder zwaard, keuze links

function lopen(){
document.getElementById("description").innerHTML = "Je loopt langzaam het dorp binnen en bent eindelijk terug bij beschaving";
document.getElementById("img").src = "images/in.dorp.jpg";
}


function rennen(){


}

























/////////////////////////////////
	function rechtsaf() {
	title.innerHTML = "title1";
	document.getElementById("description").innerHTML = "1) Vecht met de wolven <br> 2) Vlucht voor de wolven <br> 3) Blijf staan";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "dood1();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "cliff();");
	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "dood2();");

	document.getElementById("img").src = "images/wolven.jpg"; 
}

function dood1(){
	title.style.visibility = "hidden";
document.getElementById("description").innerHTML = "De wolven zijn met te veel, je maakt geen schijn van kans";
document.getElementById("img").src = "images/died.jpg"; 
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("button2").style.visibility = "hidden";
document.getElementById("button1").innerHTML = "restart";
document.getElementById("button1").setAttribute("onclick", "begin();");
}

function cliff(){
    document.getElementById("description").innerHTML = "1) Spring van de cliff <br> 2)Met de wolven vechten ";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "springen();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "dood1();");
	document.getElementById("button3").style.visibility = "hidden";;
	document.getElementById("img").src = "images/cliff.jpg"; 
}

function springen(){

document.getElementById("description").innerHTML = "Het is te hoog <br> Je valt dood op de grond";
document.getElementById("img").src = "images/died.jpg";
document.getElementById("button2").style.visibility = "hidden";
document.getElementById("button1").innerHTML = "restart";
document.getElementById("button1").setAttribute("onclick", "begin();");


}

function dood2(){ 
	title.style.visibility = "hidden";
document.getElementById("description").innerHTML = "De wolven zien je als een lekkere snack. <br> Je word opgegeten.";
document.getElementById("img").src = "images/died.jpg"; 
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("button2").style.visibility = "hidden";
document.getElementById("button1").innerHTML = "restart";
document.getElementById("button1").setAttribute("onclick", "begin();");
}



start();






















































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
