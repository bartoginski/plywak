//inputs
const inputA = document.querySelector(".podaj-a");
const inputB = document.querySelector(".podaj-b");
const obliczBtn = document.querySelector(".oblicz");

//dzialania
const kwadratSumy = document.querySelector("#kwadrat-sumy");
const kwadratRoznicy = document.querySelector("#kwadrat-roznicy");
const roznicaKwadratow = document.querySelector("#roznica-kwadratow");
const szescianSumy = document.querySelector("#szescian-sumy");
const sumaSzescianow = document.querySelector("#suma-szescianow");
const szescianRoznicy = document.querySelector("#szescian-roznicy");
const roznicaSzescianow = document.querySelector("#roznica-szescianow");

//display
const wynik = document.querySelector(".wynik");
const dzialanie = document.querySelector(".dzialanie");

function returnResult() {
	const a = parseFloat(inputA.value);
	const b = parseFloat(inputB.value);
	let result = 0;
	let przyklad = ``;
	if (kwadratSumy.checked) {
		result += a ** 2 + 2 * a * b + b ** 2;
		przyklad = `${a}<sup>2</sup> + 2 * ${a} + ${b}<sup>2</sup>`;
	} else if (kwadratRoznicy.checked) {
		result += a ** 2 - 2 * a * b + b ** 2;
		przyklad = `${a}<sup>2</sup> - 2 ${a} + ${b}<sup>2</sup>`;
	} else if (roznicaKwadratow.checked) {
		result += (a - b) * (a + b);
		przyklad = `(${a} - ${b}) * (${a} + ${b})`;
	} else if (szescianSumy.checked) {
		result += a ** 3 + 3 * a ** 2 * b + 3 * a * b ** 3;
		przyklad = `${a}<sup>3</sup> + 3 * ${a}<sup>2</sup> * ${b} + 3 * ${a} * ${b}<sup>2</sup> + ${b}<sup>3</sup>`;
	} else if (sumaSzescianow.checked) {
		result += (a + b) * (a ** 2 - a * b + b ** 2);
		przyklad = `(${a} + ${b}) * *(${a}<sup>2</sup> - ${a} * {b} + ${b}<sup>2</sup>)`;
	} else if (szescianRoznicy.checked) {
		result += a ** 3 - 3 * a ** 2 * b + 3 * a * b ** 2 - b ** 3;
		przyklad = `${a}<sup>2</sup> - 3 * ${a}<sup>2</sup> *${b} + 3 * ${a} * ${b}<sup>2</sup> - ${b}<sup>3</sup>`;
	} else if (roznicaSzescianow.checked) {
		result += (a - b) * (a ** 2 + a * b + b ** 2);
		przyklad = `(${a} - ${b}) * (${a}<sup>2</sup> + ${a} * ${b} + ${b}<sup>2</sup>)`;
	}
	return display(result, przyklad);
}

function display(result, przyklad) {
	wynik.innerHTML = `Wynik: ${result}`;
	dzialanie.innerHTML = `Działanie: ${przyklad}`;
}
