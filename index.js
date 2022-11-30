function login(){
    var user, password;

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "prueba" && password == "123"){
        window.location = "next.html";
    }else{
        alert("Contraseña incorrecta");
    }
}

function volver(){
    window.location = "index.html";
}