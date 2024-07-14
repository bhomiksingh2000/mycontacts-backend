
# Contact Manager Backend Application

## Overview

The Contact Manager Backend Application is designed to manage contacts, providing functionalities to create, retrieve, update, and delete contacts. The application supports user authentication and user-specific contact management using JWT for secure access.

## Features

- **User Authentication**: Register and login users with password hashing.
- **JWT Authentication**: Protect routes and manage user sessions with JSON Web Tokens.
- **CRUD Operations for Contacts**: Create, retrieve, update, and delete contacts.
- **User-Specific Contact Management**: Ensure users can only access and manage their own contacts.

## Endpoints

### User Endpoints
- **POST /api/users/register**: Register a new user.
  - **Status**: 201 Created
  - **Request Body**: User registration details

- **POST /api/users/login**: User login.
  - **Status**: 200 OK / 401 Unauthorized
  - **Request Body**: User login details
  - **Response**: JWT token

- **GET /api/users/current**: Get current logged-in user details.
  - **Status**: 200 OK
  - **Response**: User details

### Contact Endpoints
- **GET /api/contacts**: Get all contacts for the logged-in user.
  - **Status**: 200 OK
  - **Response**: List of contacts

- **POST /api/contacts**: Create a new contact.
  - **Status**: 201 Created
  - **Request Body**: Contact details

- **GET /api/contacts/:id**: Get a contact by ID.
  - **Status**: 200 OK / 404 Not Found
  - **Response**: Contact details

- **PUT /api/contacts/:id**: Update a contact by ID.
  - **Status**: 200 OK / 404 Not Found
  - **Request Body**: Updated contact details

- **DELETE /api/contacts/:id**: Delete a contact by ID.
  - **Status**: 200 OK / 404 Not Found

## Design Principles

This project follows best practices in Express and Node.js development, ensuring modularity, reusability, and maintainability. The use of middlewares, controllers, and routers enhances the application's structure and readability. The implementation of JWT for authentication ensures secure access to protected routes.

## How to Run

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/bhomiksingh2000/ContactManager.git
   cd contact-manager
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following content:
   ```env
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

4. **Run the Application**:
   ```sh
   npm start
   ```

5. **Test the Endpoints**:
   Use tools like `curl`, `Postman`, or any other API testing tool to interact with the endpoints.

## Project Structure

- **`src`**: Contains the source code.
  - **controllers**: Handles HTTP requests and business logic for both contacts and users.
  - **models**: Contains Mongoose schemas for contacts and users.
  - **routes**: Defines API endpoints and links them to controllers.
  - **middleware**: Custom middlewares for error handling, JWT verification, etc.
  - **config**: Configuration files for database connection, etc.

## Future Improvements

- Add persistent storage for session management.
- Implement more comprehensive validation and sanitization.
- Enhance logging and monitoring.
- Add more comprehensive error handling.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
