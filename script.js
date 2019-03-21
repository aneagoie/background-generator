const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');
const copyButton = document.querySelector("#copy");

setGradient = () => {
	console.log("in");
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}

_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

const copyToClipboard = () => {
	const ta = document.createElement("textarea");
	ta.value = `${body.style.background};`;
	
	ta.setAttribute('readonly', '');
	ta.style.position='absolute';
	ta.style.left="-9999px";

	document.body.appendChild(ta);
	ta.select();
	document.execCommand("copy");
	document.body.removeChild(ta);
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
copyButton.addEventListener('click', copyToClipboard);

setGradient();