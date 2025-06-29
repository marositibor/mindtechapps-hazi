#  User Dashboard – React + TypeScript

This project is a user dashboard built with **React**, **TypeScript**, **Vite**, **Material UI**, and **Axios**. It displays a searchable, interactive list of users fetched from an external API and allows viewing detailed user info in a modal.

---

##  Features

- 📋 User list with name, email, username, and company
- 🔍 Search users by name or email (case-insensitive)
- 📥 Modal with full user details on row click
- ⚠️ Graceful error and loading state handling
- 💾 Centralized state using React Context API

---

##  Tech Stack & Justification

| Library       | Why It Was Chosen                                                                 |
|---------------|------------------------------------------------------------------------------------|
| **Vite**      | Ultra-fast development server and build process, better DX than CRA     |
| **Axios**     | Cleaner syntax and better error handling over `fetch()` for API communication      |

---

## 📦 System Requirements

| Requirement         | Version / Description                 |
|---------------------|----------------------------------------|
| **Node.js**         | `>=18` (preferably LTS)               |
| **npm** or **pnpm** | npm `>=9` or pnpm `>=8`               |
| **Modern Browser**  | Chrome, Firefox, Safari, Edge (latest)|

---

## 🏃‍♂️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/marositibor/mindtechapps-hazi.git
cd mindtechapps-hazi
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure Overview

```
src/
├── api/              # Axios API wrappers
├── components/       # Reusable UI components
├── context/          # React Context for user state
├── types/            # TypeScript types
├── App.tsx
└── main.tsx
```
