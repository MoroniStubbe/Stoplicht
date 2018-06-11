//auto
var rijden;

//auto1
var auto1 = document.getElementById('auto1');
auto1.style.position = 'absolute';
auto1.style.width = '40px';
auto1.style.height = '80px';
auto1.style.left = '660px';
auto1.style.top = '685px';
var snelheid1 = 2;

//auto2
var auto2 = document.getElementById('auto2');
auto2.style.position = 'absolute';
auto2.style.width = '40px';
auto2.style.height = '80px';
auto2.style.left = '550px';
auto2.style.top = '0px';
var snelheid2 = 2;

//auto3
var auto3 = document.getElementById('auto3');
auto3.style.position = 'absolute';
auto3.style.width = '80px';
auto3.style.height = '40px';
auto3.style.left = '1470px';
auto3.style.top = '375px';
var snelheid3 = 2;

//auto4
var auto4 = document.getElementById('auto4');
auto4.style.position = 'absolute';
auto4.style.width = '80px';
auto4.style.height = '80px';
auto4.style.left = '0px';
auto4.style.top = '435px';
var snelheid4 = 2;

//stoplicht
var werken;
var buitenwerking;

//stoplicht1
var stoplicht1 = document.getElementById('stoplicht1');
var stoplicht1Kleur = "";

//stoplicht1
var stoplicht2 = document.getElementById('stoplicht2');
var stoplicht2Kleur = "";

//stoplicht1
var stoplicht3 = document.getElementById('stoplicht3');
var stoplicht3Kleur = "";

//stoplicht1
var stoplicht4 = document.getElementById('stoplicht4');
var stoplicht4Kleur = "";


//auto
function starten() {
    clearTimeout(rijden);

    //auto1
    if (parseInt(auto1.style.top) < -80) {auto1.style.top = '765px';}
    if (stoplicht1Kleur === "rood" && parseInt(auto1.style.top) === 505) {snelheid1 = 0;} else {snelheid1 = 2}
    auto1.style.top = parseInt(auto1.style.top) - snelheid1 + 'px';

    //auto2
    if (parseInt(auto2.style.top) > 765) {auto2.style.top = '-80px';}
    if (stoplicht2Kleur === "rood" && parseInt(auto2.style.top) === 286) {snelheid2 = 0;} else {snelheid2 = 2}
    auto2.style.top = parseInt(auto2.style.top) + snelheid2 + 'px';

    //auto3
    if (parseInt(auto3.style.left) < -80) {auto3.style.left = '1550px';}
    if (stoplicht3Kleur === "rood" && parseInt(auto3.style.left) === 716) {snelheid3 = 0;} else {snelheid3 = 2}
    auto3.style.left = parseInt(auto3.style.left) - snelheid3 + 'px';

    //auto4
    if (parseInt(auto4.style.left) > 1550) {auto4.style.left = '-80px';}
    if (stoplicht4Kleur === "rood" && parseInt(auto4.style.left) === 458) {snelheid4 = 0;} else {snelheid4 = 2}
    auto4.style.left = parseInt(auto4.style.left) + snelheid4 + 'px';

    rijden = setTimeout(starten, 10);
}

function stop() {
    clearTimeout(rijden);
}

function opnieuw() {
    stop();
    auto1.style.top = '685px';
    auto2.style.top = '0px';
    auto3.style.left = '1470px';
    auto4.style.left = '0px';
}

//stoplicht
function aanzetten() {
    clearTimeout(buitenwerking);

    veranderStoplicht(1, "groen");
    veranderStoplicht(2, "groen");
    veranderStoplicht(3, "rood");
    veranderStoplicht(4, "rood");
    werken = setTimeout(function(){veranderStoplicht(1, "geel")}, 4000);
    werken = setTimeout(function(){veranderStoplicht(2, "geel")}, 4000);
    werken = setTimeout(function(){veranderStoplicht(1, "rood")}, 6000);
    werken = setTimeout(function(){veranderStoplicht(2, "rood")}, 6000);
    werken = setTimeout(function(){veranderStoplicht(3, "groen")}, 7000);
    werken = setTimeout(function(){veranderStoplicht(4, "groen")}, 7000);
    werken = setTimeout(function(){veranderStoplicht(3, "geel")}, 11000);
    werken = setTimeout(function(){veranderStoplicht(4, "geel")}, 11000);

    werken = setTimeout(aanzetten, 11000);
}

function knipperen() {
    clearTimeout(werken);
    veranderStoplicht(1, "geel");
    veranderStoplicht(2, "geel");
    veranderStoplicht(3, "geel");
    veranderStoplicht(4, "geel");
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
}

function uitzetten() {
    clearTimeout(buitenwerking);
    clearTimeout(werken);
    zetUit();
}

function veranderStoplicht(stoplichtId, kleur) {
    stoplicht = document.getElementById('stoplicht' + stoplichtId);
    stoplicht.src = "verkeer/stoplicht" + kleur + stoplichtId + ".png";
    switch (stoplichtId){
        case 1 : stoplicht1Kleur = kleur; break;
        case 2 : stoplicht2Kleur = kleur; break;
        case 3 : stoplicht3Kleur = kleur; break;
        case 4 : stoplicht4Kleur = kleur; break;
    }
}

function zetUit() {
    veranderStoplicht(1, "uit");
    veranderStoplicht(2, "uit");
    veranderStoplicht(3, "uit");
    veranderStoplicht(4, "uit");
}