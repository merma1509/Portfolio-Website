#!/usr/bin/env python3
"""
Test Railway API endpoints
"""
import requests
import json

def test_api_endpoints():
    """Test all Railway API endpoints"""
    base_url = "https://sparkling-growth.railway.app"
    
    print("🧪 Testing Railway API Endpoints")
    print("=" * 50)
    
    # Test health endpoint
    print("\n1. Testing Health Endpoint:")
    try:
        response = requests.get(f"{base_url}/health")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
    except Exception as e:
        print(f"   Error: {e}")
    
    # Test contact endpoint
    print("\n2. Testing Contact Endpoint:")
    contact_data = {
        "name": "Test User",
        "email": "test@example.com", 
        "message": "Testing production API",
        "phone": "+1234567890"
    }
    
    try:
        response = requests.post(
            f"{base_url}/api/contact",
            json=contact_data,
            headers={"Content-Type": "application/json"}
        )
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
    except Exception as e:
        print(f"   Error: {e}")
    
    # Test root endpoint
    print("\n3. Testing Root Endpoint:")
    try:
        response = requests.get(f"{base_url}/")
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.text}")
    except Exception as e:
        print(f"   Error: {e}")

if __name__ == "__main__":
    test_api_endpoints()
