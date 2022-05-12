var fonts = ["Arial", "Georgia", "Brush Script MT", "Trebuchet MS", "Times New Roman", "Courier New"];

function randomize() {
    document.querySelector(":root").style.setProperty("--font", fonts[Math.floor((fonts.length) * Math.random())]);
    document.querySelector(":root").style.setProperty("--color", "#" + Math.floor(Math.random()*16777215).toString(16))
}

const hiBernice = "h,i, ,b,e,r,n,i,c,e,";
const strikesAgain = "b,e,r,n,i,c,e,s,t,r,i,k,e,s,a,g,a,i,n,"
var keysPressed = "";

document.onkeydown = (e) => {
    e = e || window.event;
    keysPressed = keysPressed + e.key + ",";
    console.log("DEBUG: Detected key "+e.key);

    if (keysPressed.includes(hiBernice)) {
        keysPressed = "";
        document.getElementById("words").innerHTML = "hi you have found a secret on the website, i didnt really plan this out so all you get for now is this message, nice work finding it though";
    } else if (keysPressed.includes(strikesAgain)) {
        keysPressed = "";
        alert("bernice moment! (this is a placeholder alert)")
    }
}