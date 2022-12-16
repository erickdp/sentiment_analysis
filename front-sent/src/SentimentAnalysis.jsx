import React, { useState } from 'react'
import { AddText } from './components/AddText';
import { SentimentGrid } from './components/SentimentGrid';

export const SentimentAnalysis = () => {

    const [texts, setTexts] = useState(["La IA es revolucionaria!"])

    const addNewText = (text) => {
        if (texts.includes(text)) return;
        setTexts([...texts, text])
    }

    return (
        <>
            <h1>Sentiment Analysis</h1>
            <AddText onNewText={addNewText} />
            {
                texts.map(text => <SentimentGrid key={text} newText={text} />)
            }
        </>
    )
}
