#!/usr/bin/env python3
"""
Simple FastAPI app for Railway deployment test
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os

app = FastAPI(title="Portfolio Backend API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

@app.get("/")
async def root():
    return {"message": "Portfolio Backend API - Simplified"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/api/contact")
async def contact_test(contact: ContactMessage):
    return {"message": "Contact endpoint working", "received": contact.dict()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
