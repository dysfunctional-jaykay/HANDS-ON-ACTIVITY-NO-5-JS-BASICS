const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sum = document.getElementById("sum");
const difference = document.getElementById("difference");
const product = document.getElementById("product");
const quotient = document.getElementById("quotient");

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        let num1 = parseInt(num1Txt.value);
        let num2 = parseInt(num2Txt.value);

        sum.innerHTML = num1 + num2;
        difference.innerHTML = num1 - num2;
        product.innerHTML = num1 * num2;
        quotient.innerHTML = num1 / num2;
    }
    else {
        alert("Fields must be inputted.");
    }
}

function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    sum.innerHTML = "";
    difference.innerHTML = "";
    product.innerHTML = "";
    quotient.innerHTML = "";
    
}
