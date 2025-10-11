# Personal Portfolio Website for Mugabo

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)](https://nextjs.org/)[![FastAPI](https://img.shields.io/badge/FastAPI-0.118-green?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?style=flat&logo=tailwind-css)](https://tailwindcss.com/)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
> A modern, responsive personal portfolio website showcasing expertise in AI, IoT/CPS, cybersecurity, SpaceTech, and business. Designed for professionals, collaborators, and recruiters to highlight hands-on innovation and real-world impact.

## Features

- **Home**: Hero section with tagline, featured projects, and call-to-action.
- **About**: Detailed bio, expertise, educational background, and personality.
- **Projects**: Showcase of key works (OpenClimate, RoutiQ, eNeza Marketplace, Drone UAVs) with slogans, tech stacks, and outcomes.
- **Skills**: Interactive visualization of proficiencies in AI, IoT, cybersecurity, etc.
- **Gallery**: Visuals from projects, prototypes, and milestones.
- **Contact**: Integrated form for collaborations and inquiries.
- **Responsive Design**: Mobile-first with dark/light mode toggle.
- **Performance**: SEO-optimized, fast-loading, and accessible.

## Tech Stack

### Frontend

- **Next.js 15**: React-based framework for server-side rendering and static generation.
- **TypeScript**: Type-safe JavaScript for better development experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **React Icons**: Icon library for UI elements.

### Backend

- **FastAPI**: Modern, fast web framework for building APIs.
- **Python 3.9+**: Core programming language.
- **Uvicorn**: ASGI server for running the API.
- **PostgreSQL** (optional): Database for dynamic data storage.

### Tools & Hosting

- **Git**: Version control.
- **ESLint/Prettier**: Code linting and formatting.
- **Vercel**: Hosting for frontend (free tier available).
- **Heroku/Railway**: Hosting for backend API.

## Project Structure

```
Portfolio-Website/
├── .git/                 # Git repository
├── .gitignore           # Git ignore file (add if needed)
├── README.md            # This file
├── backend/             # FastAPI application
│   ├── main.py          # Core API routes
│   ├── requirements.txt # Python dependencies
│   └── venv/            # Virtual environment (not in repo)
├── docs/                # Documentation
│   └── README.md        # Basic setup guide
└── frontend/            # Next.js application (to be set up)
    ├── app/             # Next.js App Router pages (home, about, projects, skills, gallery, contact)
    ├── components/      # Reusable UI components
    ├── public/          # Static assets
    └── package.json     # Node dependencies
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher) for frontend.
- **Python** (v3.9 or higher) for backend.
- **PostgreSQL** (optional) for database features.
- **Git** for cloning the repository.

### Installation & Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/merma1509/Portfolio-Website.git
   cd Portfolio-Website
   ```
2. **Backend Setup** (for contact form and dynamic features):

   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload  # Runs on http://localhost:8000
   ```
3. **Frontend Setup** (main website):

   ```bash
   cd frontend
   npx create-next-app@latest . --typescript --tailwind --eslint --app --yes
   npm install
   npm run dev  # Runs on http://localhost:3000
   ```
4. **Environment Variables** (create `.env` in backend/):

   ```
   DATABASE_URL=postgresql://username:password@localhost/portfolio_db
   SECRET_KEY=your-secret-key-here
   ```
5. **Build for Production**:

   - Frontend: `npm run build && npm start`
   - Backend: Deploy to hosting service.

## Development

- **Adding Pages**: Edit files in `frontend/app/` for routing.
- **Styling**: Use Tailwind classes in components.
- **API Endpoints**: Extend `backend/main.py` for new features.
- **Testing**: Use `npm test` for frontend; run API manually for backend.

## Deployment

- **Frontend**: Push to Vercel – auto-deploys from GitHub.
- **Backend**: Deploy to Heroku, Railway, or similar; set environment variables.
- **Custom Domain**: Configure in hosting dashboard.

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/amazing-feature`.
3. Commit changes: `git commit -m 'Add amazing feature'`.
4. Push branch: `git push origin feature/amazing-feature`.
5. Open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

**Mugabo (Niyonshuti Martin)**

- Email: [aimemartin018@gmail.com](mailto:aimemartin018@gmail.com)
- LinkedIn: [linkedin.com/in/nshuti-martin15](https://linkedin.com/in/nshuti-martin15)
- GitHub: [github.com/merma1509](https://github.com/merma1509)

Built for innovation and impact with ❤️ by Mugabo. Let's connect!
