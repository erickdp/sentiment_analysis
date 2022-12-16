import React, { useState } from 'react'

export const AddText = ({ onNewText }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => setInputValue(target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewText(inputValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    value={inputValue}
                    placeholder="Ingrese texto a analizar"
                    type="text"
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}
