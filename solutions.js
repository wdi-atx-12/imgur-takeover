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


//
// helper functions
//

// returns random integer from 0 to n-1
function rng(n) {
  Math.floor(Math.random()*n);
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
