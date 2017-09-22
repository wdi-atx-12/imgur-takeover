console.log('Defining functions!');

function changeNavColor() {
  // change the navbar to a different color
};

//1. change nav bar
var nav = document.querySelector("#topbar");
function changeNavColor(){
  nav.style.backgroundColor = "yellow";
}
changeNavColor();

//2. change h2
var body = document.querySelector("body");
var h1Change = document.createElement('h1');
h1Change.innerText = 'This page is now under Sophia\'s control!';

body.insertBefore(h1Change, nav);

//3. Remove half of the images (from the DOM) and hide half of the remainder (CSS display property).
function removeImages(){

  var images = [...document.querySelectorAll('.image-list-link')];
  var half_length = Math.ceil(images.length / 2);
  var leftSide = images.splice(0,half_length);
  images.forEach(function(img){
  img.remove(leftSide);
  })

}

removeImages();

//4. Create a function that prompts the user to type "please" after clicking an image in order to see it larger.
//Hint: You will need to use event.preventDefault();
var imageClick = [...document.querySelectorAll("img")]
  imageClick.forEach(function(img){
  img.addEventListener('click', function(event){
  var please = prompt("Please type 'please'");
      if(please === "please"){
        console.log("enjoy that!");
      }
      else{
      event.preventDefault();
      alert('YOU SHALL NOT PASS!');
      }

    })

});

//BONUS: On the Home page, change random image links to point to a YouTube video instead of their intended destination.
// var imageClick = [...document.querySelectorAll("img")]
//   imageClick.forEach(function(img){
//   img.addEventListener('click', function(event){
//     // var randomImg = Math.random();
//     img.setAttribute('src', 'https://www.youtube.com/')
// });
// });

function doTheShuffle(){
  var link = [...document.querySelectorAll(".image-list-link")];
  link.forEach(function(eachItemInLink){
    if(Math.random() > .50){
       eachItemInLink.setAttribute('href',"https://www.youtube.com/");
    }
  });
  return link;
}



