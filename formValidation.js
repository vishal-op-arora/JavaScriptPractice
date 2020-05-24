function validateForm() {
    var name = document.getElementById("name");
    var phno = document.getElementById("phno");

    if (name.value == "") {
        alert("Name can't be empty.");
    }
    else {
        if (!(isNaN(name.value))) {
            alert("Name should not be a number");
        }
    }
    if (phno.value == "") {
        alert("Phone Number can't be empty");
    }
    else {
        if (isNaN(phno.value)) {
            alert("Phone Number should be a number");
        }
    }


}