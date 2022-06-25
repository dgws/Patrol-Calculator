var btn = document.querySelector("#btn"),
	out = document.querySelector("#out"),
	eur = document.querySelector("#eur"),
	rast = document.querySelector("#rast"),
	weight = document.querySelector("#weight"),
	vol = document.querySelector("#vol");

// Basic function
btn.onclick = function () {
	if (weight.value != "" && rast.value != "") {
		var sum = (weight.value * rast.value) / 100;
		out.innerHTML = sum;
		var l = sum * vol.value;
		eur.innerHTML = l;
	} else {
		alert("Введите Расстояние и Расход");
	}
};
