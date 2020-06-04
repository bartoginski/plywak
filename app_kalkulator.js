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

	if (kwadratSumy.checked) {
		wynik.innerHTML = a ** 2 + 2 * a * b + b ** 2;
	} else if (kwadratRoznicy.checked) {
		wynik.innerHTML = a ** 2 - 2 * a * b + b ** 2;
	} else if (roznicaKwadratow.checked) {
		wynik.innerHTML = (a - b) * (a + b);
	} else if (szescianSumy.checked) {
		wynik.innerHTML = a ** 3 + 3 * a ** 2 * b + 3 * a * b ** 3;
	} else if (sumaSzescianow.checked) {
		wynik.innerHTML = (a + b) * (a ** 2 - a * b + b ** 2);
	} else if (szescianRoznicy.checked) {
		wynik.innerHTML = a ** 3 - 3 * a ** 2 * b + 3 * a * b ** 2 - b ** 3;
	} else if (roznicaSzescianow.checked) {
		wynik.innerHTML = (a - b) * (a ** 2 + a * b + b ** 2);
	}
}
