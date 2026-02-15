# Personal Portfolio Website for Mugabo

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat&logo=next.js)](https://nextjs.org/)[![FastAPI](https://img.shields.io/badge/FastAPI-0.118-green?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?style=flat&logo=tailwind-css)](https://tailwindcss.com/)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive personal portfolio website showcasing expertise in AI, IoT/CPS, cybersecurity, SpaceTech, and business. Designed for professionals, collaborators, and recruiters to highlight hands-on innovation and real-world impact.

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

```bash
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

## System Architecture

### High-Level Architecture Overview

```mermaid
graph TB
    subgraph "Client Layer"
        A[Web Browser] --> B[Next.js Frontend]
        B --> C[React Components]
        B --> D[Tailwind CSS]
    end
    
    subgraph "API Layer"
        E[FastAPI Backend]
        F[CORS Middleware]
        G[API Routes]
        E --> F
        E --> G
    end
    
    subgraph "Data Layer"
        H[PostgreSQL Database]
        I[Connection Pool]
        E --> I
        I --> H
    end
    
    subgraph "External Services"
        J[Email Service]
        K[Analytics]
    end
    
    B -->|HTTP/HTTPS| E
    G -->|SQL Queries| H
    E -->|Notifications| J
    B -->|Tracking| K
    
    style A fill:#e1f5fe
    style B fill:#f3e5f5
    style E fill:#e8f5e8
    style H fill:#fff3e0
```

### API Flow Architecture

```mermaid
sequenceDiagram
    participant C as Client (Browser)
    participant F as Next.js Frontend
    participant A as FastAPI Backend
    participant D as PostgreSQL Database
    
    Note over C,D: Contact Form Submission Flow
    C->>F: Fills contact form
    F->>F: Client-side validation
    F->>A: POST /api/contact (JSON data)
    A->>A: Server-side validation
    A->>D: INSERT INTO contact_messages
    D-->>A: Return message_id
    A-->>F: Success response
    F-->>C: Show success message
    
    Note over C,D: Newsletter Subscription Flow
    C->>F: Subscribe to newsletter
    F->>A: POST /api/newsletter
    A->>D: INSERT INTO newsletter_subscribers
    D-->>A: Confirmation
    A-->>F: Success response
    F-->>C: Show confirmation
```

### Database Schema Architecture

```mermaid
erDiagram
    contact_messages {
        int id PK
        varchar name
        varchar email
        text message
        varchar phone
        varchar occupation
        timestamp created_at
    }
    
    newsletter_subscribers {
        int id PK
        varchar name
        varchar email UK
        timestamp subscribed_at
    }
    
    project_inquiries {
        int id PK
        varchar project_name
        varchar name
        varchar email
        text inquiry
        varchar phone
        varchar occupation
        timestamp created_at
    }
    
    feedback {
        int id PK
        varchar type
        text content
        int rating
        timestamp created_at
    }
    
    users {
        int id PK
        varchar username UK
        varchar email UK
        varchar password_hash
        timestamp created_at
    }
    
    blogs {
        int id PK
        varchar title
        text content
        int author_id FK
        timestamp created_at
        timestamp updated_at
    }
    
    users ||--o{ blogs : "creates"
```

### Deployment Architecture

```mermaid
graph TB
    subgraph "Development Environment"
        A1[Local Machine]
        B1[Next.js :3000]
        C1[FastAPI :8000]
        D1[PostgreSQL :5432]
        A1 --> B1
        A1 --> C1
        C1 --> D1
    end
    
    subgraph "Production Environment"
        A2[Users]
        B2[Vercel - Frontend]
        C2[Railway/Heroku - Backend]
        D2[PostgreSQL Cloud]
        E2[Domain Name]
        F2[SSL Certificate]
        
        A2 -->|HTTPS| E2
        E2 --> B2
        B2 -->|API Calls| C2
        C2 -->|Database| D2
        E2 --> F2
    end
    
    subgraph "CI/CD Pipeline"
        G1[GitHub Repository]
        G2[Automated Tests]
        G3[Build Process]
        G4[Deployment]
        
        G1 --> G2
        G2 --> G3
        G3 --> G4
        G4 --> B2
        G4 --> C2
    end
```

### Technology Stack Overview

```mermaid
mindmap
  root((Portfolio Website))
    Frontend
      Next.js 16
      React 19
      TypeScript
      Tailwind CSS
      Framer Motion
      React Icons
    Backend
      FastAPI
      Python 3.9+
      Uvicorn
      Pydantic
      AsyncPG
    Database
      PostgreSQL
      Connection Pooling
      Indexing
    DevOps
      Git
      Vercel
      Railway/Heroku
      GitHub Actions
      Environment Variables
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

2.**Backend Setup** (for contact form and dynamic features):

   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload  # Runs on http://localhost:8000
   ```

3.**Frontend Setup** (main website):

   ```bash
   cd frontend
   npx create-next-app@latest . --typescript --tailwind --eslint --app --yes
   npm install
   npm run dev  # Runs on http://localhost:3000
   ```

4.**Environment Variables** (create `.env` in backend/):

   ```bash
   DATABASE_URL=postgresql://username:password@localhost/portfolio_db
   SECRET_KEY=your-secret-key-here
   ```

5.**Build for Production**:

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

- Email: [Email](mailto:aimemartin018@gmail.com)
- LinkedIn: [LinkedIn](https://linkedin.com/in/nshuti-martin15)
- GitHub: [GitHub](https://github.com/merma1509)

Built for innovation and impact with ❤️ by ~M~. Let's connect!
