// Function to display the clients
function displayClients() {
  const clientList = document.getElementById('clientList');
  clientList.innerHTML = '';

  const modules = [
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'No Fall',
      description: 'A module that prevents falling damage in-game.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Flight',
      description: 'Enables the ability to fly in the game world.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Kill Aura',
      description: 'Automatically attacks nearby enemies with enhanced combat capabilities.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'ESP',
      description: 'Highlights and displays the location of players and entities in-game.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Block ESP',
      description: 'Highlights and displays the location of blocks in the game world.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'AutoClicker',
      description: 'Automatically clicks the mouse at a set interval.',
      image: 'https://example.com/autoclicker.png',
      githubUrl: 'https://github.com/username/repo'
    },
    {
      name: 'X-Ray Vision',
      description: 'Allows you to see through blocks and find valuable resources.',
      image: 'https://example.com/xray.png',
      githubUrl: 'https://github.com/username/repo'
    },
    {
      name: 'Speed Boost',
      description: 'Increases your movement speed in the game.',
      image: 'https://example.com/speedboost.png',
      githubUrl: 'https://github.com/username/repo'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    },
    {
      name: 'Tungsten Client',
      description: 'An advanced client with powerful features for game enhancement.',
      image: 'https://www.911metallurgist.com/blog/wp-content/uploads/2015/07/Tungsten.png',
      githubUrl: 'https://github.com/smoke-wolf'
    }
  ];

  modules.forEach(module => {
    const listItem = document.createElement('li');
    listItem.className = 'client';

    const clientImage = document.createElement('img');
    clientImage.src = module.image;
    clientImage.alt = module.name;
    clientImage.className = 'client-image';

    const clientDetails = document.createElement('div');
    clientDetails.className = 'client-details';

    const clientName = document.createElement('h2');
    clientName.textContent = module.name;
    clientName.className = 'client-name';

    const clientDescription = document.createElement('p');
    clientDescription.textContent = module.description;
    clientDescription.className = 'client-description';

    const downloadButton = document.createElement('a');
    downloadButton.href = module.githubUrl;
    downloadButton.textContent = 'Download';
    downloadButton.className = 'download-button';

    clientDetails.appendChild(clientName);
    clientDetails.appendChild(clientDescription);
    clientDetails.appendChild(downloadButton);

    listItem.appendChild(clientImage);
    listItem.appendChild(clientDetails);

    clientList.appendChild(listItem);
  });
}

// Display clients on page load
document.addEventListener('DOMContentLoaded', displayClients);

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
