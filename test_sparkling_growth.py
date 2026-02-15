#!/usr/bin/env python3
"""
Test the correct Railway service URL
"""
import requests

def test_sparkling_growth():
    """Test the sparkling-growth service specifically"""
    url = "https://sparkling-growth.railway.app"
    
    print("🔍 Testing sparkling-growth.railway.app")
    print("=" * 50)
    
    try:
        # Test health endpoint
        response = requests.get(f"{url}/health", timeout=10)
        print(f"Health check: {response.status_code}")
        if response.status_code == 200:
            print(f"✅ SUCCESS: {response.text}")
            
            # Test contact endpoint
            contact_data = {
                "name": "Test User",
                "email": "test@example.com", 
                "message": "Testing sparkling-growth service"
            }
            contact_response = requests.post(
                f"{url}/api/contact",
                json=contact_data,
                timeout=10
            )
            print(f"Contact test: {contact_response.status_code}")
            if contact_response.status_code == 200:
                print(f"✅ CONTACT SUCCESS: {contact_response.json()}")
            else:
                print(f"❌ Contact failed: {contact_response.text}")
        else:
            print(f"❌ Health failed: {response.text}")
            
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    test_sparkling_growth()
