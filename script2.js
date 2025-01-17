let users = [];

document.addEventListener("DOMContentLoaded", function () {
    const RegForm = document.querySelector(".form1");
    const LogForm = document.querySelector(".form2");

    const RegEmail = document.getElementById("i1");
    const RegNickname = document.getElementById("i2");
    const RegPassword = document.getElementById("i3");
    const RegConfirmedPassword = document.getElementById("i4");
    const RegCountry = document.getElementById("i5");
    const RegCity = document.getElementById("i6");
    const RegPhone = document.getElementById("i7");

    const LogEmail = document.getElementById("i8");
    const LogPassword = document.getElementById("i9");

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
        let errors = [];
        if (!RegEmail.value.match(/^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/)) {
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
            users.push({
                email: RegEmail.value,
                nickname: RegNickname.value,
                password: RegPassword.value,
                country: RegCountry.value,
                city: RegCity.value,
                phone: RegPhone.value
            });

            alert("Registration successful!");
            RegForm.reset();
        }
    });

    LogForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var user = null;
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === LogEmail.value && users[i].password === LogPassword.value) {
                user = users[i];
                break;
            }
        }

        if (user) {
            alert("Login successful! Welcome, " + user.nickname);
            document.getElementById("h4one").textContent = "Welcome, " + user.nickname;
        } else {
            alert("Invalid credentials.");
        }
    });
    
});