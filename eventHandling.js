/*
    Mouse Events
    Touch Events
    Keybord events
    Form Events
    Windows Events

    Event Listeners
        Static
        Dynamic
*/
//Dynamic Listener

document.getElementById("abc").addEventListener("click", paraClicked);

document.getElementById("abc").addEventListener("mouseover", paraMouseOver)

function paraClicked() {
    document.getElementById("abc").innerHTML = "Hay, You Clicked on Me... :)";
    setTimeout(function () {
        document.getElementById("abc").setAttribute("style", "color:green");
    }, 3000);
}

function paraMouseOver() {
    document.getElementById("abc").innerHTML = "Hay, You are over me... :)";
    setTimeout(function () {
        document.getElementById("abc").setAttribute("style", "color:red");
    }, 3000);
}

function onButtonClick() {
    document.getElementById("button").setAttribute("style", "color:red");
}