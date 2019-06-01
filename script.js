var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // preco .pred?
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//body.style.background = "red";     zmeni pozadie na cerveno

//console.log(css);
//cosole.log(color1);
//console.log(color2);

/*color1.addEventListener("input", function() {
	//console.log(color1.value);
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 +", " 
	 + color2.value 
	 + ")";
})*/              // pre zjednodusenie                           

/*color2.addEventListener("input", function() {
	//console.log(color2.value);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+", " 
	+ color2.value 
	+ ")";
})*/     // pre zjednodusenie


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";  // vypise css
}

color1.addEventListener("input", setGradient); 
// nepotrebujem davat za setGradient zatvorky pretoze 
// input to trigerne automaticky
color2.addEventListener("input", setGradient);

// do html mozem vlozit do <input onclick="setGradient()"
// ale do obidvoch color

//moja skuska random farieb
var button = document.querySelector("button");

button.addEventListener("click", randomColors);

function randomColors() {
	//color1.value = "#2076c7";
	color1.value = "#"+((1<<24)*Math.random()|0).toString(16);
	color2.value = "#"+((1<<24)*Math.random()|0).toString(16);
	//color2.value = "#a020c7";
	setGradient();
}

// https://www.w3schools.com/css/css3_gradients.asp odkay na gradienty farebne