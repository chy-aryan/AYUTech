// Handle Login Form Submission
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email && password) {
      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if user exists and credentials match
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Store current user in localStorage
        localStorage.setItem('currentUser', email);

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Handle Signup Form Submission
if (document.getElementById('signupForm')) {
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && email && password) {
      // Retrieve users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if user already exists
      const userExists = users.some((u) => u.email === email);

      if (userExists) {
        alert('User already exists. Please log in.');
      } else {
        // Add new user to localStorage
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Store current user in localStorage
        localStorage.setItem('currentUser', email);

        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Display username on dashboard
if (document.getElementById('username')) {
  document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('currentUser');
    if (username) {
      document.getElementById('username').textContent = username;
    }
  });
}
// ecom
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  // Filter products as the user types in the search bar
  searchInput.addEventListener("keyup", function () {
    const query = this.value.toLowerCase();
    productCards.forEach((card) => {
      const productName = card.getAttribute("data-name");
      if (productName.includes(query)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// Redirect to a new page when the Enter button is clicked
document.getElementById('enterButton').addEventListener('click', function () {
  // Redirect to a new page (e.g., result.html)
  window.location.href = 'result.html';
});

