#!/usr/bin/env python3
"""
Test what routes are available on Railway
"""
import requests
import json

def test_available_routes():
    """Test all possible routes to see what's working"""
    base_url = "https://sparkling-growth.railway.app"
    
    print("🔍 Testing Available Routes")
    print("=" * 50)
    
    # Test common route patterns
    routes_to_test = [
        "/",
        "/health", 
        "/api/contact",
        "/contact",
        "/api/",
        "/docs",
        "/openapi.json"
    ]
    
    for route in routes_to_test:
        try:
            response = requests.get(f"{base_url}{route}")
            print(f"GET {route}: {response.status_code} - {response.text[:50]}...")
        except Exception as e:
            print(f"GET {route}: ERROR - {e}")
    
    # Test POST to contact
    print(f"\nPOST /api/contact:")
    try:
        response = requests.post(
            f"{base_url}/api/contact",
            json={"name": "Test", "email": "test@example.com", "message": "Test"},
            headers={"Content-Type": "application/json"}
        )
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.text[:100]}...")
    except Exception as e:
        print(f"   ERROR: {e}")

if __name__ == "__main__":
    test_available_routes()
