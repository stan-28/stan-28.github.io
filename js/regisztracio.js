window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("gomb").addEventListener("click", ures, false);

    //$("gomb").addEventListener("click", egyezes, false);

}

let ures = function () {
    let email = $("bejelentkezE").value;
    let jelszo = $("jelszo").value;
    let jelszoKetto = $("jelszo2").value;
    //let elerheto = $("oldalLink").disabled = true;


        if ($("bejelentkezE").value < 1) {
            $("ures1").innerHTML = "Ne hagyjon üres mezőket!";
        }
        if ($("jelszo").value < 1) {
            $("ures2").innerHTML = "Ne hagyjon üres mezőket!";
        }
        if ($("jelszo2").value < 1) {
            $("ures3").innerHTML = "Ne hagyjon üres mezőket!";
        }
        if ($("jelszo").value != $("jelszo2").value) {
            $("ures3").innerHTML = "A jelszó  nem egyezik";
        }
        
        //$("gomb").disabled = false;

}

/*
let egyezes = function () {
    if(!ures()){
        if (window.confirm('Sikeres regisztráció!')) {
            window.location.href='../../index.html';
        }
    }
}
*/

/*
let elvisz = function () {
    if(!ures()){

    }
}
*/
