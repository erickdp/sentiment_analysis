from fastapi import FastAPI

from srv.sentiment.sentiment_analysis import SentimentService

app = FastAPI()
inf_sent = SentimentService()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/inference/{text}")
async def inference_sentiment(text: str):
    return {
        "sentiment": inf_sent.inference_sentiment(text)
    }
