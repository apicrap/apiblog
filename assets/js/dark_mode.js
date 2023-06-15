function darkMode() {
    document.body.classList.toggle("dark-mode");
    let currentMode = document.getElementById("mode-switch");
    let envelopePath1 = document.querySelector("path#rect1086")
    let envelopePath2 = document.querySelector("path#path3074").style.stroke;
    let instaPath1 = document.getElementById("rect1086").style.stroke;
    let instaPath2 = document.getElementById("path1190").style.stroke;
    let instaPath3 = document.getElementById("path1294").style.fill;
    currentMode.classList.toggle("dark-mode");
    if (currentMode.className == "dark-mode") {
        document.getElementById("mode-switch").innerHTML = "&#127774;";
    } else {
        document.getElementById("mode-switch").innerHTML = "&#127769;";
    }
}
