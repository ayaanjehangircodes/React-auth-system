# React Authentication System (Frontend-Only)

A simple **frontend-only authentication system** built with **React and Vite**, using **Context API**, **React Router**, and **localStorage** to simulate a backend. Demonstrates login, registration, protected routes, and dynamic navigation.

---

## 🔑 Features

- Login page with form validation
- Registration page with duplicate user check
- Protected Dashboard page (accessible only when logged in)
- Navbar updates dynamically based on login state
- User session persistence using `localStorage`
- Frontend-only fake backend (no real API required)

---

## 🛠 Tech Stack / Dependencies

- **React** (`react`) – core library  
- **React DOM** (`react-dom`) – renders React components  
- **React Router DOM** (`react-router-dom`) – routing  
- **Vite** (`vite`) – dev server & build tool  
- **localStorage** – for simulating backend and session persistence  

---

## 📁 Folder Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ └── Dashboard.jsx
├── services/
│ └── authService.js
├── routes/
│ └── AppRoutes.jsx
├── App.jsx
├── main.jsx
└── index.css

---

## 🚀 How It Works

1. **App Load** → `AuthContext` checks `localStorage` for logged-in user.  
2. **Routing** → Public pages (`Home`, `Login`, `Register`) are accessible; Dashboard is protected.  
3. **Login/Register** → Updates `AuthContext` and `localStorage`; redirects to Dashboard.  
4. **ProtectedRoute** → Blocks Dashboard access if not logged in.  
5. **Logout** → Clears auth state; redirects to Login.

---

## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone <your-repo-url>
cd auth-system