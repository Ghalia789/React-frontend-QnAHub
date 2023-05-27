import React, { useState } from "react";
import { Link } from "react-router-dom";


const AskQuestionForm = ({ onClose, onAddAnswerClick, onAddCommentClick }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the question data
        const questionData = {
            title: title,
            content: description,
            user: null,
            answers: [],
            comments: [],
        };

        try {
            // Send the question data to the backend API
            const response = await fetch("http://127.0.0.1:8000/api/questions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(questionData),
            });

            if (response.ok) {
                // Question successfully submitted
                console.log("Question submitted successfully");

                // Clear the form inputs
                setTitle("");
                setDescription("");

                // Close the form (if needed)
                onClose();
            } else {
                // Error handling if the request fails
                console.error("Error submitting the question");
            }
        } catch (error) {
            // Error handling for network or other errors
            console.error("Error:", error);
        }
    };


    const handleAddAnswer = () => {
        onAddAnswerClick(); // Call the onAddAnswerClick prop
    };

    const handleAddComment = () => {
        onAddCommentClick(); // Call the onAddCommentClick prop
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Ask a Question</h4>
            <div>
                <Link to="/add-answer">
                    <button onClick={handleAddAnswer}>Add Answer</button>
                </Link>
                <Link to="/add-comment">
                    <button onClick={handleAddComment}>Add Comment</button>
                </Link>
            </div>
            <div className="mb-3">
                <input
                    className="form-control"
                    id="question-title-input"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="question-description-input"
                    placeholder="Description"
                    rows={6}
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default AskQuestionForm;
