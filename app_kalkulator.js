const inputA = document.querySelector(".podaj-a");
const inputB = document.querySelector(".podaj-b");
const obliczBtn = document.querySelector(".oblicz");

//inputs

const kwadratSumy = document.querySelector("#kwadrat-sumy");
const kwadratRoznicy = document.querySelector("#kwadrat-roznicy");
const roznicaKwadratow = document.querySelector("#roznica-kwadratow");
const szescianSumy = document.querySelector("#szescian-sumy");
const sumaSzescianow = document.querySelector("#suma-szescianow");
const szescianRoznicy = document.querySelector("#szescian-roznicy");
const roznicaSzescianow = document.querySelector("#roznica-szescianow");

let wynik = document.querySelector(".wynik");

function returnResult() {
	const a = parseFloat(inputA.value);
	const b = parseFloat(inputB.value);
	let result = 0;
	if (kwadratSumy.checked) {
		result += a ** 2 + 2 * a * b + b ** 2;
	} else if (kwadratRoznicy.checked) {
		result += a ** 2 - 2 * a * b + b ** 2;
	} else if (roznicaKwadratow.checked) {
		result += (a - b) * (a + b);
	} else if (szescianSumy.checked) {
		result += a ** 3 + 3 * a ** 2 * b + 3 * a * b ** 3;
	} else if (sumaSzescianow.checked) {
		result += (a + b) * (a ** 2 - a * b + b ** 2);
	} else if (szescianRoznicy.checked) {
		result += a ** 3 - 3 * a ** 2 * b + 3 * a * b ** 2 - b ** 3;
	} else if (roznicaSzescianow.checked) {
		result += (a - b) * (a ** 2 + a * b + b ** 2);
	}
	return display(result);
}

function display(a) {
	wynik.innerHTML = `Wynik: ${a}`;
}
