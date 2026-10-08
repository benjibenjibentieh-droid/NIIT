// const SignupForm = document.querySelector("#SignupForm");
// SignupForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
// });
const SignupForm = document.querySelector("#SignupForm");

SignupForm.addEventListener("submit", (event)=> {
    event.preventDefault();

    const fullname = document.querySelector("#fullname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const error = document.querySelector("#error")

    error.textContent = ""
    error.style.color = "red"
    error.style.fontSize = "15px"
    // error.style.backgroundColor = "lightgray"
    if (!fullname || !email || !password || !confirmPassword) {
        // alert("Please fill in all fields.");
        error.textContent = "All fields must be filled"
        error.style.color = "black"
        error.style.fontSize = "15px"
        return;
    }

    if (password !== confirmPassword) {
        // alert("Passwords do not match.");
        error.textContent = "Passwords do not match."
        error.style.color = "blue"
        error.style.fontSize = "15px"
        return;
    }

    if (password.length < 5) {
        // alert("Password must be at least 5 characters long.");
        error.textContent = "Password must be at least 5 characters long."
        error.style.color = "green"
        error.style.fontSize = "15px"
        return;
    }

    const user = {
        fullname: fullname,
        email: email,
        password: password
    }

    localStorage.setItem("User",JSON.stringify(user))

    // alert("Signup successful!");
    error.textContent = "Signup successful! Redirecting to login page..."

    SignupForm.reset();

    window.location.href = "login.html";
});