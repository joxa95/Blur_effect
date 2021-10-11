const bg = document.querySelector('.bg');
const loading_text = document.querySelector('.loading_text');
const body = document.querySelector('.body');

let load = 0;

let int = setInterval(blurring, 30);
function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	loading_text.textContent = load + '%';
	loading_text.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
	// console.log(load);
	// console.log(bg);
}
const scale = (number, inMin, inMax, outMin, outMax) => {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

body.addEventListener('click', () => {});
