# Onboarding Copilot

This is a web application for an AI agent based user onboarding copilot. The backend is built with Node.js and Express, the database is PostgreSQL, and the frontend is built with Angular.

## Features

*   **Step-by-Step Guidance:** Provides a list of onboarding tasks that users can track.
*   **Knowledge Management:** Centralized, searchable knowledge base for users to find information.
*   **Role-Based Access Control:** Simple role-based access control for admins and users.

## Tech Stack

*   **Backend:** Node.js, Express
*   **Frontend:** Angular
*   **Database:** PostgreSQL
*   **ORM:** Sequelize

## Getting Started

### Prerequisites

*   Node.js and npm
*   Angular CLI
*   PostgreSQL

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shrikarak/onboarding-copilot.git
    cd onboarding-copilot
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory with the following content, replacing the values with your PostgreSQL credentials:
        ```
        DB_HOST=localhost
        DB_USER=postgres
        DB_PASSWORD=password
        DB_NAME=onboarding_copilot_db
        PORT=3000
        ```
    *   Create the database `onboarding_copilot_db` in PostgreSQL.
    *   Synchronize the database and create sample data:
        ```bash
        npm run seed
        ```
    *   Start the backend server:
        ```bash
        npm start
        ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```
    *   Start the frontend development server:
        ```bash
        ng serve
        ```

4.  **Access the application:**
    Open your browser and navigate to `http://localhost:4200`.

## API

The API is protected by role-based access control. You need to include the `x-user-role` header in your requests with the value `admin` or `user`.

### Endpoints

*   `GET /api/onboarding-tasks`: Get all onboarding tasks.
*   `PUT /api/onboarding-tasks/:id`: Update an onboarding task (admin and user).
*   `POST /api/onboarding-tasks`: Create a new onboarding task (admin only).
*   `DELETE /api/onboarding-tasks/:id`: Delete an onboarding task (admin only).
*   `GET /api/kb-articles`: Get all knowledge base articles.
*   `GET /api/kb-articles?search=<term>`: Search for knowledge base articles.
*   `GET /api/kb-articles/:id`: Get a knowledge base article by ID.
*   `POST /api/kb-articles`: Create a new knowledge base article (admin only).
*   `PUT /api/kb-articles/:id`: Update a knowledge base article (admin only).
*   `DELETE /api/kb-articles/:id`: Delete a knowledge base article (admin only).

## Future Work

*   **Do-It-For-Me (DIFM) Functionality:** Implement intelligent workflow automation to perform complex tasks on the user's behalf.
*   **Contextual Intelligence:** Understand user's current context, role, progress, and skill level.
*   **Personalized Learning Paths:** Generate and adapt individual learning journeys.
*   **Natural Language Processing (NLP):** Integrate with a powerful NLP service for conversational interactions.
*   **Interactive Simulations/Roleplay:** Provide a safe, simulated environment for users to practice.
*   **Real-time Feedback Loop:** Provide immediate feedback on user actions and performance.
*   **API Structure and Integration:** Develop custom connectors for third-party systems.
*   **Performance Analytics & Monitoring:** Built-in dashboards and analytics tools to track KPIs.
*   **Human Oversight & Intervention:** Implement an escalation path for complex issues.
*   **Customization:** Customize the AI agent's persona, tone, and behavior.
