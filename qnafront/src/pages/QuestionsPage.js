import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from '../components/QuestionList';

function QuestionsPage() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/questions?page=1');
                const jsonData = await response.json();
                setQuestions(jsonData['hydra:member']);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="container">
                <h1>Questions Page</h1>
                {questions.length > 0 ? (
                    <QuestionList questions={questions} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default QuestionsPage;
