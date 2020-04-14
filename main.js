function isNumber() {
    let phnumber = document.getElementById("phone-number").value;

    if (phnumber === "") {
        alert("Wpisz numer telefonu");
    } else if (typeof parseInt(phnumber) != 'number' || typeof phnumber == "string" || phnumber.length != 9) {
        alert("Wprowadzono nieprawidłowy numer");
    }
}