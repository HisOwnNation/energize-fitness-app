
  const hamburger = document.querySelector('.hamburger-button');
  const sideMenu = document.querySelector('.side-menu');

  hamburger.addEventListener('click', () => {
    sideMenu.style.right = sideMenu.style.right === '0px' ? '-300px' : '0px';
  });

// ...existing code...

// FAQ toggle logic
document.querySelectorAll('.question-group').forEach(group => {
  const plusBtn = group.querySelector('.fa-plus');
  const queBody = group.querySelector('.que-body');
  if (plusBtn && queBody) {
    plusBtn.addEventListener('click', () => {
      if (queBody.style.display === 'block') {
        queBody.style.display = 'none';
      } else {
        queBody.style.display = 'block';
      }
    });
  }
});