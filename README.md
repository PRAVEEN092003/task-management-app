# Task Management Application

A Full Stack Task Management Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This application allows users to register, log in, create, update, delete, and manage tasks efficiently with secure authentication.

---

## Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcryptjs
- Create New Task
- View All Tasks
- Update Existing Tasks
- Delete Tasks
- MongoDB Database Integration
- REST API
- Responsive User Interface
- Full Stack MERN Architecture

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- CORS

---

## Folder Structure

```
task-management-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/PRAVEEN092003/task-management-app.git
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/tasks/add` | Create Task |
| GET | `/api/tasks` | Get All Tasks |
| PUT | `/api/tasks/:id` | Update Task |
| DELETE | `/api/tasks/:id` | Delete Task |

---

## Screenshots

You can add project screenshots here.

Example:

```
images/
├── login.png
├── register.png
├── dashboard.png
```

---

## Future Improvements

- Protected Routes using JWT Middleware
- User-specific Tasks
- Logout Functionality
- Task Status Filters
- Search Tasks
- Due Dates
- Real-time Updates using WebSockets
- Dark Mode
- Deploy using Vercel and Render

---

## Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- REST API Development
- CRUD Operations
- MongoDB Database Integration
- Authentication using JWT
- Password Hashing
- React Hooks
- React Router
- Axios API Integration
- Full Stack Application Development

---

## Author

**Praveen**

GitHub:
https://github.com/PRAVEEN092003

---

## License

This project is developed for learning and internship purposes.
