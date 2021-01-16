var pics = [
	"imgs/teddy0.jpg",
	"imgs/teddy1.png", 
	"imgs/teddy2.png",
	"imgs/teddy3.png",
	"imgs/teddy4.png",
	"imgs/teddy5.png"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});
