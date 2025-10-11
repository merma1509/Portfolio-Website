from pydantic import BaseModel

class ContactMessage(BaseModel):
    name: str
    email: str
    phone: str
    message: str

class NewsletterSubscriber(BaseModel):
    name: str
    email: str

class ProjectInquiry(BaseModel):
    project_name: str
    name: str
    email: str
    inquiry: str
    phone: str
    occupation: str

class Feedback(BaseModel):
    type: str
    content: str
    rating: int

class User(BaseModel):
    username: str
    email: str
    password: str

class Blog(BaseModel):
    title: str
    content: str
    author_id: int
