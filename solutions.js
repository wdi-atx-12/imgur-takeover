console.log('Defining functions!');

function changeNavColor(color) {
  // change the navbar to a different color
  //id = 'topbar'
  var element = document.querySelector('#topbar');
  //console.log(element);
  element.style['background-color'] = color;


}

function changeH1() {
    var element = document.querySelector('h1');

    element.innerText = 'This page is now under Gerry\'s control!';
}

function imgMani() {
    //Remove half of the images (from the DOM) and hide half of the remainder (CSS display property).
    var images = document.querySelectorAll('img');
    var length = Math.floor(images.length / 2);

    for (var i = 0; i < length; i++) {
        var image = images[i];
        if((i >= length / 2)) {
            image.style['display'] = 'none';
        } else {
            image.remove();
        }

        //console.log(image);


    }
    //console.log(images.length);
}

function pleaseAlert() {
    //<a class="image-list-link" href="/gallery/GWNn7" data-page="0">

    var links = [...document.querySelectorAll('.cards .image-list-link')];
    links.forEach(function(links) {
        links.addEventListener('click', function(event) {
            var input = window.prompt("What\s the magic word? ");

            if(input.toLowerCase() !== "please"){
                event.preventDefault();
            }
        });
    });
}

changeNavColor();
changeH1();
imgMani();
pleaseAlert();
