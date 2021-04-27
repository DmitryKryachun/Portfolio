let flashCardsInfo = document.getElementById("flashcards");
let button = document.getElementById("httpButton");

let close1 = document.getElementsByClassName("close")[0];
let close2 = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
button.onclick = function() {
    flashCardsInfo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    flashCardsInfo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == flashCardsInfo) {
        flashCardsInfo.style.display = "none";
    }
}
let birthdayInfo = document.getElementById("birthdayInfo");
let javabutton = document.getElementById("javaButton");

// When the user clicks on the button, open the modal
javabutton.onclick = function() {
    birthdayInfo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close2.onclick = function() {
    birthdayInfo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == birthdayInfo) {
        birthdayInfo.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}