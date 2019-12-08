//door killian pol

var zwaard = false

var enchanted = false 

var axe = false

var wachtwoord = false

//////////////
function start(){
title.innerHTML = "The woods";
document.getElementById("description").style.visibility = "hidden";
document.getElementById("button2").innerHTML = "Start";
document.getElementById("button2").setAttribute("onclick", "begin();");
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("button3").style.visibility = "hidden"
document.getElementById("inventoryItem").style.visibility = "hidden";
document.getElementById("img").src = "images/woods.jpg";
}
//////////////////

function begin() {
	title.innerHTML = "Het bos";
	document.getElementById("description").innerHTML = "Je word wakker in een bos en hebt geen flauw idee waar je bent, <br> het lijkt je een goed plan om de weg naar huis te gaan zoeken <br><br> Waar ga je heen <br><br> 1) Volg de weg naar huis <br> 2) rechtdoor <br> 3) naar rechts";
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
document.getElementById("button2").innerHTML = "Restart";
document.getElementById("button2").setAttribute("onclick", "begin();");
document.getElementById("button3").style.visibility = "hidden"
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("img").src = "images/died.jpg";
}

function praat(){
alert("Je verteld de ridder dat wat je is overkomen en dat je probeert naar je huis te komen")
alert("De ridder weet niets over de weg naar huis, maar hij verteld je dat hij wel de weg naar een kasteel weet")	
document.getElementById("description").innerHTML = "1) De weg van de ridder gebruiken <br>";
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("button2").innerHTML = "keuze 1";
document.getElementById("button2").setAttribute("onclick", "rivier();");
document.getElementById("button3").style.visibility = "hidden";
}

function rivier(){
title.innerHTML = "De rivier";
document.getElementById("description").innerHTML = "Je komt aan bij een rivier, Wat ga je doen? <br><br> 1) Proberen over te steken <br> 2) Hakbijl pakken <br>";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "rivierdood();");
document.getElementById("button1").style.visibility = "visible"
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "bijl();");
document.getElementById("button3").style.visibility = "hidden";
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
    document.getElementById("description").innerHTML = "1) Proberen over te steken <br> 2) Boom omhakken <br> ";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "rivierdood();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "boom();");
	document.getElementById("img").src = "images/rivier.zonder.jpg";
	document.getElementById("inventoryItem").style.visibility = "visible";
	document.getElementById("inventoryItem").src = "images/bijl.webp"
}

function boom(){
document.getElementById("description").innerHTML = "1) Veilig oversteken <br>";
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("button2").innerHTML = "keuze 1";
document.getElementById("button2").setAttribute("onclick", "bosman();");
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("img").src = "images/rivier2.jpg";	
}

function bosman(){
	title.innerHTML = "Man in het bos";
document.getElementById("description").innerHTML = "Je weet niet zo goed meer waar je bent,<br> Maar gelukkig is daar iemand, misschien weet hij de weg <br>Maar misschien is hij heel gevaarlijk <br><br>1) De man om de weg vragen <br> 2) De man onthoofden";
document.getElementById("button1").style.visibility = "visible"
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "vragen();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "onthoofd();");
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("img").src = "images/normaal.pad2.jpg";	
}

function vragen(){
wachtwoord = true;
alert("Je vraagt de man of hij de weg naar het kasteel kan vinden");
alert("De man verteld je de weg naar het kasteel");
alert("ook verteld de man dat je een wachtwoord nodig hebt om naar binnen te mogen, het wachtwoord is frikandelbroodje")
document.getElementById("description").innerHTML = "1) De weg van de man gebruiken <br> 2)De man onthoofden omdat het leuk is ";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "kasteel();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "onthoofd2();");
document.getElementById("button3").innerHTML = "keuze 3";
document.getElementById("button3").setAttribute("onclick", "rivier();");
}

function onthoofd(){
document.getElementById("description").innerHTML = "Doorlopen";
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("button2").innerHTML = "keuze 1";
document.getElementById("button2").setAttribute("onclick", "kasteel();");
document.getElementById("img").src = "images/onthoofd.pad2.jpg";
}

