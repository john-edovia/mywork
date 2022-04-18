// function add() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     var out = Number(a) + Number(b)
//     // document.getElementsByClassName("output")[0].innerHTML = `Sum of numbers is ${out}`
//     document.getElementsByClassName("result")[0].placeholder = `${a} + ${b} = ${out}`

// }

// function sub() {
//     let a = document.getElementById("first").value;
//     let b = document.getElementById("second").value;
//     let out = Number(a) - Number(b)
//     // document.getElementsByClassName("output")[0].innerHTML = `Sum of numbers is ${out}`
//     document.getElementsByClassName("result")[0].placeholder = `${a} - ${b} = ${out}`

// }
function calc(opt) {
    let a = document.getElementById("first").value;
    let b = document.getElementById("second").value;
    var out;
    if (opt == "Add") {
        out = Number(a) + Number(b)
        document.getElementsByClassName("result")[0].value = `${a} + ${b} = ${out}`;
    } else if (opt == "Sub") {
        out = Number(a) - Number(b)
        document.getElementsByClassName("result")[0].value = `${a} - ${b} = ${out}`;
    } else if (opt == "Div") {
        out = Number(a) / parseFloat(b)
        document.getElementsByClassName("result")[0].value = `${a} ÷ ${b} = ${out}`;
    } else if (opt == "Mul") {
        out = Number(a) * Number(b)
        document.getElementsByClassName("result")[0].value = `${a} x ${b} = ${out}`;
    } else {
        var elements = document.querySelectorAll("input");
        for (let i = 0; i < elements.length; i++) {
            elements[i].value = '';
        }
        // document.getElementsByClassName("result")[0].placeholder = ""

    }
}