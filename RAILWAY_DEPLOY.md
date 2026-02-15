# Portfolio Backend - Railway Deployment

## 🚀 Quick Deploy Commands

```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login to Railway
npx railway login

# 3. Initialize Railway project (from backend directory)
cd backend
npx railway init

# 4. Set environment variables
npx railway variables set DATABASE_URL="postgresql://postgres.wftqjaayowzpctppqhz:Mugabo150520%@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# 5. Deploy
npx railway up
```

## 🔧 Current Status

- ✅ **Railway Account**: Logged in as Mugabo
- ✅ **Project Created**: hopeful-connection
- ✅ **Database URL**: Configured
- ❌ **Build**: Failing during package installation

## 🐛 Issue Analysis

The build is failing because Railway is trying to install all requirements including test dependencies. Let's create a production-ready requirements file.

## 🛠️ Solution: Production Requirements

Create `requirements-prod.txt` with only essential dependencies:

```txt
fastapi==0.104.1
uvicorn==0.38.0
asyncpg==0.29.0
pydantic==2.12.0
python-dotenv==1.1.1
python-multipart==0.0.6
```

## 🚀 Alternative Deploy Strategy

### Option 1: Use Production Requirements
```bash
# Deploy with minimal requirements
cd backend
cp requirements-prod.txt requirements.txt
npx railway up
```

### Option 2: Docker Deployment
```bash
# Create Dockerfile for better control
FROM python:3.11-slim

WORKDIR /app
COPY requirements-prod.txt .
RUN pip install -r requirements-prod.txt

COPY . .
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Option 3: GitHub Integration
```bash
# Push to GitHub and connect Railway to your repo
git add .
git commit -m "Ready for Railway deployment"
git push origin main

# Then in Railway dashboard:
# 1. Connect GitHub repo
# 2. Deploy from main branch
```

## 📊 Build Logs Reference

Check detailed logs at:
https://railway.com/project/fa659e08-8e8f-4965-8096-d9cd33b4a35

## 🎯 Next Steps

1. **Try Option 1** (Production requirements)
2. **If still failing**, use Option 3 (GitHub integration)
3. **Once deployed**, test the live API endpoint
4. **Update Vercel** with new Railway URL
