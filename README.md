# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Manage-Creds = A Personal Password Manager

Manage-Creds a lightweight and easy-to-use password manager built entirely in the browser. Designed with React, TailwindCSS, and Vite, it helps you organize your login credentials without needing any server or database. Your data stays private because everything is stored securely in your browser’s LocalStorage.

This app is ideal for personal use, testing, or as a learning project for React developers. Whether you want to store credentials for multiple sites or simply practice managing state in React, Manage-Creds akes it straightforward.

## About the Project

. Managing passwords can get messy. Manage-Creds rovides a clean and simple interface where you can:

. Save website URLs, usernames, and passwords

. Edit or delete saved credentials anytime

. Toggle password visibility when typing

. Quickly copy credentials to your clipboard with a single click

. Unlike cloud-based password managers, Manage-Creds oes not send your data anywhere. It’s stored locally in your browser, making it perfect for people who value privacy and simplicity.

. This project also serves as a great starting point for beginners learning React hooks (useState, useEffect, useRef) and working with browser storage.

## Features

. Add, edit, and delete login credentials
. Toggle between showing and hiding passwords
. One-click copy for site URL, username, or password
. Stores all data in LocalStorage for persistence across refreshes
. Mobile-friendly responsive design with TailwindCSS
. Fully client-side – no backend API required

## Installation & Setup (Run Locally)

Follow these steps to clone and run the project on your system:

(1) Clone the Repository
git clone https://github.com/your-username/Manage-Creds.it

(2) Navigate into the Project Directory
cd Manage-Creds
(3)Install Dependencies
Make sure you have Node.js installed (v16 or higher recommended). Then install project dependencies:
npm install

(4) Start the Development Server
npm run dev

After running this command, the app will be available at:
http://localhost:5173

Open it in your browser and start using your personal password manager!

## Tech Stack

. React – UI library for building components

. TailwindCSS – Utility-first CSS framework for styling

. Vite – Fast bundler and dev server

. React Toastify – For notifications

. LocalStorage API – To persist credentials in the browser
