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
  ![image](https://github.com/user-attachments/assets/a60c7c16-fd30-44fc-9a48-1ed5d687f484)

- `/add` - Form to add new movies (with image upload/URL)
  ![image](https://github.com/user-attachments/assets/86457fdd-c7b7-4142-b87f-2f82d4ad65d1)

- `/user` - Personal reviews page with dark mode toggle
  ![image](https://github.com/user-attachments/assets/fd9862b6-899d-4eac-8f0e-41469b42e408)
![image](https://github.com/user-attachments/assets/d12159ba-70d2-43cc-b83e-6c28f52320bd)


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
- Toggle dark/light mode in the top-left corner

## Technical Details

- Built with **Next.js 14** (App Router)
- State management with **localStorage**
- Styled with **Tailwind CSS**
- Dark mode using **CSS variables**
- Responsive grid layout

## Deployment

The app is available on Vercel at https://movie-log-puce.vercel.app

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

