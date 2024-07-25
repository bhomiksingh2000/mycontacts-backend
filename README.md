
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
 
## Screenshots of API

<img width="1440" alt="Screenshot 2024-07-14 at 6 11 04 PM" src="https://github.com/user-attachments/assets/5525e838-972f-42cf-afae-10ff421ec15e">
<img width="1440" alt="Screenshot 2024-07-14 at 6 15 21 PM" src="https://github.com/user-attachments/assets/59c1112e-6a3a-48cb-8331-a916993d485c">
<img width="1440" alt="Screenshot 2024-07-14 at 6 16 08 PM" src="https://github.com/user-attachments/assets/4100dfe7-a4d4-4ef7-b805-9172ec6bb7f4">
<img width="1440" alt="Screenshot 2024-07-14 at 6 21 26 PM" src="https://github.com/user-attachments/assets/59f29c1b-cd98-4e8e-9251-6ecc7efee6bf">
<img width="1440" alt="Screenshot 2024-07-14 at 6 24 48 PM" src="https://github.com/user-attachments/assets/04bef45e-3173-44cc-bf1b-1cefb0066cca">
<img width="1440" alt="Screenshot 2024-07-14 at 6 52 42 PM" src="https://github.com/user-attachments/assets/9ff2ad4a-fd43-49c9-9c57-8641589fbd44">
<img width="1440" alt="Screenshot 2024-07-14 at 6 56 50 PM" src="https://github.com/user-attachments/assets/525c56d3-14c2-41d9-9bf4-c0bdd2dc54f7">
<img width="1440" alt="Screenshot 2024-07-14 at 6 57 29 PM" src="https://github.com/user-attachments/assets/f5d09123-110e-4c70-98b7-6847b9e83d01">


## Design Principles

This project follows best practices in Express and Node.js development, ensuring modularity, reusability, and maintainability. The use of middlewares, controllers, and routers enhances the application's structure and readability. The implementation of JWT for authentication ensures secure access to protected routes.

## How to Run

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/bhomiksingh2000/mycontacts-backend.git
   cd mycontacts-backend
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory with the following content:
   ```env
   CONNECTION_STRING=<your_mongodb_connection_string>
   ACCESS_TOKEN_SECRET=<your_jwt_secret>
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
  - ![WhatsApp Image 2024-07-16 at 2 32 24 PM](https://github.com/user-attachments/assets/69955ecd-439b-4c4f-8935-a8c62da11aa1)


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
