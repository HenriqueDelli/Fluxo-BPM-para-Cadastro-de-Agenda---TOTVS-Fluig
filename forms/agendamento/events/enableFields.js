function enableFields(form){

    var numAtv = getValue('WKNumState');
    var indexes = form.getChildrenIndexes("obsTab");

    if (numAtv == 2) {
        form.setEnabled('dataAgend', false);
        form.setEnabled('descricao', false);
        form.setEnabled('cep', false);
        form.setEnabled('logradouro', false);
        form.setEnabled('numero', false);
        form.setEnabled('bairro', false);
        form.setEnabled('cidade', false);
        form.setEnabled('estado', false);
        
    }
    
    if (numAtv == 4 || numAtv == 2) {
        for (var i = 0; i < indexes.length; i++) {
            form.setEnabled("motivoReprova___" + indexes[i], false);
        }
    }
        
 }