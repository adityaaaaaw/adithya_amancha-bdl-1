**Live Deployment:** [https://bdl-1.onrender.com](https://bdl-1.onrender.com)

## Student Details

- **Name:** Aditya Amancha
- **Registration Number:** 252U1R5005
- **Section:** AI/DE-2A
- **Course:** Backend Development Fundamentals
- **Lab:** Lab 1

## Objective

To create a web server using Node.js and Express.js, implement GET routes, handle unknown routes, and verify HTTP status codes.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm
- Git and GitHub
- Render (deployment)

## Project Structure
```
bdf-lab1/
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── 404.png
├── server-http.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

```

## Installation and Execution

### Prerequisites

Install Node.js and npm on your computer.

### 1. Clone the repository

git clone [https://github.com/adityaaaaaw/aditya-amancha.git](https://github.com/adityaaaaaw/aditya-amancha.git) cd bdf-lab1

### 2. Install dependencies

npm install

### 3. Run the Express server

npm start

The server runs locally at `http://localhost:3000`.

## API Endpoints

| **Method** | **Endpoint** | **Description**                   | **Expected Status** |
| ---------- | ------------ | --------------------------------- | ------------------- |
| GET        | `/`          | Returns a welcome message         | 200 OK              |
| GET        | `/about`     | Returns student details in JSON   | 200 OK              |
| GET        | `/time`      | Returns the current date and time | 200 OK              |
| GET        | `/unknown`   | Returns a not-found message       | 404 Not Found       |

### Example Responses

**GET /**
```
Welcome to the BDF Lab Server

```

**GET /about**

{   "name": "Aditya",   "section": "Your Section" }

**GET /time**

{   "currentDateTime": "Current server date and time" }

**GET /unknown**
```
404 - Page Not Found

```

The date and time response is generated dynamically when the endpoint is requested.

## Screenshots

### 1. Home Endpoint

<img width="1848" height="1020" alt="home" src="https://github.com/user-attachments/assets/9d5b9ddd-e75d-4ae2-ba7b-50df0349cd4e" />


### 2. About Endpoint

<img width="1847" height="1016" alt="about" src="https://github.com/user-attachments/assets/7a457e71-16e4-4d8a-a803-8ea7faf92992" />


### 3. Time Endpoint

<img width="1847" height="1013" alt="time" src="https://github.com/user-attachments/assets/48aeca07-e39c-4398-b33d-06a322b655a5" />


### 4. 404 Endpoint

<img width="1847" height="1017" alt="404" src="https://github.com/user-attachments/assets/a7fbae40-3fe3-436e-a623-e08c95fbab2d" />


## Deployment

The Express application is deployed on Render.

**Public URL:** [https://bdl-1.onrender.com](https://bdl-1.onrender.com)

## Notes

- The application uses Express.js to handle HTTP requests.
- Appropriate HTTP status codes are returned for successful and unknown routes.
- The `node_modules` directory is excluded from version control.
- No secrets or environment files are included in the repository.

## Result

A Node.js HTTP server and an Express.js web server were implemented, tested, and deployed successfully.
