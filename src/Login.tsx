import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';

function Login() {
	const signIn = () => {
		// do google login stuffz...
		auth.signInWithPopup(provider).catch( (error) => alert(error.message))
	}

	return (
		<div className="login">
			{/* <img src="https://preview.redd.it/a3orx5djidd41.png?width=1902&format=png&auto=webp&s=12c36e5bea59da8d0a172af28d8b263e001aa6a0" alt="" /> */}
			<div className="login__logo">
				<img src="https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png" alt="" />
			</div>

			<Button onClick={signIn}>Sign in</Button>
		</div>
	);
}

export default Login;