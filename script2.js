document.addEventListener("DOMContentLoaded", function () {
    RegForm = document.querySelector(".form1");
    LogForm = document.querySelector(".form2");

    RegEmail = document.getElementById("i1");
    RegNickname = document.getElementById("i2");
    RegPassword = document.getElementById("i3");
    RegConfirmedPassword = document.getElementById("i4");
    RegCountry = document.getElementById("i5");
    RegCity = document.getElementById("i6");
    RegPhone = document.getElementById("i7");

    LogEmail = document.getElementById("i8");
    LogPassword = document.getElementById("i9");

    function CheckPasswordStrength(password) {
        if (password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/)) {
            return "Strong";
        } 
        if (password.match(/[a-z]/) && password.match(/[0-9]/)) {
            return "Moderate";
        } 
        if (password.match(/[a-z]/)) {
            return "Weak";
        } 

        return "Invalid";
    }

    RegPassword.addEventListener("input", function () {
        Strength = CheckPasswordStrength(RegPassword.value);
        StrengthDisplay = document.getElementById("i3/4");
        StrengthDisplay.textContent = "Password Strength: " + Strength;
    });

    RegForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errors = [];
        if (!RegEmail.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/)) {
            errors.push("Please enter a valid email.");
        }        
        if (RegNickname.value.trim() === "") {
            errors.push("Nickname cannot be empty.");
        }
        if (RegCountry.value.trim() === "") {
            errors.push("Country input cannot be empty.");
        }
        if (RegCity.value.trim() === "") {
            errors.push("City cannot be null...");
        }
        if (RegPassword.value !== RegConfirmedPassword.value) {
            errors.push("Passwords do not match.");
        }
        PassWordStrength = CheckPasswordStrength(RegPassword.value);
        if (PassWordStrength === "Weak") {
            errors.push("Password is too weak. Use at least 6 characters, letters, and numbers.");
        }
        if (!RegPhone.value.startsWith("+") || RegPhone.value.length < 10) {
            errors.push("Phone number must start with '+' and have at least 10 characters.");
        }
        if (errors.length > 0) {
            alert("Please fix these errors:\n" + errors.join("\n"));
        } else {
            alert("Registration successful!");
            document.getElementById("h4one").textContent = "Welcome, " + RegEmail.value;
            RegForm.reset();
        }
    });

    LogForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!LogEmail.value.includes("@")) {
            alert("Enter a valid email.");
        } 
        else if (LogPassword.value.trim() === "") {
            alert("Password cannot be empty.");
        } 
        else {
            alert("Login successful!");
            LogForm.reset();
        }
    });
});
