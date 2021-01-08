const humMenu = document.querySelector('.ham');
const menuList = document.querySelector('.menu-main');
const subMenu = document.querySelector('.sub-menu__list');
const arrow = document.querySelectorAll('.arrow');
const parallax = document.querySelectorAll('.parallax');


new simpleParallax(parallax, {
	scale: 1.2,
});

function myFunction(y,x) {
	const contents = document.querySelectorAll('.content');
	const buttons = document.querySelectorAll('.buttons');
	for(i=0;i<contents.length;i++) {
		contents[i].style.display = "none";
	}
	for(i=0;i<buttons.length;i++) {
		buttons[i].className = buttons[i].className.replace(" active__filter", "");
	}
	document.getElementById(x).style.display = "block";
	buttons[y].className += " active__filter";
}

humMenu.addEventListener("click", function(){
  menuList.classList.toggle('active');
});

function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
	  window.scrollBy(0,((top+100)/-10));
	  t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
	}
jQuery(function(f){
    var element = f('#back-top');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 200 ? 'In': 'Out')](10);
    });
});
