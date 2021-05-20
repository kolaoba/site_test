
async function postData() {
	var full_name = document.querySelector("#full_name").value
	var email = document.querySelector("#email").value
	var message = document.querySelector("#message").value

	await fetch('https://safe-bastion-73856.herokuapp.com/contact', {
		method: 'POST',
		mode: 'cors',
		headers: {
		'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify({
			full_name,
			email,
			message
		})
	}).then((res) => res.json())
	.then((res) => { 
		if(res.toLowerCase() === 'success') {
			handleNotification()
		}
		console.log('Success', res)})
	.catch((err) => console.log('Error', err))
}

function handleNotification () {
	document.getElementById('alert').style.display = 'block'
	setTimeout( function() { 
		document.getElementById('alert').style.display = 'none' 
	}, 3000);
}
  