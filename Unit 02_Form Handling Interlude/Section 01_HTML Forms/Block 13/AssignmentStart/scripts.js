function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    username.innerHTML = "";
    password.innerHTML = "";

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