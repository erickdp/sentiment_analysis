import React, { useEffect, useState } from 'react'
import { getSentiment } from '../helper/getSentiment'
import happyEmoji from '../helper/happy2.png';
import neutralEmoji from '../helper/neutral.png';
import ungryEmoji from '../helper/enojado.png';

export const SentimentGrid = ({ newText }) => {

    const [sentiment, setSentiment] = useState(neutralEmoji)
    const [carBg, setCarBg] = useState('border-primary')

    const getNewSentiment = async () => {
        const { sent } = await getSentiment(newText);
        if (sent == 1)
            setSentiment(happyEmoji), setCarBg('text-bg-success')
        else if (sent == -1)
            setSentiment(ungryEmoji), setCarBg('text-bg-danger')
        else
            setSentiment(neutralEmoji), setCarBg('text-bg-light')
    }

    useEffect(() => {
        getNewSentiment();
    }, [])

    return (
        <>
            <div className='col-4'>
                <div className={"card text-center mb-3 " + carBg} style={{ width: 25 + 'em' }}>
                    <center><img src={sentiment} style={{width: 95 + 'px'}}  className="card-img-top" alt="..." /></center>
                    <div className="card-body">
                        <p className="card-text">{newText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
