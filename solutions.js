//example 1

function changeBackground () {
var nav = document.getElementById('topbar');
nav.style['background-color'] = 'red';
};

changeBackground ();


//example 2

function control() {
  var newh1 = document.createElement('h1');
  newh1.innerHTML = 'This page is now under Matt Cain\'s control!';
  document.getElementById('topbar').append(newh1);
};

control();


//example 3

function imgRmvHide() {
var images = document.querySelectorAll('.cards .post');
for (var i = 0; i < images.length / 2 ; i++) {
     images[i].parentNode.removeChild(images[i]);
      images[i].pop;
      console.log(images);
};

for (var i = 0; i < images.length / 2 ; i++) {
  images[i].style.display = 'none';
  };
};

imgRmvHide();


//example 4

function imagePlease () {
  var images = document.querySelectorAll('.cards .post');
    images.forEach(function(image) {
      image.addEventListener('click', function(event) {
        if(prompt("Say please.  Now...") !== "please")
          event.preventDefault();
      });
   });
};

imagePlease ();