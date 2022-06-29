let recipientNameEl = document.getElementById("recipient-name");
let emailEl = document.getElementById("email-id");
let phoneEl = document.getElementById("contact-no");
let getInTouchEl = document.getElementById("getInTouch");

let nameErrorEl = document.getElementById("nameErrorMsg");
let emailErrorEl = document.getElementById("emailErrorMsg");

let messageEl = document.getElementById("message-text");

let successMsgEl = document.getElementById("successMsg");

let closeEl = document.getElementById("closeModal");


let formData = {
    name: "",
    email: "",
    phone: "",
    message: ""
};

recipientNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrorEl.textContent = "Required*";
    } else {
        nameErrorEl.textContent = "";
    }
    formData.name = event.target.value;
});

phoneEl.addEventListener("change", function(event) {
    formData.phone = event.target.value;
});

messageEl.addEventListener("change", function(event) {
    formData.message = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = "Required*";
    } else {
        emailErrorEl.textContent = "";
    }
    formData.email = event.target.value;
});

closeEl.addEventListener("click", function close(formData) {
    phoneEl.value = "";
    emailEl.value = "";
    messageEl.value = "";
    recipientNameEl.value = "";
    successMsgEl.textContent = "";
    formData.name = "";
    formData.email = "";
    formData.phone = "";
    formData.message = "";
});


function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "") {
        nameErrorEl.textContent = "Required*";
    }
    if (email === "") {
        emailErrorEl.textContent = "Required*";
    }
}

function successMsg(formData) {
    successMsgEl.textContent = "Nice to meet you " + formData.name + " !!! , hope we will meet soon";
}



getInTouchEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
});