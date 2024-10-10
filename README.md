# 📅 **Countdown Timer — Shopify App**

## 📖 Table of Contents
- [🔰 Introduction](#introduction)
- [📌 Project Description](#project-description)
- [🚀 Features](#features)
- [💻 Technologies Used](#technologies-used)
- [🔧 Setup Instructions](#setup-instructions)
  - [⚙️ Prerequisites](#prerequisites)
  - [🗂 Backend Setup](#backend-setup)
  - [🌐 Frontend Setup](#frontend-setup)
- [💡 How to Use the App](#how-to-use-the-app)
- [🔗 API Endpoints](#api-endpoints)
- [📂 App Structure](#app-structure)
- [📝 Development Notes](#development-notes)
- [📬 Contact](#contact)

---

## 🔰 Introduction
The **Countdown Timer Shopify App** helps Shopify merchants create a sense of urgency for their customers by adding countdown timers for promotions and discounts on product pages. This documentation provides instructions on setting up the app, its features, and technical requirements.

---

## 📌 Project Description
The Countdown Timer Shopify app allows merchants to create customizable countdown timers for their promotions, which can be displayed on product pages. It is built using the MERN stack (MongoDB, Express.js, React, Node.js) and integrates seamlessly within the Shopify environment.

### 🗝️ Key Points:
- Developed using the **MERN** stack.
- Admin interface is built with **React**.
- **Node.js** and **Express** handle backend logic.
- Integrated into Shopify using a **theme app extension**.
- Countdown timer widget is displayed on product pages.

---

## 🚀 Features
- 🕒 Merchants can **create, update, and delete** countdown timers for promotions.
- 📅 Each timer has a unique **start and end date**, description, and display options.
- 💾 Countdown timers are stored in a **MongoDB** database.
- 🛠️ Uses a **theme app extension** to display timers on product pages.
- 🖥️ Provides an intuitive **React-based admin interface** for merchants.

---

## 💻 Technologies Used
- **Frontend**: React, JavaScript
- **Backend**: Node.js, Express.js, MongoDB
- **Shopify**: Shopify API, Shopify CLI 3.0, Theme App Extension
- **Hosting**: Vercel (Frontend), Render (Backend)

---

## 🔧 Setup Instructions

### ⚙️ Prerequisites
Before setting up the project, ensure you have:
- A [Shopify Partners account](https://partners.shopify.com/).
- A development store with sample products imported. [Import sample products](https://help.shopify.com/en/manual/products/import-export/import-products).
- API keys and credentials from your Shopify app setup.

### 🗂 Backend Setup
1. Clone the repository:
   ```bash
   [git clone <repository-link>](https://github.com/MuhammedFahizk/countdown-timer)
   Navigate to the backend folder:
bash
Copy code
cd backend
Install the dependencies:
bash
Copy code
npm install
Create a .env file in the root directory of the backend and add the following environment variables:
plaintext
Copy code
MONGODB_URI=<your-mongodb-connection-string>
SHOPIFY_API_KEY=<your-shopify-api-key>
SHOPIFY_API_SECRET=<your-shopify-api-secret>
SHOPIFY_SCOPES=read_products,write_products
SHOPIFY_APP_URL=<your-app-url>
Start the backend server:
bash
Copy code
npm start
🌐 Frontend Setup
Navigate to the frontend folder:
bash
Copy code
cd frontend
Install the dependencies:
bash
Copy code
npm install
Create a .env file in the root directory of the frontend and add the following environment variables:
plaintext
Copy code
REACT_APP_BACKEND_URL=<your-backend-url>
REACT_APP_SHOPIFY_API_KEY=<your-shopify-api-key>
Start the frontend development server:
bash
Copy code
npm start
💡 How to Use the App
Log in to the Shopify admin dashboard and navigate to the Apps section.
Click on the Countdown Timer app to access the admin interface.
Create a new countdown timer by filling in the required details such as start and end date, description, and display options.
Save the timer, and it will automatically be displayed on the product pages.
🔗 API Endpoints
Timer Endpoints


GET /api/timers/all/
Retrieve all timers for a specific store.

POST /api/timers/create
Create a new timer.

PUT /api/timers/update/
Update an existing timer by its ID.

DELETE /api/timers/
Delete a timer by its ID.

📂 App Structure
plaintext
Copy code
|-- backend/
|   |-- models/
|   |-- routes/
|   |-- controllers/
|   |-- server.js
|-- frontend/
|   |-- src/
|   |-- public/
|-- theme-extension/
|   |-- assets/
|   |-- blocks/
|   |-- locales/
|   |-- templates/
📝 Development Notes
The frontend is developed using React, while the backend uses Node.js and Express.js.
MongoDB is used for data storage.
The app uses a theme app extension to integrate the countdown timer script into the Shopify storefront.
Preact was initially considered for the widget-side app but was not implemented in the final version.
📬 Contact
For any queries or support, please reach out to the development team at fahizk100@gmail.com.


