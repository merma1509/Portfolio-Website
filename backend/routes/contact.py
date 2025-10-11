import sys
sys.path.append('..')
from fastapi import APIRouter, HTTPException
from models import ContactMessage
from database import get_db
from datetime import datetime

router = APIRouter()

@router.post("/contact")
async def submit_contact(message: ContactMessage):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('''
                INSERT INTO contact_messages (name, email, message, phone, created_at)
                VALUES (%s, %s, %s, %s, %s)
            ''', (message.name, message.email, message.message, message.phone, datetime.now()))
        conn.commit()
        conn.close()
        return {"message": "Contact message sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
