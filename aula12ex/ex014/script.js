var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = (`Agoroa são ${hora}`horas)
if (hora >= && hora < 12) {
    //BOM DIA
} else if (hora >=12 && hora < 18) {
    //BOA TARDE
} else {
    //BOA NOITE
}