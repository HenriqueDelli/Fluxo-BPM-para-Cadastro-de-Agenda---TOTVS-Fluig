function displayFields(form,customHTML){ 
    
    var numAtv = getValue("WKNumState");
    var atividadeInicio = 0;

    if (numAtv == 0) { 
        form.setVisibleById("aprovacao", false);

    } 
    
    if (numAtv == 4) { 
        form.setVisibleById("btn_addObs", false);

    }

    if (form.getFormMode() == "ADD" || (form.getFormMode() == "MOD" ) && numAtv == atividadeInicio) {
        form.setValue("nome", fluigAPI.getUserService().getCurrent().getFullName());
        form.setValue("Login", getValue("WKUser"));
        form.setValue("dataHoje", retornaDataAtual());
    }

    if (form.getFormMode() == "ADD" || (form.getFormMode() == "MOD" ) && numAtv == 2) {
        form.setValue("aprovador", fluigAPI.getUserService().getCurrent().getFullName());

    }
}

function retornaDataAtual() {
    return (new java.text.SimpleDateFormat('dd/MM/yyyy')).format(new Date());
}


