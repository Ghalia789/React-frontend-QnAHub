import React from "react";

function UserCard({ user }) {
    return (
        <div className="card mx-auto" style={{ maxWidth: "300px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
            <img src={user.avatar} alt={user.name} className="card-img-top" style={{ width: "80px", height: "80px", margin: "0 auto" }} />
            <div className="card-body">
                <h6 className="card-title">{user.name}</h6>
                <p className="card-text">{user.email}</p>
                {/* Add more user information if needed */}
            </div>
        </div>
    );
}

export default UserCard;
