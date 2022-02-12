var provider = new firebase.auth.GoogleAuthProvider();
let user = null

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const signInUserWithGoogle = () => {
	auth.signInWithPopup(provider).then(res => {
		console.log(res)
		// var token = res.credential.accessToken;
		// console.log(token)
		user = res.user
	}).catch(err => {
		errorHandler(err)
	})
}