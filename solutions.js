console.log('Defining functions!');

function changeNavColor() {
  topbar.style['background-color'] = 'purple';

};
backgroundNav();

var heading = document.querySelector('h1');
  heading.style.fontSize = '25px';
  heading.style['padding'] = '20px 0';
  heading.prepend('This page is now under Nat\'s control!');

  function removeImages() {
    //links is an array of the child elements from links of the class cards
    var links = [...document.querySelectorAll('.cards .image-list-link')];
    //posts is an array of the child elements from posts of the class cards
    var posts = [...document.querySelectorAll('.cards .post')];
    //this checks the links array length, and the divides it by 2 to split the images in half.
    var linkLength = links.length / 2;

    //this iterates through each link to an image
    for(var a = 0; a < linkLength.length; a++) {
      //this tells the DOM to remove the child[links] from the parent[cards] at the index[a]
       links[a].parentNode.removeChild(links[a]);
       //this says that at index[a], set display to be hidden.
       posts[a].style.display = 'none';
    }
  }

  //Create a function that prompts the user to type "please" after clicking an image in order to see it larger.
  //I'm going to create a variable to store the querySelector ELEMENT

  function sayPlease() {
    var image = [...document.querySelectorAll('.image-list-link img')];
    //I want image to be an array because for each element in the image collection, I want something to happen when its clicked
      image.forEach(function(element) {
        //I want to start by creating a prompt to tell the user to type please.
        var prompt = prompt(`I'm desperate for more destruction, so type please.`);
        //for each element I'm iterating through, listen for a click
          element.addEventListener(`click`, function(e){
            //when the element is clicked, I want to increase the size of the image.
            e.preventDefault();
            e.style.height = '250px';
            e.style.width = '300px';
          })
    //Now, I want to use the hint that was given and prevent the default action from the original js from happening.
    //I know I want something to happen when a person clicks an image.
    });
  }

sayPlease();

//On the Home page, change random image links to point to a
//YouTube video instead of their intended destination.

function changeToVideo() {
  //What I can conclude from directions:
  //Use Math.random to randomize array of links
  //iterate through with for each
  //if (condition) use setAttribute to replace href links
  var linkArr = [...document.querySelectorAll('.image-list-link img')];

    linkArr.forEach(function(image) {
      var random = Math.random() * 2;
        if(random <= 1) {
          image.setAttribute('href', 'https://www.youtube.com/watch?v=U4IkL2yP0ss');
        } else {
           console.log('This image is not a video.');
        }
    });
}

changeToVideo();

function randomVote() {
  //Find class for votes and use queryselector
  var votes = [...document.querySelectorAll('.arrows .pointer')];
  //for each vote, go through and randomize the results
    votes.forEach(function(vote) {
      var random = Math.random() * 2;
      var totalLikes = document.querySelector('data-up');
      var totalDislikes = document.querySelector('data-down');
        if(random >= 1) {
          totalLikes++;
          console.log('Received upvote');
          return totalLikes;
        } else {
           totalDislikes++;
           console.log('Received downvote');
           return totalDislikes;
        }
    })
}

randomVote();

function displayBasedOnPoints() {
  //query select the point class to get integer of points
  var points = [...document.querySelectorAll('.point-info-points .point')];
    //iterate through each image and check for point amount
    points.forEach(function(imagePoints) {
      //check whether or not points are over 2000
      if(imagePoints < 2000) {
        imagePoints.style.display = 'none';
        console.log('These images are under 2000 points');
      }
    })
}

displayBasedOnPoints();
