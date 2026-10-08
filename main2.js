const LoginForm = document.querySelector("#LoginForm");
LoginForm.addEventListener("submit", (event)=> {
    event.preventDefault();

    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;
    const error = document.querySelector("#loginError")

    error.textContent = ""
    error.style.color = "red"
    error.style.fontSize = "15px"

    if (!email || !password) {
        // alert("Please fill in all fields.");
        error.textContent = "All fields must be filled"
        return;
    }
    const storedUser = JSON.parse(localStorage.getItem("User"));
    // if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
    //     alert("Invalid email or password.");
    //     return;
    // }

    // const saveUser = JSON.parse(localStorage.getItem("User"))
    if (!storedUser) {
        // alert ("not account found. Pls sign up first")
        error.textContent = "No account found. Please sign up first."
    }
        if (email === storedUser.email && password === storedUser.password) {
        // alert (`Welcome ${storedUser.fullname}`)
        error.textContent = `Welcome ${storedUser.fullname}. Redirecting to home page...`

        LoginForm.reset();

        window.location.href = "home.html";

        // alert("Login successful!");
        error.textContent = "Login successful! Redirecting to home page..."

    } else {
        // alert ("Login invalid")
        error.textContent = "Invalid email or password."
    }
});