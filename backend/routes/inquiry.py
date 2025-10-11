import sys
sys.path.append('..')
from fastapi import APIRouter, HTTPException
from models import ProjectInquiry
from database import get_db
from datetime import datetime

router = APIRouter()

@router.post("/inquiry")
async def submit_inquiry(inquiry: ProjectInquiry):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('''
                INSERT INTO project_inquiries (project_name, name, email, inquiry, phone, occupation, created_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            ''', (inquiry.project_name, inquiry.name, inquiry.email, inquiry.inquiry, inquiry.phone, inquiry.occupation, datetime.now()))
        conn.commit()
        conn.close()
        return {"message": "Inquiry sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
