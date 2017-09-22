console.log('Defining functions!');

function changeNavColor() {
  // change the navbar to a different color
  var nav = document.querySelector('#topbar');
  nav.style.backgroundColor = 'blue';
};

function takeOver(){
	var newTop = document.createElement('h1');
	var nav = document.querySelector('#topbar');
	newTop.innerHTML = 'This page is now udner the control of FRANCISCO ORDAZ IV.';

	document.body.insertBefore(newTop,nav);
}
//hide and delete functions ran separately
var imgs = [...document.querySelectorAll('.post')]; 

function hide_half(){
	var first_half = imgs.slice(0, imgs.length/2);

	first_half.forEach((el)=>{
		el.style.display = 'none';
	});
}

function delete_half(){
	var second_half = imgs.slice(imgs.length/2, imgs.length);

	second_half.forEach((el)=>{
		el.remove();
	});
}
//hide half and delete second half at the same time

function hideDelete(){
	var imgs = [...document.querySelectorAll('.post')];
	var first_half = imgs.slice(0, imgs.length/2);
	var second_half = imgs.slice(imgs.length/2, imgs.length);

	first_half.forEach((el)=>{
		el.style.display = 'none';
	});


	second_half.forEach((el)=>{
		el.remove();
	});
}
function pls(){
	var imgs =[...document.querySelectorAll('img')];

	imgs.forEach((el)=>{
		el.addEventListener('click', (event)=>{
			var ayy = prompt("Say PLEASE or else.");

			if(ayy === "PLEASE"){
				alert("Grazie :)");
			}else{
				alert("You shall not pass!");
				event.preventDefault();
			}
		})
	})
}

function shuffleTube(){
	var imgs = [...document.querySelectorAll('.image-list-link')];

	imgs.forEach((el)=>{
		if(Math.random() < .50){
			el.setAttribute('href', 'https://www.youtube.com');
		}
	});
}

//clicking on home button since upvotes are blocked by imgur
function homeClick(){
	var icon = document.querySelector('.topbar-icon');
	icon.click();
}

//Scroll to the bottom to load all comments, or you will have to re-run the program as more comments load.
//Can be solved by defining the comments array outside the function(I think).

function hide(n=1){
	n = parseInt(prompt("What limit on votes do you want to view?"));
	var comments = [...document.querySelectorAll('.usertext')];
	comments.forEach((el)=>{
		//property path reads the upvote count, turns it into int and assings it to vote
		var votes = parseInt(el.firstChild.children[2].innerHTML);

		if(votes<n){
			el.style.display = 'none';
		}
	})
}