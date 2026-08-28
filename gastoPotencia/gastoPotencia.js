function potenciaCalc(){

    let power = document.getElementById("p");
    power = power.value;

    let unit = document.getElementById("unit");
    unit = unit.value;

    let time = document.getElementById("time");
    time = time.value;

    let price = document.getElementById("price");
    price = price.value;

    let resKWH = document.getElementById("resultPower");
    let resRS = document.getElementById("resultPrice");

    if(unit == 0){

        power /= 1000;

    }

    let res = power * time * 30;

    resKWH.innerText = "Gasto: " + res.toFixed(2) + " kWh";

    res *= price

    resRS.innerText = "Custo: R$" + res.toFixed(2);
}