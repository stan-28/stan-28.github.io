window.addEventListener("load", init, false);

function $(id) {
    return document.getElementById(id);
}

function init() {
    $("gomb").addEventListener("click", ures, false);

    //$("gomb").addEventListener("click", egyezes, false);

}

let ures = function () {
        if ($("vezeteknev").value < 1 || $("keresztnev").value < 1 || $("szulEv").value < 1 || 
        $("email").value < 1 || $("telefon").value < 1 || $("inputAddress").value < 1 || $("varos").value < 1 ||  
        $("Megye").value < 1 || $("iranyitoSzam").value < 1){
            
            $("ures").innerHTML = "Ne hagyjon üres mezőket!";
            console.log("jaú");
        }else{
            if (window.confirm('Sikeres jelentkezés!')) {
                window.location.href='../index.html';
            }
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
