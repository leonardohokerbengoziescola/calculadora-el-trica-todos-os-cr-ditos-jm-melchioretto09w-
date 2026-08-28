function descobrirResist(){

    let qtdF = document.getElementById("qtdF");
    qtdF = qtdF.value;

    let d1 = document.getElementById("d1");
    d1 = d1.value;

    let d2 = document.getElementById("d2");
    d2 = d2.value;

    let d3 = document.getElementById("d3");

    let m = document.getElementById("m");
    m = m.value;

    let t = document.getElementById("t");
    t = t.value;

    let valueResist = '';

    if(qtdF == 5){

        d3.disabled = false;
        d3 = d3.value;

        valueResist = d1 + d2 + d3;

    }else{

        d3.disabled = true;

        valueResist = d1 + d2;

    }

    valueResist = Number(valueResist) * (10 ** m);

    let valueTolera = Number(valueResist) * (t / 100)

    let resResist = document.getElementById("resist");
    let resTolera = document.getElementById("tolera");

    resResist.innerText = "Resistência: " + Number(valueResist).toFixed(2) + "Ω";
    resTolera.innerText = "Tolerância: " + t + "% = ±" + valueTolera.toFixed(2);
}