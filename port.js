const text = document.getElementById('changing-text');
const words = ['Programmer', 'Content Creator', 'Web developer', 'Gamer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    text.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    text.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 150);
  }
}

typeEffect();



function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode'); 
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleDarkMode);





document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('#skills ul li');
  
  skillItems.forEach(item => {
      item.addEventListener('mouseover', function() {
          this.style.animation = 'float 0.5s ease-in-out infinite alternate';
      });
      
      item.addEventListener('mouseout', function() {
          this.style.animation = 'none';
      });
  });
});

