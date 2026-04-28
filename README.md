# Team Management Application

## 📌 Project Description

This is a full-stack web application that allows users to manage team members efficiently. Users can add new members, upload profile images, view all members, and see detailed information for each individual.

---

## 🚀 Features

* Add new team members with full details
* Upload and store profile images
* View all team members in a card layout
* View individual member details
* Responsive and clean user interface

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios
* React Router DOM

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
team-management-app/
 ├── backend/
 ├── frontend/
 ├── README.md
 └── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/tamiliniyan05xo/team-management-app.git
cd team-management-app
```

---

### 2. Backend Setup

```
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### Add Member

```
POST /members
```

### Get All Members

```
GET /members
```

### Get Member by ID

```
GET /members/:id
```

---

## 🧪 Sample Data Fields

* Name
* Roll Number
* Year
* Degree
* Project
* Hobbies
* Certificate
* Internship
* Aim
* Profile Image

---

## 📸 Screenshots

* Home Page
* Add Member Page
* View Members Page
* Member Details Page

---

## 📌 Notes

* Ensure MongoDB is running before starting the backend
* Uploaded images are stored in the `/uploads` folder
* Do not upload `node_modules` to GitHub

---

## 👨‍💻 Author

Tamiliniyan
---

## 📄 License

This project is for educational purposes.
