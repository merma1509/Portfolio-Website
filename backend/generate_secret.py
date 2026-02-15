#!/usr/bin/env python3
"""
Generate secure secret key for Railway deployment
"""
import secrets
import string

def generate_secure_key():
    """Generate a cryptographically secure secret key"""
    # Generate a secure 32-byte key
    key = secrets.token_urlsafe(32)
    
    print(f"🔐 Generated Secure Key:")
    print(f"   {key}")
    print(f"📏 Length: {len(key)} characters")
    print()
    print("⚠️  Save this key securely!")
    print("   - Add to Railway environment variables")
    print("   - Never commit to git")
    print("   - Store in password manager")
    
    return key

if __name__ == "__main__":
    generate_secure_key()
