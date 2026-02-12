const numbersTxt = document.getElementById("numbers");
const inputNum = document.getElementById("number");
const sumTxt = document.getElementById("sum");
const max = document.getElementById("max");
const min = document.getElementById("min");

let arr = [];
let sum =  0;

function insertArray(){
    if(!(inputNum === "")){
        const num = parseInt(inputNum.value);
        arr.push(num);
        sum += num;
        inputNum.value = "";

        numbersTxt.innerHTML = arr.join("<br>");

        console.log(sum);

        sumTxt.innerHTML = sum;
        max.innerHTML = Math.max(...arr);
        min.innerHTML = Math.min(...arr);
    }
    else {
        alert("A number must be inputted.")
    }
}

function clearEntries() {
    inputNum.value = "";
    numbersTxt.value = "";
    sumTxt.innerHTML = "";
    max.innerHTML = "";
    min.innerHTML = "";
    arr.length = 0;
    sum = 0;
    numbersTxt.innerHTML = arr.join("<br>");
}

console.log(arr);