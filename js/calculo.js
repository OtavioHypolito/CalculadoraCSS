function calcular(){
	if(document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){
		
		alert("Digite dois valores");
		return;
	
	}
	
	var operacao = document.getElementById("operacao").value;
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	
	var resultado = 0;
	
	switch(operacao){
		case "+":
			resultado = num1 + num2;
			break;
			
		case "-":
			resultado = num1 - num2;
			break;
			
		case "*":
			resultado = num1 * num2;
			break;
			
		case "/":
			resultado = num1 / num2;
			break;
	};
		
	document.getElementById("resultado").value = resultado.toFixed(2);
}