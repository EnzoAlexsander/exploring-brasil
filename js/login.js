const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event){
	event.preventDefault();
	let users = Array(
		{
			usuario: username.value,
			mail: email.value,
			senha: password.value
		}
	);
	localStorage.setItem('user',JSON.stringify(users));
	location.href='index.html';
});	