import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 class="title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="email" id="email" name="email" />
                <label htmlFor="Password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
