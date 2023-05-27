import React from 'react';
import { Link } from 'react-router-dom';

function QuestionList({ questions }) {
    return (
        <div>
            <h4 className="mb-4">Question List</h4>
            {questions.map((question) => (
                <Link to={`/questions/${question.id}`} key={question.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card bg-white shadow-sm rounded p-3 mb-3">
                        <h6 className="card-title">{question.title}</h6>
                        <p className="card-text text-secondary">{question.content}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default QuestionList;
