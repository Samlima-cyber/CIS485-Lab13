# CIS 485 – Lab 13: Advanced Routing with Express

## Overview

This lab demonstrates advanced routing techniques in Express.js, including:

- Dynamic route parameters
- Subroutes
- Regular expression handling
- Wildcard fallback routes
- Static file serving
- Basic JSON data handling

## File Structure

Lab13/
├── app.js
├── data.json
├── images/
│ └── image1.jpg
├── routes/
│ └── dataRoutes.js
├── package.json
└── README.md

sql
Copy
Edit

## Routes

| Route | Description |
|-------|-------------|
| `GET /data` | Returns all items from `data.json` |
| `GET /data/:id` | Returns a specific item by ID |
| `GET /data/:id/details` | Returns the details of an item |
| `GET /data/regex/:id` | Validates alphanumeric IDs |
| `GET /images/image1.jpg` | Serves a static image |
| `GET /data/*` | Wildcard route for unmatched paths |

## Installation & Usage

1. Install dependencies:
   ```bash
   npm install express@4.18.2
Start the server:

bash
Copy
Edit
node app.js
Access the routes at:

bash
Copy
Edit
http://localhost:3000/data
http://localhost:3000/images/image1.jpg
Testing
You can use curl.exe or Postman to test all routes. Example:

bash
Copy
Edit
curl.exe http://localhost:3000/data/regex/abc123
# CIS 485 – Lab 13: Advanced Routing with Express

## Overview

This lab demonstrates advanced routing techniques in Express.js, including:

- Dynamic route parameters
- Subroutes
- Regular expression handling
- Wildcard fallback routes
- Static file serving
- Basic JSON data handling

## File Structure

Lab13/
├── app.js
├── data.json
├── images/
│ └── image1.jpg
├── routes/
│ └── dataRoutes.js
├── package.json
└── README.md

sql
Copy
Edit

## Routes

| Route | Description |
|-------|-------------|
| `GET /data` | Returns all items from `data.json` |
| `GET /data/:id` | Returns a specific item by ID |
| `GET /data/:id/details` | Returns the details of an item |
| `GET /data/regex/:id` | Validates alphanumeric IDs |
| `GET /images/image1.jpg` | Serves a static image |
| `GET /data/*` | Wildcard route for unmatched paths |

## Installation & Usage

1. Install dependencies:
   ```bash
   npm install express@4.18.2
Start the server:

bash
Copy
Edit
node app.js
Access the routes at:

bash
Copy
Edit
http://localhost:3000/data
http://localhost:3000/images/image1.jpg
Testing
You can use curl.exe or Postman to test all routes. Example:

bash
Copy
Edit
curl.exe http://localhost:3000/data/regex/abc123
