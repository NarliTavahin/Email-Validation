
const form = document.querySelector("form"),
eInput = form.querySelector(".input"),
text = form.querySelector(".text");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let pattern = /^[^ ]+\.[a-z]{2,3}$/;
    form.classList.add("error");
    form.classList.remove("error");
    if(eInput.value == "") {
        text.innerText = "Email can't be blank";
    } else if (!eInput.value.match(pattern) ) {
        text.innerText = "Please enter a valid Email"
    } else {
        form.classList.replace("error" , "valid");
        text.innerText = "This is a valid Email";
    }
});