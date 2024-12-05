// src/App.js
import React, { useState, useEffect } from 'react';
import TemplateForm from './components/TempF'; // Correct path
import TemplateList from './components/TempL'; // Correct path




const App = () => {
    const [templates, setTemplates] = useState([]);

    // Load templates from localStorage when the app starts
    useEffect(() => {
        const storedTemplates = JSON.parse(localStorage.getItem('templates')) || [];
        setTemplates(storedTemplates);
    }, []);

    // Save templates to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('templates', JSON.stringify(templates));
    }, [templates]);

    // Add a new template to the list
    const addTemplate = (newTemplate) => {
        setTemplates([...templates, newTemplate]);
    };

    // Delete a template from the list
    const deleteTemplate = (index) => {
        const updatedTemplates = templates.filter((_, i) => i !== index);
        setTemplates(updatedTemplates);
    };

    return (
        <div className="App">
            <h1>Template Manager</h1>
            <TemplateForm onAddTemplate={addTemplate} />
            <TemplateList templates={templates} onDeleteTemplate={deleteTemplate} />
        </div>
    );
};

export default App;

