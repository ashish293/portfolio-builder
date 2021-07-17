let nav = document.getElementById("navbar");

window.onscroll = function () {
	nav.classList.add("sticky");

	if (document.documentElement.scrollTop > 20) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};

// Progress bar
const progress = document.querySelectorAll(".progress-done");
progress.forEach((element) => {
	element.style.width = element.getAttribute("value") + "%";
});
