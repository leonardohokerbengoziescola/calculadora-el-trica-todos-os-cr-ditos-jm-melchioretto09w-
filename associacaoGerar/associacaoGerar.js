function associGerar(){

    let qtd = document.getElementById("qtd");
    qtd = qtd.value;

    let tensao = document.getElementById("tensao");
    tensao = tensao.value;

    let corrente = document.getElementById("corrente");
    corrente = corrente.value;

    let type = document.getElementById("associType");
    type = type.value;

    let resultU = document.getElementById("resultU");

    let resultI = document.getElementById("resultI");

    let resU = 0;

    let resI = 0;

    for(let i = 0; i < qtd; i++){

        resU += Number(tensao);
        resI += Number(corrente);

    }

    if(type == 'P'){

        resU /= qtd;

    }
    if(type == 'S'){

        resI /= qtd;

    }

    resultU.innerText = "Ueq: " + resU.toFixed(2) + "V";
    resultI.innerText = "Ieq: " + resI.toFixed(2) + "A";

}