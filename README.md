# MovieLog - Full Stack Watchlist App

A Next.js frontend with NestJS backend application for managing your movie collection with watchlist tracking, reviews, and authentication.

## Features

### Frontend (Next.js)
- 🎬 **Add movies** with titles, images, and ratings
- 📌 **Organize** by status ("Completed" or "Watch later")
- ⭐ **Rate and review** watched movies
- 🔍 **Search and filter** your collection
- 🔐 **User authentication** (login/register)
- 🌙 **Dark/Light mode** toggle
- 📱 **Responsive design** for all devices

### Backend (NestJS)
- 🔒 **Secure authentication** using JWT and Passport
- 🔐 **Password hashing** with bcrypt
- 🎞️ **Movie CRUD operations**
- 📊 **User-specific data isolation**
- 🛡️ **Input validation** with class-validator

## App Structure

### Frontend Routes
- `/` - Homepage displaying all movies with search/filter options
![image](https://github.com/user-attachments/assets/f2cb8c30-7d55-462a-9e13-e0b50858addb)

- `/add` - Form to add new movies (with image upload/URL)
![image](https://github.com/user-attachments/assets/960a2b42-db5a-4755-b247-201d64db506e)

- `/user` - Personal reviews page 
![image](https://github.com/user-attachments/assets/ee3ff24c-84de-40ba-a8b3-6412d29e0cd2)

- `/auth/login` - User login
![image](https://github.com/user-attachments/assets/9ec9da84-bc40-4ef5-bc85-c010a91cee3a)

- `/auth/register` - User registration
![image](https://github.com/user-attachments/assets/f79f6d84-0d22-42fa-9da4-733bbb185b06)

### Backend Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /movies` - Get all movies for authenticated user
- `POST /movies` - Add new movie
- `PUT /movies/:id` - Update movie (rating/review)
- `DELETE /movies/:id` - Remove movie

## Technical Stack

### Frontend (Next.js)
- **Framework**: 15.3.0 (Pages Router)
- **Styling**: Tailwind CSS
- **State Management**: React Context + localStorage (transitioning to API)
- **Authentication**: JWT tokens
- **Deployment**: Vercel

### Backend (NestJS)
- **Framework**: NestJS
- **Authentication**: Passport + JWT
- **Security**: bcrypt for password hashing
- **Database**: MongoDB (with Mongoose)
- **Validation**: class-validator
- **API Documentation**: Swagger 
- **Deployment**: Render

## Getting Started

### Frontend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/valeriafz/MovieLog.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Configure environment variables (create `.env.local`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```
4. Run the development server
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to backend directory
   ```bash
   cd server
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Configure environment variables (create `.env`):
   ```env
   PORT=5000
   MONGODB_URI= your-cluster-connection-link
   JWT_SECRET=your-secret-key
   ```
4. Run the development server
   ```bash
   npm run start:dev
   ```

## How to Use

### Authentication
1. Register a new account at `/auth/register`
2. Get redirected at `/auth/login`
3. All movie data will be tied to your account

### Managing Movies
- **Add Movies** (`/add`):
  - Enter movie details
  - Add image (URL or upload)
  - Optionally add rating if completed

- **View/Edit Movies** (`/`):
  - Click the eye icon to:
    - Mark as "Completed"
    - Add/edit rating (1-5 stars)
    - Write a review
  - Search and filter your collection

- **View Reviews** (`/user`):
  - Displays all your reviewed movies

## Deployment

### Frontend
Deployed on Vercel at [https://movie-log-puce.vercel.app](https://movie-log-puce.vercel.app)

### Backend
Deployed on Render.

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes
- Input validation
- CORS configuration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NestJS Documentation](https://docs.nestjs.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Mongoose Documentation](https://mongoosejs.com/docs)