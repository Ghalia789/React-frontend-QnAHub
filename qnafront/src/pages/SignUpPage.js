import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

function SignUpPage() {
    return (
        <div className="container" style={{ marginTop: "50px" }}>
            <SignUpForm />
            <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/signin">Sign in here</Link>
            </p>
        </div>
    );
}

export default SignUpPage;
