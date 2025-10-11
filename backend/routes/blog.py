import sys
sys.path.append('..')
from fastapi import APIRouter, HTTPException
from models import Blog
from database import get_db
from datetime import datetime

router = APIRouter()

@router.get("/blogs")
async def get_blogs():
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('SELECT * FROM blogs ORDER BY created_at DESC')
            blogs = cur.fetchall()
        conn.close()
        return blogs
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/blogs")
async def create_blog(blog: Blog):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('''
                INSERT INTO blogs (title, content, author_id, created_at, updated_at)
                VALUES (%s, %s, %s, %s, %s)
            ''', (blog.title, blog.content, blog.author_id, datetime.now(), datetime.now()))
        conn.commit()
        conn.close()
        return {"message": "Blog created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.put("/blogs/{blog_id}")
async def update_blog(blog_id: int, blog: Blog):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('''
                UPDATE blogs SET title = %s, content = %s, updated_at = %s WHERE id = %s
            ''', (blog.title, blog.content, datetime.now(), blog_id))
        conn.commit()
        conn.close()
        return {"message": "Blog updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.delete("/blogs/{blog_id}")
async def delete_blog(blog_id: int):
    try:
        conn = get_db()
        with conn.cursor() as cur:
            cur.execute('DELETE FROM blogs WHERE id = %s', (blog_id,))
        conn.commit()
        conn.close()
        return {"message": "Blog deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
