document.addEventListener("DOMContentLoaded", function () {
    RegForm = document.querySelector(".form1");
    LogForm = document.querySelector(".form2");

    RegEmail = document.getElementById("i1");
    RegNickname = document.getElementById("i2");
    RegPassword = document.getElementById("i3");
    RegConfirmedPassword = document.getElementById("i4");
    RegPhone = document.getElementById("i7");

    LogEmail = document.getElementById("i8");
    LogPassword = document.getElementById("i9");

    function CheckPasswordStrength(RegPassword) {
        if (RegPassword.match(/[A-Za-z]/)) {
            return "Weak";
        } else if (RegPassword.match(/[A-Za-z]/) && RegPassword.match(/[0-9]/)) {
            return "Medium";
        } else if (RegPassword.match(/[A-Za-z]/) && RegPassword.match(/[0-9]/) && RegPassword.match(/[@$!%*?&]/)) {
            return "Strong";
        } else {
            return "Invalid";
        }
    }

    RegForm.addEventListener("submit", function (event) {
        event.preventDefault();
        errors = [];
        if (!RegEmail.value.includes("@")) {
            errors.push("Email must contain '@'.");
        }
        if (RegNickname.value.trim() === "") {
            errors.push("Nickname cannot be empty.");
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
            RegForm.reset();
        }
    });

    LogForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!LogEmail.value.includes("@")) {
            alert("Enter a valid email.");
        } else if (LogPassword.value.trim() === "") {
            alert("Password cannot be empty.");
        } else {
            alert("Login successful!");
            LogForm.reset();
        }
    });
});
