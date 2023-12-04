import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ username, email, password}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setUsername("");
            setPassword("");
		}
	}

    return (
        <>
            <div class="container">
                <div class="screen">
                    <div class="screen__content">
                        <form class="login">
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" class="login__input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="email" class="login__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" class="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            
                            <button class="button login__submit" type="submit" onClick={handleOnSubmit}>
                            <Link to="/Authenticated">
                                <span class="button__text">Signup Now</span>
                                <i class="button__icon fas fa-chevron-right"></i>
                            </Link>
                            </button>
                            
                        </form>
                    </div>
                    <div class="screen__background">
                        <span class="screen__background__shape screen__background__shape4"></span>
                        <span class="screen__background__shape screen__background__shape3"></span>
                        <span class="screen__background__shape screen__background__shape2"></span>
                        <span class="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;