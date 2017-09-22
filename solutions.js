console.log('Defining functions!');

function changeNavColor(color) {
  // Changes the nav bar to a color of your choice.

  let navBar = document.querySelector('#topbar');
  navBar.style['background-color'] = color;
}

function addTitle(name, firstElement) {
// Adds a message above the first element on the page.

  let currentTitle = document.querySelector(firstElement);
  let newNode = document.createElement('h1');
  currentTitle.insertBefore(newNode, currentTitle.childNodes[0]);
  let newTitle = document.querySelector('h1');
  newTitle.innerText = `This page is now under ${name}'s control!`;
}

function removeImages() {
  // Removes half the images from the imgur page.

  let images = [...document.querySelectorAll('.image-list-link')];
  for (var i=0; i<(images.length/2); i+=2) {
    images[i].remove();
  }
}

function hideImages() {
  // Hides half the images on the imgur page.

  let images = [...document.querySelectorAll('.image-list-link')];
  for (var i=0; i<(images.length/2); i+=2) {
    images[i].style.display = 'none';
  }
}

function linkBlocker() {
  // Prompts the user when they click a link. If they respond
  // incorrectly, the link will not work.

  let links = [...document.querySelectorAll('.image-list-link')];

  links.forEach(link => {
    link.addEventListener('click', event => {
      let text = prompt('You have to say please!');
      if (text !== 'please') {
        event.preventDefault();
      }
    });
  });
}


function randomYoutubeLinks() {
  // Changes a random assortment of 20 images on the page into
  // links to Youtube.
  let images = [...document.querySelectorAll('.image-list-link')];
  for (i=0; i<20; i++) {
    images[Math.floor(Math.random() * images.length)].setAttribute('href', 'https://www.youtube.com');
    console.log(i);
  }
}





