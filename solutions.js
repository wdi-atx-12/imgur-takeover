console.log('Defining functions!');

//1

function changeNavBackground () {
    var navColor = document.querySelector('#topbar');

    navColor.style.backgroundColor = 'blue'
    console.log(topbar);
}

changeNavBackground();

//2

var h1 = document.querySelector('h1');
h1.innerText = 'This page is now under TJ\'s control!';

//3

var imagelist = [...document.querySelectorAll('.body')]
body.removeChild('cards');
page.removeChild(popup);


//4

var smallPictures = [...document.querySelectorAll('.posts')];
smallPictures.forEach(function(smallPicture) {
  smallPicture.addEventListener('click', function(event){
    var askNice = event.preventDefault();
    alert('SAY PLEASE, JERKFACE!')

  })
  });
