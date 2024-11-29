

AI-Powered Task Recommendation System
This project is a full-stack application built with Flask (backend) and React (frontend) to manage tasks and provide AI-based recommendations for task prioritization.

Frontend
Features
1. User Authentication

Register and login functionality with secure password storage.

2. Task Management

CRUD operations for tasks (Create, Read, Update, Delete).
Tasks include attributes like title, description, status, priority, deadline, and estimated completion time.

3. AI-Powered Recommendations

AI suggests task prioritization based on deadlines, complexity, and estimated completion time using a rule-based model.

3. Dashboard

View tasks by status and priority in My Tasks tab.
Visualizations for overdue and upcoming tasks in doughnut chart.

Setup Instructions:
Frontend (React)
1. git clone [<repository-url>](https://github.com/Pranav-Sawant1996/tasks)
2. npm install
3. npm start

Assumptions
1. Authentication:
User credentials are stored securely with hashed passwords using bcrypt.

2. Task Attributes:
Each task includes the following:
Title, Description, Status (Pending, In Progress, Completed), Priority (Extreme, Moderate, Low), Deadline, Estimated Completion Time, complexity.

3. AI Model:

A simple rule-based algorithm prioritizes tasks. Example logic:
Tasks with closer deadlines get higher priority.
High-complexity tasks are prioritized over low-complexity tasks.
Shorter estimated completion time tasks are favored to minimize workload.


AI Research Task Explanation

Hugging face pre-trained api model for sentiment analysis

1. Authorization:
The Authorization header is required to authenticate the API request. It uses the Hugging Face API token (HUGGINGFACE_API_TOKEN) that must be kept secure.
This token allows access to specific models or services offered by Hugging Face.

2. Payload:
The payload is a dictionary containing the text to be analyzed, passed as the "inputs" field. The text will be sent to the model for processing.

3. API Request:

The requests.post method is used to send a POST request to the Hugging Face API. It includes the headers for authorization and payload with the input text.
The URL (HUGGINGFACE_API_URL) is assumed to point to the specific model or service you want to call on the Hugging Face platform (such as sentiment analysis, text classification, etc.).

