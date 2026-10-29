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

[image](https://private-user-images.githubusercontent.com/234338851/688632530-41a1fa08-bd89-4fe4-9b3b-297ccca1775b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTMyNjY2NjQsIm5iZiI6MTc5MzI2NjM2NCwicGF0aCI6Ii8yMzQzMzg4NTEvNjg4NjMyNTMwLTQxYTFmYTA4LWJkODktNGZlNC05YjNiLTI5N2NjY2ExNzc1Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAyOVQwOTMyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYjg3NDkxMjUxZTY5MzY5M2JhYmYwMzQ1NGI1OWM5MDg5NDIzNmRiMzU0YWIzYjc3Y2FkYzg3MzdkNTA5ZGY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Ak7KpbksrvE9WWsweTnlVZvw60qjg8KPTnCcr_GxVAs)

### 2. About Endpoint

[image](https://private-user-images.githubusercontent.com/234338851/688642010-5ff35ff9-42f3-4324-a511-b2694f10e397.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTMyNjY2NjQsIm5iZiI6MTc5MzI2NjM2NCwicGF0aCI6Ii8yMzQzMzg4NTEvNjg4NjQyMDEwLTVmZjM1ZmY5LTQyZjMtNDMyNC1hNTExLWIyNjk0ZjEwZTM5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAyOVQwOTMyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NmY4MDY0NTIwOGY3ZmVjMzJhZDg1MWM2MTljZDI3ODZjNmRlNTYzMzdiYTE2NmQ5NTJjZDZlNDMxYTMyYWE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.WVz-1Tk7bQvR2IcXnab3MMbNq7hBWpfWJlHZ699AOj8)

### 3. Time Endpoint

[image](https://private-user-images.githubusercontent.com/234338851/688642615-f11a8f8d-67b6-46f2-ace1-33989a4877bb.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTMyNjY2NjQsIm5iZiI6MTc5MzI2NjM2NCwicGF0aCI6Ii8yMzQzMzg4NTEvNjg4NjQyNjE1LWYxMWE4ZjhkLTY3YjYtNDZmMi1hY2UxLTMzOTg5YTQ4NzdiYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAyOVQwOTMyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMGM2MTU4MmFhNGI3Yjg5MmI2YmEyZjU1MDY0ODhjNDc2NWJiYzVmNGM5MzZmNzUyYzU3MTUwYTZjMzFiMWI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.yBFLMuS8txnlUA3sEvzTjl2_I6Ys-43ozmoMtF6J5Oo)

### 4. 404 Endpoint

[image](https://private-user-images.githubusercontent.com/234338851/688643239-2fd032e9-698a-4955-8fb8-20b1cf2e1f16.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTMyNjY2NjQsIm5iZiI6MTc5MzI2NjM2NCwicGF0aCI6Ii8yMzQzMzg4NTEvNjg4NjQzMjM5LTJmZDAzMmU5LTY5OGEtNDk1NS04ZmI4LTIwYjFjZjJlMWYxNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAyOVQwOTMyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iMDhjZmI5N2E1NzY1YmI1MGJlNzU3MTNlMTExZDA2ODEyMjI1NGRhZGQ3YzVjYzljODcyMzhlMDM3MjBiY2RjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.a9pQ_1cf1KstJNS_SjH5SQhJsCpoTJ7-8Nu6IeZ5Eqw)

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
