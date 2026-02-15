#!/usr/bin/env python3
"""
Test Railway database connection specifically
"""
import requests
import os

def test_database_connection():
    """Test if Railway backend can connect to Supabase"""
    base_url = "https://sparkling-growth.railway.app"
    
    print("🔍 Testing Database Connection")
    print("=" * 40)
    
    # Test contact endpoint with database dependency
    contact_data = {
        "name": "Database Test",
        "email": "dbtest@example.com", 
        "message": "Testing Supabase connection from Railway",
        "phone": "+1234567890"
    }
    
    try:
        print(f"📤 Sending POST to {base_url}/api/contact")
        response = requests.post(
            f"{base_url}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"📊 Status Code: {response.status_code}")
        print(f"📄 Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            print(f"✅ Success: {response.json()}")
        elif response.status_code == 500:
            print(f"❌ Server Error: {response.text}")
        elif response.status_code == 503:
            print(f"⚠️  Database Error: {response.text}")
        else:
            print(f"❓ Unexpected Response: {response.text}")
            
    except requests.exceptions.Timeout:
        print("⏰ Request timed out")
    except requests.exceptions.ConnectionError:
        print("🔌 Connection failed")
    except Exception as e:
        print(f"💥 Unexpected error: {e}")

if __name__ == "__main__":
    test_database_connection()
