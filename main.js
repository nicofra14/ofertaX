let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

    // Obtener referencia al modal y al botón de aceptar
    var modal = document.getElementById("myModal");
    var acceptBtn = document.getElementById("acceptBtn");

    // Verificar si el usuario ya aceptó las políticas y términos mediante una cookie
    var acceptedCookies = getCookie("acceptedCookies");

    // Si no se ha aceptado, mostrar el modal
    if (!acceptedCookies) {
        modal.style.display = "block";
    }

    // Agregar un evento de clic al botón de aceptar
    acceptBtn.addEventListener("click", function() {
        // Establecer una cookie para registrar la aceptación
        setCookie("acceptedCookies", true, 30); // La cookie expirará en 30 días

        // Cerrar el modal después de aceptar
        closeModal();
    });

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Función para establecer una cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Función para obtener el valor de una cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }



