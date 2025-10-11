import sys
sys.path.append('..')
from fastapi import APIRouter, HTTPException
from models import User
from database import get_db
from datetime import datetime

router = APIRouter()

@router.post("/register")
async def register_user(user: User):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('''
                INSERT INTO users (username, email, password_hash, created_at)
                VALUES (%s, %s, %s, %s)
            ''', (user.username, user.email, user.password, datetime.now()))  # Note: Hash password in production
        conn.commit()
        conn.close()
        return {"message": "User registered successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
