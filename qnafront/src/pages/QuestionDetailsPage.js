import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function QuestionDetailsPage() {
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://127.0.0.1:8000/api/questions/${id}`)
            .then((response) => {
                setQuestion(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching question:', error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/questions/${id}/answers?page=1`)
            .then((response) => {
                setAnswers(response.data['hydra:member']);
            })
            .catch((error) => {
                console.error('Error fetching answers:', error);
            });
    }, [id]);

    /*const handleSubmitAnswer = (formData) => {
        const { content } = formData;

        const newAnswer = {
            user_id: null, // Assuming user_id can be null for now
            question_id: id,
            content,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        };

        axios
            .post('http://127.0.0.1:8000/api/answers', newAnswer)
            .then((response) => {
                setAnswers([...answers, response.data]);
            })
            .catch((error) => {
                console.error('Error submitting answer:', error);
            });
    };*/


    if (loading) {
        return <div className="loading-spinner"></div>; // Render a loading spinner
    }

    if (!question) {
        return <div>Question not found</div>; // Render a message if the question is not available
    }

    return (
        <div className="container-fluid">
            <div className="question-container">
                <h1 className="question-title">{question.title}</h1>
                <p className="question-content">{question.content}</p>
                <h2 className="answers-heading">Answers</h2>
                {answers.map((ans) => (
                    <div key={ans.id} className="answer-item">
                        <p className="answer-content">{ans.content}</p>
                    </div>
                ))}
                <Link to={`/questions/${id}/answer`} className="btn btn-primary">Add Answer</Link>
            </div>
        </div>
    );
}

export default QuestionDetailsPage;
