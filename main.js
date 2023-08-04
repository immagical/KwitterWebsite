function login() {
    username = document.getElementById("username").value;
    if (username.length < 4) {
        document.getElementById("error").innerHTML = "Your username must be at least 4 characters long. "
    }
    else {
        localStorage.setItem("username",username); 
        window.location = "kwitter.html"
    }
};