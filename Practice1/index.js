const nameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const form = document.querySelector(".login-form");
const container = document.querySelector(".container");
const result = document.querySelector("#result");

form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    const incorrect = document.querySelector("#incorrect");

    if (nameInput.value === "shyam" && emailInput.value === "shyam@goli"){
        container.remove();
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`You have been successfully logged in!`));
        result.appendChild(p)
        result.classList.add("para")
    }
    else{

        incorrect.innerHTML = "<h4>Invalid Credentials</h4>";
        incorrect.classList.add("error");
        nameInput.value = "";
        emailInput.value = '';
        setTimeout( () => incorrect.remove(),2000);
    }
}
