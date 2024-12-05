This is a React application that allows clinicians to create, view, and manage templates. Templates are saved locally in the browser using localStorage. Follow the steps below to run the application on your local machine.

**Requirements**

Before running the application, ensure you have the following installed:

Node.js (version 14 or above): Download and install from Node.js Official Website.
npm (comes with Node.js): Ensure npm is installed alongside Node.js.
Steps to Run Locally

**1. Clone the Repository**
Download the code to your local machine using Git:

git clone https://github.com/Deepali-cyber-hue/clinician-templates.git
Navigate into the project directory:

cd clinician-templates
**2. Install Dependencies**
Install all required dependencies using npm:

npm install
This command reads the package.json file and installs all necessary libraries and packages.

**3. Start the Development Server**
Run the following command to start the development server:

npm start
The app will automatically open in your default web browser.
If it doesn't, open your browser and visit:
http://localhost:3000
Application Workflow

**Add a Template:**
Enter a title and content in the provided input fields.
Click the Save Template button to save the template.
View Saved Templates:
Saved templates will appear in a list below the form.
Templates are retrieved from the browser's localStorage.
Delete Templates:
Click the Delete button next to a template to remove it.
Folder Structure

**Here’s how the project is organized:**

clinician-templates/
├── public/
│   └── index.html       # The main HTML file
├── src/
│   ├── components/      # React components
│   │   ├── TemplateForm.js  # Form for creating templates
│   │   └── TemplateList.js  # List of saved templates
│   ├── App.js           # Main component of the app
│   ├── App.css          # CSS for the app
│   └── index.js         # Entry point of the app
├── package.json         # Project metadata and dependencies
├── .gitignore           # Files and folders to ignore in Git
└── README.md            # Documentation for the project
Troubleshooting

Port in Use Error: If you see an error like Port 3000 is already in use, you can start the app on a different port by running:
PORT=3001 npm start

Dependency Errors: If there are issues with dependencies, delete node_modules and package-lock.json:
rm -rf node_modules package-lock.json

npm install

Closing the Application

To stop the development server, press:

Ctrl + C
in your terminal.
