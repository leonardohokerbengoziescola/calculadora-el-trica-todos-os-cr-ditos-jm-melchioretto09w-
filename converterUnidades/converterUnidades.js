function convertUnit(){

    let result = document.getElementById("result");

    let og = document.getElementById("inputNum");
    og = og.value;

    let unitP = document.getElementById("unitP");
    unitP = unitP.value;

    let prefixIn = document.getElementById("prefIn");
    prefixIn = prefixIn.value;

    let prefixOut = document.getElementById("prefOut");
    prefixOut.value;

    let TI = document.getElementById("teraI"), GI = document.getElementById("gigaI"), MI = document.getElementById("megaI"), KI = document.getElementById("kiloI"), I = document.getElementById("nuloI"), mI = document.getElementById("miliI"), uI = document.getElementById("microI"), nI = document.getElementById("nanoI"), pI = document.getElementById("picoI");
    let TO = document.getElementById("teraO"), GO = document.getElementById("gigaO"), MO = document.getElementById("megaO"), KO = document.getElementById("kiloO"), O = document.getElementById("nuloO"), mO = document.getElementById("miliO"), uO = document.getElementById("microO"), nO = document.getElementById("nanoO"), pO = document.getElementById("picoO");

    TI.innerText = "T" + unitP;
    TO.innerText = "T" + unitP;
    GI.innerText = "G" + unitP;
    GO.innerText = "G" + unitP;
    MI.innerText = "M" + unitP;
    MO.innerText = "M" + unitP;
    KI.innerText = "K" + unitP;
    KO.innerText = "K" + unitP;
    I.innerText = unitP;
    O.innerText = unitP;
    mI.innerText = "m" + unitP;
    mO.innerText = "m" + unitP;
    uI.innerText = "µ" + unitP;
    uO.innerText = "µ" + unitP;
    nI.innerText = "n" + unitP;
    nO.innerText = "n" + unitP;
    pI.innerText = "p" + unitP;
    pO.innerText = "p" + unitP;

    let res = og * (10 ** (3 * (prefixOut.value - prefixIn)));

    result.innerText = "Resultado: " + res.toFixed(2) + prefixOut.options[prefixOut.selectedIndex].text;
}