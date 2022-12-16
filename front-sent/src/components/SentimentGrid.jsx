import React, { useEffect, useState } from 'react'
import { getSentiment } from '../helper/getSentiment'

export const SentimentGrid = ({ newText }) => {

    const [sentiment, setSentiment] = useState('')

    const getNewSentiment = async () => {
        const { sent } = await getSentiment(newText);
        if(sent == 1)
            setSentiment('Positivo')
        else if(sent == -1)
            setSentiment('Negativo')
        else
            setSentiment('Neutro')
    }

    useEffect(() => {
        getNewSentiment();
    }, [])

    return (
        <>
            <h2>{newText}</h2>
            <div>{sentiment}</div>
        </>
    )
}
