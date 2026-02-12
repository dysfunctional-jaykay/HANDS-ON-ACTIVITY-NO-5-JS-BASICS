const first_name = document.getElementById("first_name");
const middle_name = document.getElementById("middle_name");
const last_name = document.getElementById("last_name");
const full_name = document.getElementById("full_name");


function enter() {
    if(!(first_name.value === "" || middle_name.value === "" || last_name.value === "")) {
        full_name.innerHTML = first_name.value + " " + middle_name.value + " " + last_name.value;
    }
    else {
        alert("Fields must be inputted.")
    }

    
}

function clearEntries() {
    first_name.value = "";
    middle_name.value = "";
    last_name.value = "";

    full_name.innerHTML = "";
}

