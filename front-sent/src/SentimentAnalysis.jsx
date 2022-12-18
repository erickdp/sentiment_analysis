import React, { useState } from 'react'
import { AddText } from './components/AddText';
import { SentimentGrid } from './components/SentimentGrid';
import golednLogo from './helper/goldencompanies.png'

export const SentimentAnalysis = () => {

    const [texts, setTexts] = useState(["La IA es revolucionaria!"])

    const addNewText = (text) => {
        if (texts.includes(text)) return;
        setTexts([...texts, text])
    }

    return (
        <>
            <div className='container text-center mb-5'>
            <h1 className='mt-5'>Sentiment Analysis</h1>
            <span>by</span><br></br>
            <img src={golednLogo} style={{width: 20 + 'rem', marginBottom: 3 + 'rem'}} ></img>
                <AddText onNewText={addNewText} />
            </div>
            
            <div className='container text-center'>
                <div className="row">
                    {
                        texts.map(text => <SentimentGrid key={text} newText={text} />)
                    }
                </div>
            </div>

        </>
    )
}
