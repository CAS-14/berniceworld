function randomFont() {
    var fonts = ["Arial", "Georgia", "Brush Script MT", "Trebuchet MS", "Times New Roman", "Courier New"];
    document.getElementById("words").style.fontFamily = fonts[Math.floor((fonts.length) * Math.random())];
}