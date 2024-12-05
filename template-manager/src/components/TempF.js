// src/components/TemplateForm.js
import React, { useState } from 'react';

const TemplateForm = ({ onAddTemplate }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("Both title and content are required.");
            return;
        }

        const newTemplate = { title, content };
        onAddTemplate(newTemplate);

        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Template Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Template Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Save Template</button>
        </form>
    );
};

export default TemplateForm;
