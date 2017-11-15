/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.querySelector("#open").style.right = "-45px";
    document.querySelector('#close').style.right = '17px';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.querySelector("#open").style.right = "15px";
    document.querySelector('#close').style.right = '-45px';
}