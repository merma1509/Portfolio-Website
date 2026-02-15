#!/usr/bin/env python3
"""
Test what's actually running on Railway
"""
import requests

def test_actual_deployment():
    base_url = "https://sparkling-growth.railway.app"
    
    print("🔍 Testing Railway Deployment")
    print("=" * 40)
    
    # Test the exact endpoint that should be in our production main.py
    try:
        response = requests.post(
            f"{base_url}/api/contact",
            json={"name": "Test", "email": "test@example.com", "message": "Testing production API"},
            timeout=10
        )
        print(f"POST /api/contact: {response.status_code}")
        print(f"Response: {response.text}")
        
        # If we get 404, test if it's the old version
        if response.status_code == 404:
            print("\n🔍 Testing if old version is running...")
            # Test root endpoint to see what message we get
            root_response = requests.get(f"{base_url}/")
            print(f"Root response: {root_response.text[:200]}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_actual_deployment()
