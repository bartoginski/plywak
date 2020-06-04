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

let div = document.querySelector(".wynik");

function returnResult() {
	if (kwadratSumy.checked) {
		// a * a + 2 * a * b + b * b
		div.innerHTML =
			inputA.value * inputA.value +
			2 * inputA.value * inputA.value +
			inputA.value * inputA.value;
	} else if (kwadratRoznicy.checked) {
		//a * a - 2 * a * b + b * b
		div.innerHTML =
			inputA.value * inputA.value -
			2 * inputA.value * inputB.value +
			inputB.value * inputB.value;
	} else if (roznicaKwadratow.checked) {
		// console.log(inputA.value - inputB.value);
		// console.log(Number(inputA.value) + Number(inputB.value));
		div.innerHTML =
			(inputA.value - inputB.value) *
			(Number(inputA.value) + Number(inputB.value));
	} else if (szescianSumy.checked) {
		div.innerHTML =
			Number(inputA.value) * Number(inputA.value) * Number(inputA.value) +
			3 *
				Number(inputA.value) *
				Number(inputA.value) *
				Number(inputB.value) +
			(3 *
				Number(inputA.value) *
				Number(inputB.value) *
				Number(inputB.value) +
				Number(inputB.value) *
					Number(inputB.value) *
					Number(inputB.value));
	} else if (sumaSzescianow.checked) {
		div.innerHTML =
			Number(inputA.value) +
			Number(inputB.value) *
				(Number(inputA.value) * Number(inputA.value) -
					Number(inputA.value) * Number(inputB.value) +
					Number(inputB.value) * Number(inputB.value));
	} else if (szescianRoznicy.checked) {
		div.innerHTML =
			Number(inputA.value) * Number(inputA.value) * Number(inputA.value) -
			3 *
				Number(inputA.value) *
				Number(inputA.value) *
				Number(inputB.value) +
			3 *
				Number(inputA.value) *
				Number(inputB.value) *
				Number(inputB.value) -
			Number(inputB.value) * Number(inputB.value) * Number(inputB.value);
	} else if (roznicaSzescianow.checked) {
		div.innerHTML =
			(Number(inputA.value) - Number(inputB.value)) *
			(Number(inputA.value) * Number(inputA.value) +
				Number(inputA.value) * Number(inputB.value) +
				Number(inputB.value) * Number(inputA.value));
	}
}
