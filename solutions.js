console.log('Defining functions!');

function changeNavColor() {
  // change the navbar to a different color
  document.querySelector('#topbar').style.backgroundColor = randomRGB();
};

//
// helper functions
//

function randomRGB() {
  let [r,g,b] = [256,256,256].map(n => {
    return Math.floor(Math.random() * n);
  });
  return `rgb(${r},${g},${b})`;
}
