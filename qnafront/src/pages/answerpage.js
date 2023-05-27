import React from 'react';
import AnswerForm from '../components/AnswerForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AnswerFormPage = () => {
    const { id } = useParams();
    const handleSubmit = (formData) => {
        const { body } = formData;

        const newAnswer = {
            user_id: null, // Assuming user_id can be null for now
            question_id: id, // Replace with the actual question ID
            content: body, // Assuming the 'body' field represents the answer content
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        axios
            .post('http://127.0.0.1:8000/api/answers', newAnswer)
            .then((response) => {
                console.log('Answer submitted successfully:', response.data);
                // Handle any necessary actions upon successful submission
            })
            .catch((error) => {
                console.error('Error submitting answer:', error);
                // Handle any error scenarios
            });
    };

    return (
        <div>
            <h2>Answer Form</h2>
            <AnswerForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AnswerFormPage;
