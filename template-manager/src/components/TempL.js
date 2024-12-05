// src/components/TemplateList.js
import React from 'react';

const TemplateList = ({ templates, onDeleteTemplate }) => {
    return (
        <div>
            <h2>Saved Templates</h2>
            {templates.length === 0 ? (
                <p>No templates available. Create one!</p>
            ) : (
                templates.map((template, index) => (
                    <div key={index}>
                        <h3>{template.title}</h3>
                        <p>{template.content}</p>
                        <button onClick={() => onDeleteTemplate(index)}>Delete</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default TemplateList;
