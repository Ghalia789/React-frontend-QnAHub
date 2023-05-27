import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import com from "../assets/com.jpg";

function HomePage({ isAuthenticated }) {
    const buttonLink = isAuthenticated ? "/questions" : "/signup";

    return (
        <div className="container-fluid d-flex flex-column justify-content-between min-vh-100">
            <div className="text-center mt-5">
                <h2 className="mb-3" style={{ color: "#191970" }}>
                    Welcome to the Q & A Hub
                </h2>
                <h5 className="mb-6" style={{ color: "#191970" }}>
                    Explore questions, find answers, and engage with the community.
                </h5>
                <Link to={buttonLink} className="btn btn-lg btn-primary">
                    Get Started
                </Link>
                <div class="image-container">
                    <img src={com} alt="community" class="img-fluid"></img>
                </div>
                <div className="mt-5">
                    <h3>About Technology</h3>
                    <p className="text-center" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                        Our platform is dedicated to providing a space for technology enthusiasts to ask questions, share
                        knowledge, and connect with like-minded individuals. 
                        Whether you're a developer, designer, or simply
                        curious about the latest tech trends, you'll find a vibrant community ready to help you on your
                        journey.
                    </p>
                </div>
                <div className="mt-5 contact-us" style={{ backgroundColor: "#191970", color: "#fff", padding: "20px" }}>
                    <h3>Contact Us</h3>
                    <p>If you have any inquiries or need assistance, please feel free to reach out to us:</p>
                    <ul className="list-unstyled">
                        <li>Email: example@example.com</li>
                        <li>Phone: 123-456-7890</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default HomePage;
