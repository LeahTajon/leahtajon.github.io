const menuButton = document.querySelector('#menu-icon');
const menuItems = document.querySelectorAll('.menu-item');

menuButton.addEventListener("click", () => {
	menuItems.forEach((item) => item.classList.toggle("open"));
	menuButton.classList.toggle("close");
});