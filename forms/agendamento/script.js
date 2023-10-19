$("#cep").blur(function() {
	$.getJSON("//viacep.com.br/ws/" + $('#cep').val() + "/json/", function(dados) {
		$('#logradouro').val(dados.logradouro);
		$('#bairro').val(dados.bairro);
		$('#cidade').val(dados.localidade);
		$('#estado').val(dados.uf);
		
	})
});

$( document ).ready(function(){
	
	$("#btn_addObs").click(function(){
		
		var idx = wdkAddChild("obsTab");
		
		$("#motivoReprova___" + idx).val();
		
	});
	
});
