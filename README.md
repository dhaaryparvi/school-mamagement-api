# 🏫 School Management API

A simple Node.js + Express.js REST API with MySQL backend that allows users to:
- ✅ Add schools with location details
- 📍 Retrieve a list of schools sorted by proximity to a given location

---

## 🚀 Features

- Add a new school with name, address, latitude, and longitude
- Fetch and sort schools based on user’s current geolocation (Haversine distance)
- MySQL backend using connection pooling
- Postman collection for easy testing
- Ready for deployment on Render or any Node.js-friendly cloud

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MySQL
- dotenv
- Postman (for testing)

---

## 🗂️ Endpoints

### ➕ Add School
- `POST /addSchool`
- **Payload:**
```json
{
  "name": "Greenfield School",
  "address": "123 Main St",
  "latitude": 22.5726,
  "longitude": 88.3639
}
```
## Local Setup

---


-bash
-Copy
-Edit
-git clone https://github.com/your-username/school-management-api.git
-cd school-management-api
-npm install
-Create a .env file


---



-ini
-Copy
-Edit
-DB_HOST=localhost
-DB_USER=root
-DB_PASSWORD=yourpassword
-DB_NAME=schoolDB
-PORT=3000
-Start the app:

-bash
-Copy
-Edit
-nodemon app.js

