console.log('Defining functions!');

//Create a function that changes the navbar to a different color.
function changeNavColor() {
  document.getElementById("topbar").style["background-color"] = "red";
};

//Add a new <h1> to the top of the page that says <h1>This page is now
//under *YOUR NAME*'s control!'</h1>.
function addHeader() {
  //document.querySelector("body").innerHtml = "<h1>This page is now under Jay's control!'</h1>" +document.querySelector("body").innerHtml;
  document.querySelector("body").insertAdjacentHTML("afterbegin","<h1>This page is now under Jay's control!'</h1>");
};

//Remove half of the images (from the DOM) and hide half of the remainder (CSS display property).
function removeImages() {
  var imgs = [...document.querySelectorAll('#imagelist img')];
  var mid = imgs.length /2;
  imgs.forEach(function(img, index) {
    if(index < mid) {
      //img.style['width'] = "0px";
      //img.style['height'] = "0px";
      img.remove();
    } else {
      img.style['display'] = "none";
    }
  });
}

//Create a function that prompts the user to type "please" after clicking an
//image in order to see it larger.
function askForPlease() {
  var imgs = [...document.querySelectorAll('#imagelist img')];
  imgs.forEach(function(img) {
    img.addEventListener('click', function(event) {
        if(prompt("What do we say?").toLowerCase() !== "please")
          event.preventDefault();
      });
  });
}
//Hint: You will need to use event.preventDefault();