function onthoofd2(){
document.getElementById("description").innerHTML = "1) De weg van de man gebruiken ";
document.getElementById("button1").style.visibility = "hidden"
document.getElementById("button2").innerHTML = "keuze 1";
document.getElementById("button2").setAttribute("onclick", "kasteel();");	
document.getElementById("img").src = "images/onthoofd.pad2.jpg";
}

function kasteel(){
title.innerHTML = "Ingang van het kasteel";
document.getElementById("img").src = "images/kasteel.jpg";
if (wachtwoord == true) {
document.getElementById("description").innerHTML = "Er word naar je geroepen, de wachters vragen om het wachtwoord <br> Wat doe je? <br> <br> 1) Het kasteel binnen gaan <br> 2) Het wachtwoord roepen";
document.getElementById("button1").style.visibility = "visible";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "wachtersdood();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "stad();");
document.getElementById("button3").style.visibility = "hidden";
}

else{
document.getElementById("description").innerHTML = "1) Het kasteel binnen gaan <br> 2) Zomaar iets roepen";
document.getElementById("button1").style.visibility = "visible";
document.getElementById("button1").innerHTML = "keuze 1";
document.getElementById("button1").setAttribute("onclick", "wachtersdood();");
document.getElementById("button2").innerHTML = "keuze 2";
document.getElementById("button2").setAttribute("onclick", "wachtersdood();");
document.getElementById("button3").style.visibility = "hidden";
}
}

function wachtersdood(){
document.getElementById("description").innerHTML = "De wachters vertrouwde je niet en schieten je dood";
document.getElementById("button2").innerHTML = "Restart";
document.getElementById("button2").setAttribute("onclick", "begin();");	
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("img").src = "images/died.jpg";	
}

function stad()
{
title.innerHTML = "De stad";
document.getElementById("description").innerHTML = "De wachters herkende het wachtwoord en lieten je binnen <br> <br> Het is je gelukt om beschaving te vinden, helaas is het je niet gelukt om de weg naar je huis te vinden";
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button2").innerHTML = "Restart";
document.getElementById("button2").setAttribute("onclick", "begin();");
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("img").src = "images/stad.jpg";
document.getElementById("inventoryItem").style.visibility = "hidden"
}

///////////////////
function rechtdoor() {

	title.innerHTML = "Het zwaard";
	document.getElementById("description").innerHTML = "1)Loop door <br> 2)Probeer het zwaard uit de steen te halen  <br> 3)Ga terug ";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "enchant();");

	document.getElementById("button2").setAttribute("onclick", "begin();");

	document.getElementById("button3").innerHTML = "keuze 3";
	document.getElementById("button3").setAttribute("onclick", "begin();");
	document.getElementById("button3").style.visibility = "visible"

if (zwaard == false){
document.getElementById("img").src = "images/zwaard.bos2.jpg";
title.innerHTML = "Het zwaard"
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
title.innerHTML = "zwaard";
document.getElementById("img").src = "images/bos.jpg";
document.getElementById("description").innerHTML = "1)Loop door <br> 2)Ga terug";
document.getElementById("button3").style.visibility = "hidden";
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
document.getElementById("description").innerHTML = "Je bent sterk genoeg en hebt het zwaard uit de steen getrokken <br><br> 1)Loop door <br> 2)Ga terug ";
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
title.innerHTML = "Magisch bos"
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
title.innerHTML = "Trol"
	document.getElementById("description").innerHTML = "Oh nee! Er staat een trol op het pad. Wat ga je doen. <br><br> 1)Probeer langs de trol te lopen <br> 2)Vecht met de trol";
    document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "trol1();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "trol2();");
	document.getElementById("button3").style.visibility = "hidden"
    document.getElementById("img").src = "images/bos.trol.jpg";
}


function trol1(){
	title.style.visibility = "hidden";
 document.getElementById("description").innerHTML = "De trol heeft je er niet langs gelaten, hij heeft je dood geslagen";
    document.getElementById("button2").innerHTML = "Restart";
	document.getElementById("button2").setAttribute("onclick", "begin();");
	document.getElementById("button1").style.visibility = "hidden";
 document.getElementById("img").src = "images/died.jpg";
}


