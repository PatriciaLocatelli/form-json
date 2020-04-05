function validaEmail(texto){
    usuario = texto.value.substring(0, texto.value.indexOf("@"));
    dominio = texto.value.substring(texto.value.indexOf("@") + 1, texto.value.lenght);

    if(!((usuario.lenght >=1) &&
    (usuario.search("@")==-1) && 
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) && 
    (dominio.search(" ")==-1)) &&
    (dominio.search(".")!=-1)) 
    {
        document.getElementById("mensagem-email-erro").innerHTML="<font color = red> E-mail inválido</font>";
    }


}
