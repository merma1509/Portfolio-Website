#!/usr/bin/env python3
"""
Quick test of Railway API
"""
import requests

def quick_test():
    try:
        response = requests.get("https://sparkling-growth.railway.app/health", timeout=5)
        print(f"Health check: {response.status_code}")
        if response.status_code == 200:
            print("✅ Railway is responding!")
            
            # Test contact endpoint
            contact_data = {"name": "Test", "email": "test@example.com", "message": "Working!"}
            contact_response = requests.post(
                "https://sparkling-growth.railway.app/api/contact",
                json=contact_data,
                timeout=5
            )
            print(f"Contact test: {contact_response.status_code}")
            if contact_response.status_code == 200:
                print("✅ Contact endpoint working!")
                print(f"Response: {contact_response.json()}")
            else:
                print(f"❌ Contact failed: {contact_response.text}")
        else:
            print("❌ Health check failed")
            
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    quick_test()
