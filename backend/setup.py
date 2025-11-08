from setuptools import setup, find_packages

setup(
    name="portfolio_backend",
    version="0.1",
    packages=find_packages(),
    install_requires=[
        'fastapi',
        'uvicorn',
        'psycopg2-binary',
        'python-dotenv',
    ],
)