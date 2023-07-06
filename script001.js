function carregar() {
    var nsg = window.document.getElementById("nsg")
    var imagem = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    nsg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12){
        // bom dia
        imagem.src = "Manha.png"
        document.body.style.background = "#ee6526"
    }
        else if (hora >= 12 && hora < 18) {
            imagem.src = "Tarde.png"
            document.body.style.background = "#c9921d"
            //boa tarde
        }
            else{
                imagem.src = "Noite.png"
                document.body.style.background = "#100e8a"
                //boa noite
            }
    
}
