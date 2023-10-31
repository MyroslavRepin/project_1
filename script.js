// script.js
function toggleInfo(button) {
    if (button.classList.contains('expanded')) {
      button.classList.remove('expanded');
      button.innerHTML = 'Contact Me';
    } else {
      button.classList.add('expanded');
      button.innerHTML = `
        <a href="https://www.instagram.com/myroslavrepin/" target="_blank">My Instagram</a><br>
        Email: myroslavrepin@gmail.com
      `;
    }
  }
  