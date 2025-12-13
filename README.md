# Portfolio Website - Dhruv Soni

A modern, responsive portfolio website built with React, Node.js, and MongoDB. Features a beautiful UI with dark mode support and a custom color palette.

## 🚀 Features

- **Modern Design**: Clean and professional UI with custom color palette
- **Dark Mode**: Seamless light/dark theme switching
- **Responsive**: Fully responsive design for all screen sizes
- **Contact Form**: Integrated contact form with email notifications
- **Project Showcase**: Dynamic project display with filtering
- **Admin Dashboard**: Manage projects and messages
- **Authentication**: Secure admin login system

## 🎨 Color Palette

- Primary: #146152 (Dark Teal)
- Secondary: #44803F (Forest Green)
- Accent: #B4CF66 (Light Green)
- Highlight: #FFEC5C (Bright Yellow)
- Alert: #FF5A33 (Orange Red)

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- TypeIt (for typing animations)
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Nodemailer
- Cloudinary (for image uploads)
- Winston (for logging)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-main
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

4. Configure environment variables

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

5. Run the application

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd client
npm run dev
```

## 📁 Project Structure

```
portfolio-main/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Custom middlewares
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
├── client/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── assets/      # Images and static assets
│   │   ├── components/  # React components
│   │   ├── contexts/    # React contexts
│   │   ├── pages/       # Page components
│   │   └── services/    # API services
│   └── index.html
└── README.md
```

## 🔐 Admin Access

To access the admin dashboard:
1. Navigate to `/admin/login`
2. Use your admin credentials
3. Manage projects and view messages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dhruv Soni**
- Email: sonidhruv557@gmail.com
- GitHub: [@DHRUV-85](https://github.com/DHRUV-85)
- LinkedIn: [Dhruv Soni](https://www.linkedin.com/in/dhruv-soni-62b998391/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
