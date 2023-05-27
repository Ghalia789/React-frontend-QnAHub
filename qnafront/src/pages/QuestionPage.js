import React from 'react';
//import { Link } from 'react-router-dom';
import AskQuestionForm from '../components/AskQuestionForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuestionPage = () => {
    const handleAddAnswer = () => {
        window.location.href = '/answer';    
    };

    const handleAddComment = () => {
        // Perform any necessary actions
    };

    return (
        <div>
            <AskQuestionForm onAddAnswerClick={handleAddAnswer}
                onAddCommentClick={handleAddComment}/>
        </div>
    );
};

export default QuestionPage;
