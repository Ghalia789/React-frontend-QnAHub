import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnswerForm = ({ onSubmit }) => {
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ body });
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Answer:</label>
                <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default AnswerForm;
