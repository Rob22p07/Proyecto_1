document.getElementById("login-button").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "seller456" && password === "Intro123") {
        window.location.href = "home.html";
    } else if (username === "dancabello" && password === "J5*asdRD.se") {
        window.location.href = "binaryshop.html";
    } else if (username === "root" && password === "dochouse") {
        window.location.href = "admin.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtelo de nuevo.");
    }
});