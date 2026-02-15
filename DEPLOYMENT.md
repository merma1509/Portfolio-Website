# Production Deployment Guide

This guide provides comprehensive instructions for deploying your portfolio website to production environments.

## Quick Deployment Summary

**Current Status:**
- ✅ **Frontend**: Already deployed on Vercel
- 🔄 **Backend**: Deploy to Railway (free tier)
- 🔄 **Database**: Setup Supabase PostgreSQL (free tier)

**3 Steps to Production:**
1. Create Supabase database & run SQL schema
2. Deploy backend to Railway with DATABASE_URL
3. Update Vercel environment variables with new API URL

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database Setup](#database-setup)
3. [Backend Deployment](#backend-deployment)
4. [Frontend Deployment](#frontend-deployment)
5. [Environment Variables](#environment-variables)
6. [SSL and Security](#ssl-and-security)
7. [Monitoring and Health Checks](#monitoring-and-health-checks)
8. [Backup and Recovery](#backup-and-recovery)

## Prerequisites

### Required Accounts

- **GitHub**: For source code management and CI/CD
- **Vercel**: Frontend already deployed
- **Railway**: For backend hosting (recommended free tier)
- **Supabase**: For PostgreSQL database (recommended free tier)
- **Domain Registrar**: For custom domain (optional)

### Development Tools

```bash
# Ensure you have the latest versions
node --version    # Should be v18+
npm --version     # Should be v9+
python --version  # Should be v3.9+
git --version     # Should be v2.30+
```

## Database Setup

### Supabase (Production PostgreSQL)

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up for free tier

2. **Create New Project**
   - Click "New Project"
   - Choose organization
   - Set project name: `portfolio-db`
   - Set strong database password

3. **Get Connection String**
   - Go to Settings > Database
   - Copy the "Connection string"
   - Format: `postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres`

4. **Run Database Initialization**
   - Go to SQL Editor in Supabase
   - Paste and run the SQL schema from below

```sql
-- Create tables for portfolio database
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    phone TEXT,
    occupation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS project_inquiries (
    id SERIAL PRIMARY KEY,
    project_name TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    inquiry TEXT NOT NULL,
    phone TEXT,
    occupation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS feedback (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_email ON project_inquiries(email);
```

5.**Configure Database Access**

- Go to Settings > API
- Find your `anon` and `service_role` keys
- Keep these secure for environment variables

## Backend Deployment

### Railway (Recommended Free Tier)

1. **Prepare Backend**

```bash
# Create railway.json in backend directory
cat > railway.json << EOF
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "uvicorn main:app --host 0.0.0.0 --port $PORT",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
EOF
```

2.**Create Railway Service**

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and create service
railway login
railway new
railway up
```

3.**Configure Environment Variables**

```bash
railway variables set DATABASE_URL="your-supabase-connection-string"
railway variables set SECRET_KEY="your-secret-key-here"
```

## Frontend Deployment

### Vercel (Already Live)

Your frontend is already deployed on Vercel. To update environment variables:

```bash
# Update production environment variables
vercel env add NEXT_PUBLIC_API_URL
vercel env add NEXT_PUBLIC_BASE_URL
```

**Example Values:**

- `NEXT_PUBLIC_API_URL`: `https://your-backend-url.railway.app/api`
- `NEXT_PUBLIC_BASE_URL`: `https://your-domain.com`

## Environment Variables

### Backend Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@host:5432/database

# Security
SECRET_KEY=your-super-secret-key-here

# Optional: Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Frontend Environment Variables

```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api

# Site Configuration
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com

# Social Media
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/your-profile
```

## SSL and Security

### Automatic SSL Configuration

- **Vercel**: Automatic SSL certificates
- **Railway**: Automatic SSL certificates
- **Custom Domain**: Configure DNS settings

### Security Headers

Add this to your FastAPI backend:

```python
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app.add_middleware(HTTPSRedirectMiddleware)
app.add_middleware(
    TrustedHostMiddleware, 
    allowed_hosts=["your-domain.com", "*.your-domain.com"]
)
```

### CORS Configuration

Update for production:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://your-domain.com", "https://www.your-domain.com"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)
```

## Monitoring and Health Checks

### Backend Health Monitoring

```python
# Add to main.py
@app.get("/health/detailed")
async def detailed_health():
    try:
        # Test database connection
        async with get_db() as conn:
            await conn.fetch("SELECT 1")
        db_status = "healthy"
    except:
        db_status = "unhealthy"
    
    return {
        "status": "healthy" if db_status == "healthy" else "degraded",
        "database": db_status,
        "timestamp": datetime.utcnow().isoformat()
    }
```

### Frontend Monitoring

Add Vercel Analytics:

```bash
npm install @vercel/analytics
```

```javascript
// Add to layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Backup and Recovery

### Database Backups

```bash
# Manual backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d_%H%M%S).sql

# Automated backup (add to cron job)
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/backup_$(date +\%Y\%m\%d_\%H\%M\%S).sql.gz
```

### Application Backups

```bash
# Git backup
git add .
git commit -m "Backup $(date)"
git push origin main

# Configuration backup
cp .env.example .env.backup.$(date +%Y%m%d)
```

## Testing Production Deployment

### Pre-Deployment Checklist

- [ ] All environment variables set
- [ ] Database connection tested
- [ ] SSL certificates configured
- [ ] CORS settings updated
- [ ] Health endpoints accessible
- [ ] Error logging configured
- [ ] Performance monitoring enabled

### Post-Deployment Tests

```bash
# Test API endpoints
curl https://your-backend-url.railway.app/health
curl -X POST https://your-backend-url.railway.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message","phone":"+1234567890"}'

# Test frontend
curl -I https://your-domain.com
```

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Check connection string format
   - Verify IP whitelisting
   - Ensure database is running

2. **CORS Errors**
   - Update allowed origins
   - Check preflight requests
   - Verify API endpoint URLs

3. **Build Failures**
   - Check Node.js version
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

4. **Environment Variable Issues**
   - Verify variable names
   - Check for trailing spaces
   - Use platform-specific commands

### Log Analysis

```bash
# Railway logs
railway logs

# Vercel logs
vercel logs

# Heroku logs
heroku logs --tail
```

## Performance Optimization

### Backend Optimization

- Use connection pooling (already configured)
- Implement caching with Redis
- Add rate limiting
- Optimize database queries

### Frontend Optimization

- Enable Next.js Image optimization
- Implement code splitting
- Use CDN for static assets
- Enable Gzip compression

## Scaling Considerations

### When to Scale

- API response time > 500ms
- Database CPU > 70%
- Memory usage > 80%
- Concurrent users > 100

### Scaling Strategies

- **Horizontal Scaling**: Add more instances
- **Database Scaling**: Read replicas
- **CDN**: Global content delivery
- **Load Balancing**: Distribute traffic

This deployment guide ensures your portfolio website runs reliably in production with proper monitoring, security, and scalability considerations.
