function validarSessao(){

    var loginUsuario = sessionStorage.LOGIN_USUARIO
    var b_usuario = document.getElementById("span_login");
    b_usuario.innerHTML = `${loginUsuario}`
}

function finalizarSessao(){
    sessionStorage.clear();
    window.location = "./index.html";
}