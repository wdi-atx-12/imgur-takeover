console.log('Defining functions!');

function changeNavColor() {
  // change the navbar to a different color
  getTopbar().style.backgroundColor = randomRGB();
}

function hijackHeading() {
  let heading = document.createElement('h1');
  heading.innerText = 'This page is now under Peter Kong\'s control!!!';
  heading.setAttribute('class', 'hijacked-heading');
  heading.style.fontSize = '20px';
  heading.style.padding = '0';
  getTopbar().appendChild(heading);
}

function cullImages() {
  let images = [...document.querySelectorAll('.post')];
  let removeCount = Math.round(images.length/2);
  let hideCount = Math.round(removeCount/2)

  // removing half
  for(let i = 0; i < images.length/2; i++) {
    images[i].parentNode.removeChild(images[i]);
  }

  for(let i = 0; i < images.length/4; i++) {
    images[images.length-1-i].style.visibility = 'hidden';
  }
}

function politeImageLinks() {
  let imageLinks = [...document.querySelectorAll('.image-list-link')];
  imageLinks.forEach(a => {
    a.addEventListener('click', function sayPlease(e) {
      e.preventDefault();
      let answer = prompt('Say please! ');
      if(answer.toLowerCase() === 'please') {
        window.open(this.getAttribute('href'));
      }
    });
  });
}

//
// helper functions
//

// returns random integer from 0 to n-1
function rng(n) {
  return Math.floor(Math.random()*n);
}

function randomRGB() {
  let [r,g,b] = [256,256,256].map(n => {
    return rng(n);
  });
  return `rgb(${r},${g},${b})`;
}

function getTopbar() {
  return document.querySelector('#topbar');
}
