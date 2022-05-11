var fonts = ["Arial", "Georgia", "Brush Script MT", "Trebuchet MS", "Times New Roman", "Courier New"];

function randomFont() {
    let font = fonts[Math.floor((fonts.length) * Math.random())];
    document.querySelector(":root").style.setProperty("--text-font", font);
    console.log("DEBUG: Font now set to "+font);
}

const berniceCode = "h,i,Space,b,e,r,n,i,c,e,";
var keysPressed = "";

document.onkeydown = (e) => {
    e = e || window.event;
    keysPressed = keysPressed + e.key + ",";
    console.log("DEBUG: Detected key "+e.key);

    if (keysPressed.includes(konamiCode)) {
        keysPressed = "";
        document.getElementById("words").innerHTML = "hi you have found a secret on the website, i didnt really plan this out so all you get for now is this message, nice work finding it though";
    }
}