#!/usr/bin/env python3
"""
Test all possible endpoints on Railway
"""
import requests

def test_all_endpoints():
    base_url = "https://sparkling-growth.railway.app"
    
    print("🔍 Testing All Railway Endpoints")
    print("=" * 50)
    
    # Test all possible contact endpoints
    endpoints = [
        "/api/contact",
        "/contact", 
        "/api/",
        "/",
        "/health",
        "/docs"
    ]
    
    for endpoint in endpoints:
        try:
            if endpoint in ["/api/contact", "/contact"]:
                # Test POST for contact endpoints
                response = requests.post(
                    f"{base_url}{endpoint}",
                    json={"name": "Test", "email": "test@example.com", "message": "Test"},
                    timeout=5
                )
                print(f"POST {endpoint}: {response.status_code}")
                if response.status_code == 200:
                    print(f"   ✅ SUCCESS: {response.json()}")
                else:
                    print(f"   ❌ Response: {response.text[:100]}")
            else:
                # Test GET for other endpoints
                response = requests.get(f"{base_url}{endpoint}", timeout=5)
                print(f"GET {endpoint}: {response.status_code}")
                if response.status_code == 200:
                    print(f"   ✅ SUCCESS: {response.text[:100]}")
                else:
                    print(f"   ❌ Response: {response.text[:100]}")
        except Exception as e:
            print(f"ERROR {endpoint}: {e}")

if __name__ == "__main__":
    test_all_endpoints()
