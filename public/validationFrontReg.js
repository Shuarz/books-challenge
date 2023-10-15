window.addEventListener("load", function () {
    console.log("probando probando");
    let form = document.querySelector("form.card");
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        let errores = [];
        // name
        let namevjs = document.getElementById("name");
        console.log(namevjs);
        if (namevjs.value == "") {
            errores.push("nombre no puede estar vacio");
        } else if (namevjs.value.length < 5) {
            errores.push("el nombre debe llevar minimo 5 letras")
            console.log(namevjs.value.length);
        }
         // country
        let countryvjs = document.getElementById("country");
        if (countryvjs.value == "") {
            errores.push("pais no puede estar vacio");
            } else if (countryvjs.value.length < 5) {
            errores.push("el nombre debe llevar minimo 5 letras")
            }

        // email
        let emailvjs  = document.getElementById("email");
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if (emailvjs.value == "") {
            errores.push("Email no puede estar vacio");
         } else if (!(emailvjs.value.match(validRegex))){
            errores.push("formato no valido en el mail")
        }
        
        // password
        let passvjs  = document.getElementById("password");
        if (passvjs.value == "") {
            errores.push("Se debe escribir la contraseña");
        }
        // category
        let catvjsadmin  = document.getElementById("admin").checked;
        let catvjsuser = document.getElementById('user').checked;
        if (catvjsadmin == false && catvjsuser == false) {
            errores.push("seleccionar categoria");
        }
        
        //ul
        let ulErrores = document.getElementById("errores");
        ulErrores.innerHTML = ""

        if (errores.length > 0) {
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `<li class=err-li>${errores[i]}</li>`

            }

        }
        else {
            form.submit();
        }

    });
}) 