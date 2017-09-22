console.log('Defining functions!');
// 1.

function changeNavColor() {
  var navBar = document.querySelector('#topbar');
  navBar.style.backgroundColor = 'orange';
};

// 2.
var belongToMe = document.createElement('h1');
document.body.insertBefore(belongToMe, topbar);
// DEFINED '#topbar' ON QUESTION #1

// 3.

function removeImages() {
  var images = [...document.querySelectorAll('.image-list-link')];
	var half_length = Math.ceil(images.length / 2);
	var leftSide = images.splice(0,half_length);
  images.forEach(function(img){
    img.remove();
  })
}
removeImages();

// 4.

  function clickToBig() {
    var images = [...document.querySelectorAll("img")];
    images.forEach(img){
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var promptUser = prompt("Type please to see this image");
        if (promptUser === 'please'){
          alert('you pass');
        }
      });
    };
  }
