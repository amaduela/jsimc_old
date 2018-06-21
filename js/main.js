// minha versão
// var nomes = document.getElementsByClassName('inf-nome')
// var pesos = document.getElementsByClassName('inf-peso')
// var alturas = document.getElementsByClassName('inf-altura')
// var imcs = document.getElementsByClassName('inf-imc')
// for (var i = 0; i < imcs.length; i++) {
// 	imcs[i].textContent = calcIMC(alturas[i].textContent, pesos[i].textContent);
// }


// function calcIMC(altura, peso) {
// 	return (peso / (altura * altura));
// }

// versão do tutorial
function calcIMC(paciente) {
	if (paciente.altura != 0) {
		return paciente.peso / (paciente.altura * paciente.altura);
	}else {
		console.log("Não eh possivel dividir!");
	}
}

function generateIMC() {
	var trsPacientes = document.getElementsByClassName('paciente');

	for (var i = 0; i < trsPacientes.length; i++) {
		var trPaciente = trsPacientes[i];

		var nome = trPaciente.getElementsByClassName('inf-nome')[0]
		var peso = trPaciente.getElementsByClassName('inf-peso')[0]
		var altura = trPaciente.getElementsByClassName('inf-altura')[0]

		var paciente = {
			nome : nome.textContent,
			peso : peso.textContent,
			altura : altura.textContent,
		}

		var tdIMC = document.getElementsByClassName('inf-imc')[i];
		tdIMC.textContent = calcIMC(paciente);
		console.log(paciente.nome);
	}
}

var button = document.getElementById('imcs');
button.addEventListener('click', generateIMC);
button.addEventListener('click', function () {
	// body ...
});