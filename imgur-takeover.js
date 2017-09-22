// The Tasks
//
// Create a function that changes the navbar to a different color.

var topNav = document.body.querySelector('#topbar');
topNav.style.backgroundColor = 'red';

// Add a new <h1> to the top of the page that says <h1>This page is now under *YOUR NAME*'s control!'</h1>.


document.getElementById("user-gallery-message").innerHTML += '<h1>This page is now under raul\'s control!</h1>';


// Remove half of the images (from the DOM) and hide half of the remainder (CSS display property).


var picTiles = [...document.querySelectorAll('.post')];
  for(var i= 0; i<picTiles/2; i++){
    var currentPic = picTiles[i];
    currentPic.remove();
  };



var tilesToGray = [...document.querySelectorAll('.post')];
tilesToGray.forEach(function imgGray(){
  for(var i= 0; i<tilesToGray.length/2; i++){
    var grayThis = tilesToGray[i];
    grayThis.style.color = '#2C2F34'
    }
  });




// Create a function that prompts the user to type "please" after clicking an image in order to see it larger.
// Hint: You will need to use event.preventDefault();
var picTiles = [...document.querySelectorAll('.first-child img')]
picTiles.forEach(function ask(imgu){
  imgu.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Ask Nicely, Type \'Please\'');
  });
});
