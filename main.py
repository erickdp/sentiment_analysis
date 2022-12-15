from fastapi import FastAPI

from srv.sentiment.sentiment_analysis import Sentiment_Service

app = FastAPI()
inf_sent = Sentiment_Service()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/inference/{text}")
async def inference_sentiment(text: str):
    return {
        "sentiment": inf_sent.inference_sentiment(text)
    }
