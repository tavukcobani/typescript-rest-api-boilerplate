# TypeScript REST API Boilerplate

Welcome to the TypeScript REST API Boilerplate repository! This boilerplate provides a solid foundation for building well-architected RESTful API services with TypeScript, Express, and TypeORM. It includes essential features such as request validation, swagger documentation, and unit testing.

## Features

- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Express**: Minimal and flexible Node.js web application framework.
- **TypeORM**: ORM for TypeScript and JavaScript (ES7, ES6).
- **Swagger Documentation**: Auto-generated API documentation.
- **Jest**: Delightful JavaScript testing framework with a focus on simplicity.
- **Nodemon**: Automatically restarts the application when files change.
- **Prettier**: Code formatter to ensure consistent code style.
- **Azure AD JWT Lite**: JWT authentication middleware for Azure AD.

## Prerequisites

Ensure you have the following installed:

- Node.js (v20 or later)
- npm (v10 or later)

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tavukcobani/typescript-rest-api-boilerplate.git
    cd <your-repo-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Build the application:
    ```bash
    npm run build
    ```

2. Start the server:
    ```bash
    npm run serve
    ```

3. Access the API documentation:
    Open your browser and navigate to [http://localhost:4334/docs](http://localhost:4334/docs)

### Available Scripts

- **serve**: Builds the application and starts the server from the `.build` folder.
- **start**: Starts the application from the `.build` folder.
- **build**: Compiles the TypeScript files and generates the output in the `.build` folder.
- **test:unit**: Runs unit tests using Jest.

### Development

During development, you can use `nodemon` to automatically restart the server when changes are detected:
```bash
npm run dev
