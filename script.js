let iteration = 0;
let history = []

const calculate = async () => {
	if (iteration > 0) {
		document.getElementById('history-box').style.display = "block";
		let latest = document.getElementById('log').value;
		history.push(latest);
		if (history.length > 5)	history.shift();
		document.getElementById('history').innerHTML = `<p>${history.reverse().join("</p><p>")}</p>`;
	}


	const name = document.getElementById('guide-name').value;
	const side = document.querySelector('input[name="jungle-side"]:checked').value;
	const size = document.querySelector('input[name="world-size"]:checked').value;

	let nameLib = ["joe","connor","tanner","wyatt","codi","levi","luke","jack","scott","logan","cole","asher","bradley","jacob","garrett","dylan","maxwell","steve","brett","andrew","harley","kyle","jake","ryan","jeffrey","seth","marty","brandon","zach","jeff","daniel","trent","kevin","brian","colin","jan"];
	let valueLib = [0.0000, 0.0278, 0.0556, 0.0833, 0.1111, 0.1389, 0.1667, 0.1994, 0.2222, 0.2500, 0.2778, 0.3056, 0.3333, 0.3611, 0.3889, 0.4167, 0.4444, 0.4722, 0.5000, 0.5278, 0.5556, 0.5833, 0.6111, 0.6389, 0.6667, 0.6944, 0.7222, 0.7500, 0.7778, 0.8056, 0.8333, 0.8611, 0.8889, 0.9167, 0.9444, 0.9722];

	if (nameLib.indexOf(name) < 0) {
		return alert("err: Unknown name")
	}

	let _value = valueLib[nameLib.indexOf(name)];
	let _side = ["left", "right"].indexOf(side.toLowerCase());
	let _size = ["small", "medium", "large"].indexOf(size.toLowerCase());

	let initialValue = [[3800, 6000, 8000], [3276, 4992, 6552]];
	let amplifier = [524, 1008, 1448];

	let result;
	switch (_side) {
		case 0:
			result = initialValue[_side][_size] - ( amplifier[_size] * _value )
			break;
		case 1:
			result = initialValue[_side][_size] + ( amplifier[_size] * _value )
			break;
	}
	result = Math.round(result);

	document.getElementById('result-box').value = result;
	document.getElementById('log').value = `${name} (${_value}), ${side}, ${size} -> ${result} `;


	iteration++;
	return 200
}



