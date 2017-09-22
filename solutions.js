console.log('Defining functions!');


function changeNavColor() {
  // change the navbar to a different color
  var navTop = document.querySelector('#topbar');
  navTop.style.backgroundColor = 'green';
}

function addTopHeading() {
  var createElement = document.createElement('h1');
  createElement.setAttribute('class', 'customClass');
  createElement.innerHTML = 'This page is now under Matt\'s control!';
  document.getElementById('content').prepend(createElement);
  createElement.style.fontSize = '50px';
  createElement.style.color = 'blue';
}

function removeHalf() {
  var links = [...document.querySelectorAll('.cards .image-list-link')];
  var posts = [...document.querySelectorAll('.cards .post')];
  var linksLength = links.length / 2;
  for (let i = 0; i < linksLength; i++) {
   links[i].parentNode.removeChild(links[i]);
   posts[i].style.display = 'none';
  }
}

function alertAfterImgClick() {
  var selectImgs = [...document.querySelectorAll('.cards .image-list-link')];
  
  selectImgs.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      var getAttr = e.target.parentNode.getAttribute('href');
      
      var promptUser = prompt("Type \'please\' to see this image.").toLowerCase();
      if (promptUser === 'please') {
        window.open(`http://imgur.com${getAttr}`, '_self');
      }
    });
  });
}

changeNavColor();
addTopHeading();
removeHalf();
alertAfterImgClick();



