/*
                                window Obj.
                                    |
    ------------------------------------------------------------------------
    |               |               |                   |                   |
location Obj.   history Obj.    documenet Obj.      navigation Obj.     screen Obj.
                                    |
                    -------------------------------------
                    |               |                   |
                  form Obj.       images Obj.          link Obj.

*/

//windowObj();

function windowObj() {
    //window.alert("This is alert from window Object.... :)");
    //window.open();
    //window.close();
    var newWin = window.open("https://www.google.co.in/", "newWindow", "height=500", "width=500");
    newWin.moveTo(500, 200);
    //newWin.close();

    // to close the window 
    //newWin.close();
    console.log("is window closed : ", newWin.closed);
    console.log("Window innerHeight :", newWin.innerHeight);
    console.log("Window innerWidth :", newWin.innerWidth);
    console.log("Window clientInformation :", newWin.clientInformation);


    //Close the window after some time say 5sec
    setTimeout(function () {
        newWin.close();
        console.log("is window closed : ", newWin.closed);
    }, "5000");

    console.log("screen.height :", screen.height);
    console.log("screen.width :", screen.width);
    console.log("screen.availHeight :", screen.availHeight);
    console.log("screen.availWidth :", screen.availWidth);
    //console.log("screen.orientation :", screen.orientation);
    //console.log(screen.orientation);
}



//navigatorObj();

function navigatorObj() {

    document.writeln("<br>navigator.platform : ", navigator.platform);
    document.writeln("<br>navigator.appName : ", navigator.appName);
    document.writeln("<br>navigator.appCodeName : ", navigator.appCodeName);
    document.writeln("<br>navigator.geolocation : ", navigator.geolocation);
    document.writeln("<br>navigator.webdriver : ", navigator.webdriver)
    document.writeln("<br>navigator.vendor : ", navigator.vendor);
    document.writeln("<br>navigator.userAgent : ", navigator.userAgent);

}


//locationObj();

function locationObj() {
    document.writeln("<br> location.href : ", location.href);
    document.writeln("<br> location.protocol : ", location.protocol);
    document.writeln("<br> locataion.host : ", location.host);
    setTimeout(function () {
        location.assign("https://www.google.co.in/");
    }, 5000);
}

//historyObj();

function historyObj() {

    document.writeln("<br> My main page");
    //location.assign("D:/Project/Selenium/JavaScript/html/static.html");

    setTimeout(function () {
        location.assign("D:/Project/Selenium/JavaScript/html/static.html");
    }, 3000);

    setTimeout(function () {
        history.back();
    }, 6000);

    console.log("history.length : ", history.length);
}

//docObj();

function docObj() {

    if (document.getElementById("abc") != null) {

        setTimeout(function () {
            document.getElementById("abc").innerHTML = "Hello I am inner html... :)";
            setTimeout(function () {
                document.getElementById("abc").setAttribute("style", "color:green");
            }, 3000)
        }, 3000)
    }
}

