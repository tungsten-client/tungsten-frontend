// Generate Shooting Stars
const starContainer = document.getElementById('stars');

function generateRandomStar() {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random size
  const size = Math.random() * 6;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Random position
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  star.style.left = `${posX}%`;
  star.style.top = `${posY}%`;

  // Random color
  const colors = ['#e60000', '#ffefbf', '#ffd8bf', '#bfbfff', '#ffffff', '#990568'];;
  const color = colors[Math.floor(Math.random() * colors.length)];
  star.style.backgroundColor = color;

  // Random velocity
  const velocity = Math.random() * 10 + 5;
  star.style.setProperty('--trans-x', `${posX - 50}%`);
  star.style.setProperty('--trans-y', `${posY + 110 + velocity}vh`);
  star.style.animationDuration = `${Math.random() * 5 + 2}s`;

  starContainer.appendChild(star);
}

for (let i = 0; i < 150; i++) {
  generateRandomStar();
}
