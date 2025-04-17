# 🚀 Stream-Talk
StreamTalk is a real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and enhanced with Socket.IO for instant messaging. It features secure JWT-based authentication, real-time communication, and a clean, responsive UI powered by TailwindCSS and DaisyUI. Global state is managed efficiently with Zustand.

🔥 Features
🔐 User Authentication (Register/Login with JWT)

💬 Real-Time Messaging using Socket.IO

👥 One-to-One Chat

🟢 Online/Offline User Status

🌐 Global State Management with Zustand

🎨 Modern UI using TailwindCSS & DaisyUI

📱 Responsive Design for all devices

🛠️ Tech Stack
Frontend:

React.js

TailwindCSS

DaisyUI

Zustand

Axios

Socket.IO Client

Backend:

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Bcrypt (Password Hashing)

Socket.IO Server

📸 Screenshots
(Add a few screenshots here to showcase the login page, chat UI, and user list)

⚙️ Installation
🖥️ Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/streamtalk.git
cd streamtalk
📦 Install dependencies
For the client:
bash
Copy
Edit
cd client
npm install
For the server:
bash
Copy
Edit
cd ../server
npm install
🌐 Environment Variables
Create a .env file in the /server directory and add:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
▶️ Running the Application
Start the server
bash
Copy
Edit
cd server
npm start
Start the client
bash
Copy
Edit
cd client
npm start
The app will run on http://localhost:3000 and the server on http://localhost:5000

🚀 Live Demo
Deployed on Render: StreamTalk 🔗

📁 Project Structure
bash
Copy
Edit
streamtalk/
├── client/           # React frontend
│   └── src/
├── server/           # Express backend
│   └── models/
│   └── routes/
│   └── controllers/
├── README.md
🙌 Acknowledgements
Socket.IO

Zustand

TailwindCSS

DaisyUI

🧑‍💻 Author
Ankit – https://github.com/ankit8394

