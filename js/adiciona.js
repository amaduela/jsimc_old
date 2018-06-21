var adicionar = document.querySelector("#adicionar-paciente");
adicionar.addEventListener("click", function (event) {
	event.preventDefault();

	var nome = document.querySelector("#nome");
	var altura = document.querySelector("#altura");
	var peso = document.querySelector("#peso");



	var pacienteNovo = "<tr class='paciente'>" +
							"<td class='inf-nome'>"+ nome.value +"</td>" +
							" <td class='inf-peso'>"+ peso.value +"</td>" +
							" <td class='inf-altura'>"+ altura.value +"</td>" +
							" <td class='inf-imc'></td>" +
						"</tr>";

	// var tabela = document.querySelectorAll('table'); // array de elementos
	var tabela = document.querySelector('table'); // primeiro elemento
	tabela.innerHTML = tabela.innerHTML + pacienteNovo;
	nome. value = "";
	altura. value = "";
	peso. value = "";
})