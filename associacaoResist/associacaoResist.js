function associResist(){

    let qtd = document.getElementById("qtd");
    qtd = qtd.value;

    let resist = document.getElementById("resist");
    resist = resist.value;

    let type = document.getElementById("associType");
    type = type.value;

    let result = document.getElementById("result");

    let res = 0;

    if(type == 'P'){

        for(let i = 0; i < qtd; i++){

            res += 1/resist;

        }

        res = 1 / res;

    }
    if(type == 'S'){

        for(let i = 0; i < qtd; i++){
            
            res += Number(resist);

        }

    }

    result.innerText = "Req: " + res.toFixed(2) + "Ω";


}