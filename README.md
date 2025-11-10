# Recipe Generator API

This is a Node.js API that generates a random recipe based on user-provided ingredients.

## Features

*   Generates a random recipe based on user-provided ingredients.
*   Uses a simple database (in-memory) to store recipes (can be easily replaced with a real database).

## Technologies Used

*   Node.js
*   Express.js
*   JSON Web Tokens (JWT) for authentication (optional)
*   nodemon for development

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Navigate to the project directory:

    
    cd recipe-generator
    

3.  Install dependencies:

    
    npm install
    

## Configuration

*   **JWT Secret (optional):** Set the `JWT_SECRET` environment variable for authentication.  If not set, authentication routes are disabled.

## Running the Application


npm run dev


This will start the server on port 3000 (default).  You can change the port in `server.js`.

## API Endpoints

*   `POST /api/recipes/generate`: Generates a recipe based on ingredients provided in the request body. Requires authentication if JWT_SECRET is set.
*   `POST /api/auth/register`: Registers a new user. (Only available if JWT_SECRET is set)
*   `POST /api/auth/login`: Logs in an existing user. (Only available if JWT_SECRET is set)

## Example Usage

### Generate Recipe


curl -X POST -H "Content-Type: application/json" -d '{"ingredients": ["chicken", "rice", "soy sauce"]}' http://localhost:3000/api/recipes/generate


(If authentication is enabled, include the JWT token in the `Authorization` header: `Authorization: Bearer <token>`)

## Project Structure


recipe-generator/
├── server.js
├── routes/
│   ├── recipeRoutes.js
│   └── authRoutes.js
├── controllers/
│   ├── recipeController.js
│   └── authController.js
├── models/
│   └── recipe.js
├── middlewares/
│   └── authMiddleware.js
├── utils/
│   └── jwtUtils.js
├── package.json
├── README.md
└── .gitignore
