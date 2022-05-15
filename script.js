const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

function success(input) {
    input.className = "form-control is-valid";
}


function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'You enter wrong email adress. Please check it.');
    }
}

function checkRequired(inputs) {
    inputs.forEach(input => {
        if (input.value === "") {
            error(input, `${getFieldName(input)} is required.`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, max, min) {
    if(input.value.length<min){
        error(input, `${input.id} has a ${min} character.`);
    }else if(input.value.length>max){
        error(input, `${input.id} has a ${max} character.`);
    }else{
        success(input);
    }
}

function chechPassword(input1, input2){
    if(input1.value  !== input2.value){
        error(input2, `${input2.id} and ${input1.id} passwords haven't matched.`);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkRequired([username, email, password, repassword]);
    checkEmail(email);
    checkLength(username, 15, 9);
    checkLength(password,12, 5);
    chechPassword(password, repassword);
});