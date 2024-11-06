//time
function updateDateTime() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${month}/${day}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
    document.getElementById('dateTimeDisplay').textContent = `${formattedTime} ${formattedDate}`;
}

updateDateTime();
setInterval(updateDateTime, 60000);

//faq sections
document.querySelectorAll('.sectiont h2').forEach(function (question) {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            document.querySelectorAll('.faq-answer').forEach(function (ans) {
                ans.classList.remove('show');
            });
            answer.classList.add('show');
        }
    });
});

//keyboard
document.addEventListener("keydown", (event) => {
    const navItems = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    let currentIndex = Array.from(navItems).findIndex((item) => item === document.activeElement);

    if (event.key === "ArrowRight") {
        //next item
        currentIndex = (currentIndex + 1) % navItems.length;
        navItems[currentIndex].focus();
    } else if (event.key === "ArrowLeft") {
        //back item
        currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
        navItems[currentIndex].focus();
    }
});

//time button
document.getElementById("toggleTimeBtn").addEventListener("click", () => {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");
    if (dateTimeDisplay.style.display === "none") {
        dateTimeDisplay.style.display = "inline";
    } else {
        dateTimeDisplay.style.display = "none";
    }
});

//sound
function playSound() {
    var sound = document.getElementById("sound");
    sound.play();
}

function validateForm() {
    let errorMessage = "";

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!validateEmail(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }

    if (password.length < 6) {
        errorMessage += "Passwomust be at least 6 characters long.\n";
    }

    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        return false;
    } else {
        alert("Registration successful!");
        document.querySelector('form').reset();
        return true;
    }
}

//changing backgrond
if (document.body.classList.contains('page_about')) {
    function changeBackgroundColor(color) {
        document.body.style.background = color;
    }

    function resetBackground() {
        document.body.style.background = 'linear-gradient(135deg, #a2c2e2, #d0a2e2)';
    }
}

function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    switch (true) {
        case (hours >= 5 && hours < 12):
            greeting = "Good Morning!";
            break;
        case (hours >= 12 && hours < 18):
            greeting = "Good Afternoon!";
            break;
        case (hours >= 18 && hours < 22):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Hello, Night Owl!";
            break;
    }

    document.getElementById("greetingMessage").textContent = greeting;
}

displayGreeting();

document.getElementById("subscribeButton").addEventListener("click", function () {
    document.getElementById("popupForm").style.display = "flex";
});


window.addEventListener("click", function (event) {       
    if (event.target === document.getElementById("popupForm")) {
        document.getElementById("popupForm").style.display = "none";
    }
});

// about
function changeFont(sectionId) {
    const section = document.getElementById(sectionId);
    const currentFont = section.style.fontFamily;

    if (currentFont === 'Georgia, serif') {
        section.style.fontFamily = 'Arial, sans-serif';
    } else {
        section.style.fontFamily = 'Georgia, serif';
    }
}

function changeSize(sectionId) {
    const section = document.getElementById(sectionId);
    const currentSize = section.style.fontSize;

    if (currentSize === '20px') {
        section.style.fontSize = '16px'; 
    } else {
        section.style.fontSize = '20px'; 
    }
}

document.querySelectorAll('p').forEach(p => {
    p.style.fontSize = '16px'; 
});

// Adding event listeners for each section's buttons
document.getElementById("changeFontIdea").addEventListener("click", function () {
    changeFont("idea-section");
});

document.getElementById("changeSizeIdea").addEventListener("click", function () {
    changeSize("idea-section");
});

document.getElementById("changeFontDevelop").addEventListener("click", function () {
    changeFont("develop-section");
});

document.getElementById("changeSizeDevelop").addEventListener("click", function () {
    changeSize("develop-section");
});

document.getElementById("changeFontFuture").addEventListener("click", function () {
    changeFont("future-section");
});

document.getElementById("changeSizeFuture").addEventListener("click", function () {
    changeSize("future-section");
});

document.querySelectorAll('.rating').forEach(rating => {
    const stars = rating.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            highlightStars(stars, value);
        });

        star.addEventListener('mouseout', () => {
            const currentRating = rating.getAttribute('data-rating');
            highlightStars(stars, currentRating);
        });

        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            rating.setAttribute('data-rating', value);
            highlightStars(stars, value);
        });
    });
});

function highlightStars(stars, value) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

//register
function registerUser(event) {
    event.preventDefault(); // wont turn the form off if reloading or crashing

    const name = document.getElementById('name').value;
    const email = document.getElementById('reg-email').value;
    const location = document.getElementById('location').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    if (localStorage.getItem(email)) {
        alert("This email is already registered. Please log in.");
        return false;
    }

    const user = { name, email, location, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
    return false;
}


// validation
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "home.html.html";
        return false;
    } else {
        alert("Invalid email or password.");
        return false;
    }
}

// login check
function checkLoggedInUser() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        alert("Please log in first.");
        window.location.href = "login.html";
    }
}

// logout
function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
}

//theme check
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        updateThemeElements(savedTheme === 'dark');
    }
});

// theme toggle
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeElements(isDark);
}

// update theme elements
function updateThemeElements(isDark) {
    const textColor = isDark ? '#fff' : '#333';
    const bgColor = isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)';
    const navbarColor = isDark ? 'navbar-dark bg-dark' : 'navbar-light bg-light';

    document.querySelectorAll('header, section, footer, .sectiont').forEach((element) => {
        element.style.color = textColor;
        element.style.backgroundColor = bgColor;
    });

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.className = `navbar navbar-expand-lg ${navbarColor} w-100`;
    }
}