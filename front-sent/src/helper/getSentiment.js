export const getSentiment = async (text) => {
    const url = `http://localhost:8000/inference/${text}`
    const resp = await fetch(url);
    const { sentiment } = await resp.json();

    return ({
        sent: sentiment
    })
}