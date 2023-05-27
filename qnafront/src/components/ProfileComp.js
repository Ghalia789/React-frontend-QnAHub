import React from "react";
import user_default from "../assets/user_default.png";

const ProfileComp = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Profile</h4>
                    <img src={user_default} alt="profile_picture" className="rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                    <div className="text-center">
                        <h5>John Doe</h5>
                        <p>Email: johndoe@example.com</p>
                        <p>Phone: (555) 555-5555</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComp;
