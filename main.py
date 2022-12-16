from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from srv.sentiment.sentiment_analysis import SentimentService

origins = [
    "http://localhost:5173",
]

load_dotenv(dotenv_path=Path('./config/local.env'))

app = FastAPI()
inf_sent = SentimentService()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/inference/{text}")
async def inference_sentiment(text: str):
    return {
        "sentiment": inf_sent.inference_sentiment(text)
    }
