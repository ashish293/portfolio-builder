setTimeout(() => {
	let myname = prompt("Enter Your name");
	let profession = prompt("Enter Your Profession");
	const nameplace = document.getElementById("nameplace");
	nameplace.innerHTML = `I'm ${myname}`;
	document.getElementById("profession").innerHTML = profession;
}, 3000);
