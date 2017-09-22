console.log('Defining functions!');

//- Create a function that changes the navbar to a different color.

var topNav = document.querySelector("#topbar");

function changeNavColor() {
  topNav.style.backgroundColor = "red";
};
changeNavColor();

//- Add a new `<h1>` to the top of the page that says `<h1>This page is now under *YOUR NAME*'s control!'</h1>`.
document.querySelector(".before-text").innerHTML = "<h1>This page is now under DAZAEV\'S control!'</h1>";

//- *Remove* half of the images (from the DOM) and *hide* half of the remainder (CSS display property).
var imgElements = document.querySelectorAll(".post");

for (var i = 0; i < imgElements.length / 2; i++){
  var thisImage = imgElements[i];
  thisImage.remove();
};

// for (var h = imgElements.length / 2; h ; h++)
for (var x = 0; x < imgElements.length; x++){
  imgElements.style.display = "none";
};

//- Create a function that prompts the user to type "please" after clicking an image in order to see it larger.
var plsPic = [...document.querySelectorAll(".first-child img")]

plsPic.forEach(function ask(pic){
  pic.addEventListener("click", function(event){
    event.preventDefault();
    alert("Say pleeeease");
  });
});
