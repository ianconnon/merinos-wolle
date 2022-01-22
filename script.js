
const slider = document.querySelector('.container-image-slide');
const slideChild = document.querySelectorAll('.slide-child-mw');

let x =  1;
let width = slideChild[0].clientWidth;
let interval = 20000;

window.addEventListener('resize', ()=>{
	let width = slideChild[0].clientWidth;
})

setInterval( function(){
	slide();
},interval);

const slide = ()=>{
	slider.style.cssText = `transform: translate(${-width*x}px); transition: transform 1.5s;`;
	x++;

	if(x === slideChild.length){
		setTimeout( function(){
			slider.style.cssText = `transform: translate(0); transition: transform 0;`;
			x=1;
		},1500);
	}
}