const sideMenu = document.querySelector("#nav-menu");
const menuBtn = document.getElementById("menu");
const closeBtn = document.querySelector("#close");

menuBtn.addEventListener('click', () => {
	sideMenu.style.display = "block";
	menuBtn.style.display = "none";
	closeBtn.style.display="block";
})

closeBtn.addEventListener('click', () =>{
	sideMenu.style.display = "none";
	menuBtn.style.display = "block";
	closeBtn.style.display="none";
});
	