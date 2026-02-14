#!/usr/bin/env python3
"""
Debug Railway deployment issues
"""
import subprocess
import sys
import os

def check_railway_status():
    """Check current Railway project status"""
    try:
        # Check if we're in Railway environment
        railway_env = os.environ.get('RAILWAY_ENVIRONMENT', 'local')
        print(f"🔍 Environment: {railway_env}")
        
        # Check Railway project info
        result = subprocess.run(['npx', 'railway', 'status'], 
                              capture_output=True, text=True)
        print(f"📊 Railway Status:")
        print(result.stdout)
        
        # Check current directory
        current_dir = os.getcwd()
        print(f"📁 Current directory: {current_dir}")
        
        # List files
        files = os.listdir('.')
        print(f"📋 Files in directory:")
        for file in files[:10]:  # Show first 10 files
            print(f"   - {file}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error checking status: {e}")
        return False

def check_build_context():
    """Analyze what might be causing build issues"""
    print("\n🔍 Build Context Analysis:")
    
    # Check for common issues
    issues = []
    
    # Check if there are conflicting files
    if os.path.exists('package.json') and os.path.exists('railway.json'):
        issues.append("⚠️  Both package.json and railway.json exist")
    
    # Check for node_modules (shouldn't be in Python backend)
    if os.path.exists('node_modules'):
        issues.append("⚠️  node_modules directory found")
    
    # Check requirements files
    if os.path.exists('requirements.txt'):
        with open('requirements.txt', 'r') as f:
            content = f.read()
            if 'pytest' in content:
                issues.append("⚠️  Test dependencies in requirements.txt")
    
    if issues:
        print("🚨 Potential Issues Found:")
        for issue in issues:
            print(f"   {issue}")
    else:
        print("✅ No obvious configuration issues found")

if __name__ == "__main__":
    print("🔍 Railway Deployment Debug Tool")
    print("=" * 50)
    
    check_railway_status()
    check_build_context()
    
    print("\n" + "=" * 50)
    print("🛠️  Recommendations:")
    print("1. Try Railway dashboard deployment instead")
    print("2. Check Railway service status")
    print("3. Verify environment variables")
    print("4. Consider GitHub integration approach")
