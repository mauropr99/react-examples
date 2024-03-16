import { useEffect, useState } from "react"
import './App.css'

const FACT_API_URL = 'https://catfact.ninja/fact'
const IMG_API_URL = 'https://cataas.com/'

export default function App () {

    const [fact, setFact] = useState();
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        fetch(FACT_API_URL)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])  

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ').slice(0, 1)
        fetch(`${IMG_API_URL}cat/says/${firstWord}?size=50`)
            .then(response => {
                const {url} = response
                setImgUrl(url)
            })    
    }, [fact])

    return (
        <main className="cat-card">
            <h1>My technical interview</h1>
            <section className="cat-card-section">
                {fact && <p>{fact}</p>}
                {imgUrl && <img src={imgUrl} alt='Cat random img'></img>}
            </section>
        </main>
    )
}