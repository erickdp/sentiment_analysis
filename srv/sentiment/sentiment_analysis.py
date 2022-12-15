import os
from optimum.pipelines import TextClassificationPipeline
from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import AutoTokenizer, AutoModelForSequenceClassification


class Sentiment_Service:
    @staticmethod
    def __load_pipeline(model_id: str, format: str):

        model, new_model, token = None, True, os.getenv('API_HF_TOKEN')
        if os.path.exists(model_id):
            new_model = False
            model_id = './' + model_id

        tokenizer = AutoTokenizer.from_pretrained(model_id, use_auth_token=token)

        if format == 'onnx':
            model = ORTModelForSequenceClassification.from_pretrained(
                model_id,
                use_auth_token=token
            )
        else:
            model = AutoModelForSequenceClassification(
                model_id,
                use_auth_token=token
            )

        tokenizer.save_pretrained(model_id), model.save_pretrained(model_id) if new_model else None

        return TextClassificationPipeline(model=model, tokenizer=tokenizer)

    def __init__(self):
        self.__analysis = Sentiment_Service.__load_pipeline(
            'gg-ai/q-o-distill',
            'onnx'
        )

    def inference_sentiment(self, text: str):
        label = self.__analysis(text)[0]['label']
        return 1 if label == 'LABEL_1' \
            else 0 if label == 'LABEL_0' \
            else -1 if label == 'LABEL_2' \
            else None
