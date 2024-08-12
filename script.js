document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.textContent = 'Toggle Theme';
    themeToggleBtn.classList.add('btn', 'btn-secondary', 'theme-toggle-btn');
    document.body.appendChild(themeToggleBtn);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
    });
});
let createAccountBtn = document.getElementById("createAccountBtn");

if (createAccountBtn) {
    createAccountBtn.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "./register.html";
    });
}

let createAccount = document.getElementById("createAccount");

if (createAccount) {
    createAccount.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "./index.html";
    });
}

let signIn = document.getElementById("signIn");

if (signIn) {
    signIn.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "./index.html";
    });
}


let visitor = document.getElementById("visitor");

if (visitor) {
    visitor.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "./index.html";
    });
}

