import pytest
from fastapi.testclient import TestClient
from unittest.mock import MagicMock
import database

mock_conn = MagicMock()
mock_cursor = MagicMock()
mock_conn.cursor.return_value.__enter__.return_value = mock_cursor
mock_conn.cursor.return_value.__exit__.return_value = None
mock_cursor.fetchall.return_value = []
mock_cursor.execute.return_value = None
mock_conn.commit.return_value = None
mock_conn.close.return_value = None

# Patch the get_db function
original_get_db = database.get_db
database.get_db = lambda: mock_conn

from ..main import app

client = TestClient(app)

@pytest.mark.asyncio
async def test_get_blogs():
    try:
        response = client.get("/api/blogs")
        assert response.status_code == 200
        assert response.json() == []
    finally:
        database.get_db = original_get_db

@pytest.mark.asyncio
async def test_create_blog():
    try:
        response = client.post("/api/blogs", json={"title": "Test Blog", "content": "Test content", "author_id": 1})
        assert response.status_code == 200
        assert response.json() == {"message": "Blog created successfully"}
    finally:
        database.get_db = original_get_db
