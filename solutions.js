//HW INSTRUCTS

/*
Tonight's training involves taking over imgur.com with javascript!
You will need to write a function for each of the following requests below.
Once you have successfully tested the function in the browser, copy and save your code
in solutions.js with an appropriate functionName.
*/

console.log('Defining functions!');

//1) Create a function that changes the navbar to a different color.
function changeNavColor() {
  // change the navbar to a different color
  var navbar = document.querySelector('div#topbar');
  navbar.style['background-color'] = 'teal'; // ex 2
  console.log(navbar);
};

changeNavColor();


//2) Add a new <h1> to the top of the page that says.
function addNewH1(){
   var myText = "<h1>This site is now under Jesse Lewis's control!</h1>";
   var Element = document.querySelector('.sentence-sorting');
      Element.innerHTML = myText;
}
addNewH1();


//3) Remove half of the images (from the DOM) and hide half of the remainder (CSS display property).
var IMGURimg = [...document.querySelectorAll('img')];
var IMGURcnt = IMGURimg.length/2;

    IMGURimg.forEach(function(IMGimg, index, array) {

         if(index<IMGURcnt){

        //set display attribute for each item to none
            IMGimg.setAttribute('display', 'none');
            console.log('less than');

            } else {
         // remove an element from the DOM
         // var thisParent = IMGimg.parentElement.nodeName;
         //thisParent.removeChild(IMGimg);
          console.log('more than');

            }

      })


//4) Create a function that prompts the user to type "please" after clicking an image in order to see it larger.
// Hint: You will need to use event.preventDefault();


/*
BONUS)
  On the Home page, change random image links to point to a YouTube video instead of their intended destination.
  On the Details page, create a function that will randomly click either "upvote" or "downvote".
  On the Details page, hide all comments under the image that are below a given points threshold.
    Example: Hide all comments that are < 2,000 points
*/
