function randomFont() {
    var fonts = ["Arial", "Georgia", "Brush Script MT", "Trebuchet MS", "Times New Roman", "Courier New"];
    document.querySelector(":root").style.setProperty("--text-font", fonts[Math.floor((fonts.length) * Math.random())]);
}