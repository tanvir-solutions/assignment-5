document.getElementById("sign-btn").addEventListener("click", function() {
    const username = document.getElementById("user-name");
    const usernameValue = username.value;
    const password = document.getElementById("password");
    const passwordValue = password.value;
    if (usernameValue === "admin" && passwordValue === "admin123") {
        window.location.assign("/home.html");
    }else{
        alert("Invalid username or password. Please try again.");
    }
});



