import React, { useState } from "react";
import user_profile from "../assets/user_profile.png";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <div className="container">
            <h4 className="text-center mb4">Sign In</h4>
            <form>
                <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <img
                            src={user_profile}
                            alt="Profile"
                            style={{ width: "200px", height: "200px", objectFit: "cover" }}
                        />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="text-center">
                <button className="btn btn-primary" onClick={handleSignIn}>
                    Sign In
                </button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
