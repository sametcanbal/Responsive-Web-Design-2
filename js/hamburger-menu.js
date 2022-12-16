// JavaScript Document
const menuOpenButton = document.querySelector(".open-popup-window");
const menuCloseButton = document.querySelector(".close-popup-window");

menuOpenButton.addEventListener("click", () => {
	const popupWindow = document.querySelector(".popup-window");
	popupWindow.classList.add("popup-window-active");
});
menuCloseButton.addEventListener("click", () => {
	const popupWindow = document.querySelector(".popup-window");
	popupWindow.classList.remove("popup-window-active");
});