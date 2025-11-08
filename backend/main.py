from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os

# Import routers
from routes import contact
from routes import newsletter
from routes import inquiry
from routes import feedback
from routes import user
from routes import blog

app = FastAPI(title="Portfolio Backend API")

# CORS for frontend - allow all origins in development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact.router, prefix="/api", tags=["contact"])
app.include_router(newsletter.router, prefix="/api", tags=["newsletter"])
app.include_router(inquiry.router, prefix="/api", tags=["inquiry"])
app.include_router(feedback.router, prefix="/api", tags=["feedback"])
app.include_router(user.router, prefix="/api", tags=["user"])
app.include_router(blog.router, prefix="/api", tags=["blog"])

@app.get("/")
async def root():
    return {"message": "Portfolio Backend API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
