function leiOhm(){

    let desc = document.getElementById("gndzDesc");
    desc = desc.value;

    let u = document.getElementById("u");
    let r = document.getElementById("r");  
    let i = document.getElementById("i");
    let p = document.getElementById("p");

    let res
    let unit

    switch (desc) {
        case 'U':

            u.disabled = true;
            r.disabled = false;
            i.disabled = false;

            r = r.value;
            i = i.value;

            res = r * i;
            unit = 'V'

            break;
        case 'R':

            u.disabled = false;
            r.disabled = true;
            i.disabled = false;

            u = u.value;
            i = i.value;

            res = u / i;
            unit = 'Ω'

            break;
        case 'I':

            u.disabled = false;
            r.disabled = false;
            i.disabled = true;

            u = u.value;
            r = r.value;

            res = u / r;
            unit = 'A'

            break;
        case 'P':

            u.disabled = false;
            r.disabled = true;
            i.disabled = false;

            u = u.value;
            i = i.value;

            res = u * i;
            unit = 'W'

            break;
    }

    let result = document.getElementById("result");

    result.innerText = desc + " = " + res.toFixed(2) + unit;


}