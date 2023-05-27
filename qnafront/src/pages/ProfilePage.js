import React from "react";
import ProfileComp from "../components/ProfileComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfilePage() {
    return (
        <div className="container">
            <h1>Welcome to the Profile Page</h1>
            <ProfileComp/>
        </div>
    );
}

export default ProfilePage;
