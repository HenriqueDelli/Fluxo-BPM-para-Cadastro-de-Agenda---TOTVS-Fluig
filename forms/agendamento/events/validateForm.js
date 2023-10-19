function validateForm(form){

    var msg = "";
    var numAtv = getValue("WKNumState");
    var proxAtv = getValue("WKNextState");
    var indexes = form.getChildrenIndexes("obsTab");

    if (form.getValue("nome") == "") {
        msg += "O campo nome é obrigatório";
    }
    if (form.getValue("login") == "") {
        msg += "O campo login é obrigatório";
    }
    if (form.getValue("dataHoje") == "") {
        msg += "O campo data é obrigatório";
    }
    if (form.getValue("dataAgend") == "") {
        msg += "O campo data do agendamento é obrigatório";
    }
    if (form.getValue("descricao") == "") {
        msg += "O campo descrição é obrigatório";
    }
    if (form.getValue("cep") == "") {
        msg += "O campo cep é obrigatório";
    }
    if (form.getValue("logradouro") == "") {
        msg += "O campo logradouro é obrigatório";
    }
    if (form.getValue("numero") == "") {
        msg += "O campo número é obrigatório";
    }
    if (form.getValue("bairro") == "") {
        msg += "O campo bairro é obrigatório";
    }
    if (form.getValue("cidade") == "") {
        msg += "O campo cidade é obrigatório";
    }
    if (form.getValue("estado") == "") {
        msg += "O campo estado é obrigatório";
    }
    if (numAtv == 2 && proxAtv == 4) {
        for(var i = 0; i < indexes.length; i++) {
            if (form.getValue("motivoReprova___" + indexes[i]) == "") {
                msg += "O campo observações é obrigatorio.";

            }
            if (msg != "") {
                throw msg;
            }
        }
    }
    if (msg != "") {
        throw msg;
    }
}