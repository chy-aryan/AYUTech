// Example: Add interactivity to dashboard cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.dashboard-card');
  
    cards.forEach(card => {
      const button = card.querySelector('button');
      button.addEventListener('click', () => {
        alert(`You clicked the "${card.querySelector('h3').textContent}" button!`);
      });
    });
  
    // Example: Display user data (if stored in localStorage)
    const username = localStorage.getItem('username');
    if (username) {
      const header = document.querySelector('.dashboard-header h1');
      header.textContent = `Welcome, User!`;
    }
  });