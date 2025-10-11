from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import os

# Import routers
from routes.contact import router as contact_router
from routes.newsletter import router as newsletter_router
from routes.inquiry import router as inquiry_router
from routes.feedback import router as feedback_router
from routes.user import router as user_router
from routes.blog import router as blog_router

app = FastAPI(title="Portfolio Backend API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(contact_router, prefix="/api", tags=["contact"])
app.include_router(newsletter_router, prefix="/api", tags=["newsletter"])
app.include_router(inquiry_router, prefix="/api", tags=["inquiry"])
app.include_router(feedback_router, prefix="/api", tags=["feedback"])
app.include_router(user_router, prefix="/api", tags=["user"])
app.include_router(blog_router, prefix="/api", tags=["blog"])

@app.get("/")
async def root():
    return {"message": "Portfolio Backend API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}
