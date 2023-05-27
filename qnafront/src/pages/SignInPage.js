import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignInForm from '../components/SignInForm';

function SignInPage() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <SignInForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;
