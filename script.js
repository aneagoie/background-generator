//Newer modern way to write the code (this new syntax will be explored in Advanced JS section)
const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}



_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

//Original version:
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient); 