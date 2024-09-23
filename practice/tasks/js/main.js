let pageUrl = window.location.href;
if(pageUrl.includes("index.html")){
	let getIsLogin = localStorage.getItem("isLogin");
	if(!getIsLogin){
		window.location.replace("login.html");
	}
}


//login function
function  logIn(event) {
	event.preventDefault();
	localStorage.setItem("isLogin", true);
	window.location.replace("index.html");
}

//logout function
function  logOut(event) {
	event.preventDefault();
	localStorage.removeItem("isLogin");
	window.location.replace("login.html");
}