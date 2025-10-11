#!/usr/bin/env python3

import sys
import os
sys.path.append('.')

try:
    import database
    import psycopg2

    print("Resetting database tables...")

    # Drop existing tables
    conn = database.get_db()
    with conn.cursor() as cur:
        tables = ['contact_messages', 'newsletter_subscribers', 'project_inquiries', 'feedback', 'users', 'blogs']
        for table in tables:
            try:
                cur.execute(f'DROP TABLE IF EXISTS {table} CASCADE')
                print(f'✓ Dropped table: {table}')
            except Exception as e:
                print(f'✗ Error dropping {table}: {e}')

    conn.commit()
    conn.close()

    # Recreate tables
    print("\nRecreating tables...")
    database.init_db()
    print("✓ Database tables recreated successfully!")

except ImportError as e:
    print(f"Import error: {e}")
    print("Please make sure all dependencies are installed: pip install -r requirements.txt")
except Exception as e:
    print(f"Error: {e}")
