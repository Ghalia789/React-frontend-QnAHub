import React, { useState } from "react";

function SignUpForm({ onClose }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the user data
        const userData = {
            username: username,
            email: email,
            password: password
        };

        try {
            // Send the user data to the backend API
            const response = await fetch("http://127.0.0.1:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                // User successfully created
                console.log("User created successfully");
                
                // Clear the form inputs
                setUsername("");
                setEmail("");
                setPassword("");
                
                // Redirect to the sign-in page
                window.location.href = "/signin";
            } else {
                // Error handling if the request fails
                console.error("Error creating the user");
            }
        } catch (error) {
            // Error handling for network or other errors
            console.error("Error:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 2px 5px 1px rgba(0, 0, 0, 0.2)",
                maxWidth: "400px",
                margin: "0 auto"
            }}
        >
            <h4 className="mb-4">Sign Up</h4>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
                Submit
            </button>
        </form>
    );
}

export default SignUpForm;
