# My Portfolio

A modern, responsive personal portfolio website built with Next.js 14, React, and TypeScript.

## Features

- 🎨 Modern and beautiful UI with gradient effects
- 📱 Fully responsive design
- ⚡ Fast and optimized with Next.js
- 🎯 Hero section with call-to-action buttons
- 👤 About section with personal stats
- 💼 Skills section with progress bars
- 🚀 Featured projects showcase
- 📧 Contact form with social links
- 🌙 Dark theme with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
└── package.json          # Dependencies
```

## Customization

### Personal Information

Edit the following files to customize the content:

- **Hero section**: Update `components/Hero.tsx` with your name and title
- **About section**: Update `components/About.tsx` with your bio and stats
- **Skills**: Update `components/Skills.tsx` with your skills and proficiency levels
- **Projects**: Update `components/Projects.tsx` with your projects
- **Contact**: Update `components/Contact.tsx` with your contact information

### Theme Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  /* ... other colors */
}
```

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure everything

### Deploy to Other Platforms

You can deploy your Next.js portfolio to any platform that supports Node.js hosting (Netlify, AWS, etc.).

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

- Email: john.doe@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]


