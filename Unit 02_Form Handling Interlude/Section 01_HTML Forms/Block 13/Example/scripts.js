function validateForm() {
    let username = document.getElementById("username").value;
    if (username === "" && password === "") {
        document.getElementById("username-error").innerText = "Username is required";
        // TODO: mark both errors in the HTML
        return false;
    }else if (username === ""){
        // TODO: mark the username error in the HTML
    }else if (password === ""){
        // TODO: mark the password error in the HTML
    }
    return true;
}

document.getElementById("myForm")
    .addEventListener("submit", function(){
        return validateForm();
    });