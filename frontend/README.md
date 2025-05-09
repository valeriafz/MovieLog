# MovieLog - a watchlist app

A Next.js application for managing your movie collection with watchlist tracking, reviews, and dark mode support.

## Features

- 🎬 **Add movies** with titles, images, and ratings
- 📌 **Organize** by status ("Completed" or "Watch later")
- ⭐ **Rate and review** watched movies
- 🔍 **Search and filter** your collection
- 🌙 **Dark/Light mode** toggle
- 📱 **Responsive design** for all devices

## App Structure

### Key Routes

- `/` - Homepage displaying all movies with search/filter options
- ![image](https://github.com/user-attachments/assets/f2cb8c30-7d55-462a-9e13-e0b50858addb)

- `/add` - Form to add new movies (with image upload/URL)
 ![image](https://github.com/user-attachments/assets/960a2b42-db5a-4755-b247-201d64db506e)

- `/user` - Personal reviews page 
![image](https://github.com/user-attachments/assets/ee3ff24c-84de-40ba-a8b3-6412d29e0cd2)


## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/movie-watchlist.git
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Run the development server locally
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

### Adding Movies (`/add`)
1. Enter movie title
2. Add image (URL or upload)
3. Optionally add rating if completed
   - If no rating, movie is marked "Watch later"
4. Submit to add to your collection

### Managing Movies (`/`)
- Click the 👁️ icon to:
  - Mark as "Completed"
  - Add/edit rating (1-5 stars)
  - Write a review
- Use the search bar to find movies
- Filter by:
  - Watch later
  - Completed
  - Rating (high/low)

### Viewing Reviews (`/user`)
- Displays all your reviewed movies

### Change dark mode theme (via navbar)
- Toggle between dark and light theme
- ![image](https://github.com/user-attachments/assets/545dbdc2-27f9-4a51-8000-0329af52a53f)


## Technical Details

- State management with **localStorage**
- Styled with **Tailwind CSS**
- Dark mode using **CSS variables**
- Responsive grid layout

## Deployment

The app is available on Vercel at https://movie-log-puce.vercel.app

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