function trol2(){

if (zwaard == false) {
 title.style.visibility = "hidden";
 document.getElementById("description").innerHTML = "Je hebt niks om mee te vechten,<br>De trol slaat je dood";
 document.getElementById("button2").innerHTML = "Restart";
 document.getElementById("button2").setAttribute("onclick", "begin();");
 document.getElementById("button1").style.visibility = "hidden";
 document.getElementById("img").src = "images/died.jpg";

}
else{ 
	document.getElementById("description").innerHTML = "De trol is dood, je kunt er nu langs. <br><br> 1)Loop door <br>";
    document.getElementById("img").src = "images/dode.trol.jpg";
    document.getElementById("inventoryItem").style.visibility = "hidden";
    document.getElementById("button2").innerHTML = "keuze 1";
	document.getElementById("button2").setAttribute("onclick", "dorp();");
	document.getElementById("button1").style.visibility = "hidden";
}
}

function dorp(){
	title.style.visibility = "visible";
	title.innerHTML = "Dorp"
	document.getElementById("description").innerHTML = "Je komt uit het bos en ziet een dorp <br> Maar wacht! niet zomaar een dorp, het is je thuis. <br><br> Wat doe je? <br><br> 1)Naar het dorp lopen <br> 2)Het dorp in rennen <br>";
    document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "lopen();");
	document.getElementById("button1").style.visibility = "visible"
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "rennen();");
	document.getElementById("button2").style.visibility = "visible"
	document.getElementById("img").src = "images/dorp.jpg";
document.getElementById("inventoryItem").style.visibility = "hidden";
}

function lopen(){
title.style.visibility = "visible";
	title.innerHTML = "Thuis"
document.getElementById("description").innerHTML = "Je loopt langzaam het dorp binnen en bent eindelijk thuis <br><br> Je hebt gewonnen";
document.getElementById("img").src = "images/in.dorp.jpg";
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button2").style.visibility = "hidden";
}


function rennen(){
title.style.visibility = "hidden";
document.getElementById("description").innerHTML = "De wachters schrikken van je en schieten je dood";
 document.getElementById("button2").innerHTML = "Restart";
 document.getElementById("button2").setAttribute("onclick", "begin();");
 document.getElementById("button1").style.visibility = "hidden";
 document.getElementById("img").src = "images/died.jpg";
}

/////////////////////////////////
	function rechtsaf() {
	title.innerHTML = "Wolven";
	document.getElementById("description").innerHTML = "Er staat opeen een groep wolven om je heen <br><br> Wat doe je? <br><br>1) Vecht met de wolven <br> 2) Vlucht voor de wolven <br> 3) Blijf staan";
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
	title.innerHTML = "De cliff";
    document.getElementById("description").innerHTML = "1) Spring van de cliff <br> 2)Met de wolven vechten ";
	document.getElementById("button1").innerHTML = "keuze 1";
	document.getElementById("button1").setAttribute("onclick", "springen();");
	document.getElementById("button2").innerHTML = "keuze 2";
	document.getElementById("button2").setAttribute("onclick", "dood1();");
	document.getElementById("button3").style.visibility = "hidden";;
	document.getElementById("img").src = "images/cliff.jpg"; 
}

function springen(){
title.style.visibility = "hidden";
document.getElementById("description").innerHTML = "Het is te hoog <br> Je valt dood op de grond";
document.getElementById("img").src = "images/died.jpg";
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button2").innerHTML = "restart";
document.getElementById("button2").setAttribute("onclick", "begin();");
}

function dood2(){ 
	title.style.visibility = "hidden";
document.getElementById("description").innerHTML = "De wolven zien je als een lekkere snack. <br> Je word opgegeten.";
document.getElementById("img").src = "images/died.jpg"; 
document.getElementById("button3").style.visibility = "hidden";
document.getElementById("button1").style.visibility = "hidden";
document.getElementById("button2").innerHTML = "restart";
document.getElementById("button2").setAttribute("onclick", "begin();");
}



start();
