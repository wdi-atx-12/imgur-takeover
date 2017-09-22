function changeBackground(){
    var navBar = document.querySelector('#topbar');
    var secBar = document.querySelector('#secondary-nav');
    navBar.style.backgroundColor = 'red';
    secBar.style.backgroundColor = 'red';


    console.log('i rule the navBAR')
};
changeBackground();

function changeH1(){
var shout = document.querySelector('#user-gallery-message');
        shout.innerText='This website is now under Miguel\'s control';
};

changeH1();



var imageLink = [...document.querySelectorAll('.image-list-link')];

for (var i=0;i<imageLink.length;i++){
        imageLink[i].addEventListener("click",function(e){
        alert("PLEASE?!?!?!?");
        //prevent event action
        e.preventDefault();
        })

};

//didn't manage to hide the pics but I think I was on the right path
//the problem really came to line45 js wouldn't recognize at first the parent and then I use its ID and it worked, then
// it js decided not to accept the node for removeChild

var parent= document.querySelector('#imageList');
var hidePics = [...document.querySelectorAll('.post')];

function hideSecHalf(hidePics){
    for (var i=30;i<59;i++)
    hidePics.style.display = hide;
}

function hideHalf(hidePics){
    for (var i=0;i<30;i++)
    parent.removeChild(hidePics);

};
        console.log('not anymore');
        hideHalf(hidePics);
        console.log(hidePics.slice(0,30));
