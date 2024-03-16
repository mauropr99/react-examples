import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useCatFact } from './hooks/useCatFact'

export default function App () {
    const {fact, refreshFact} = useCatFact()
    const {imgUrl} = useCatImg({fact})

    const handleClick = () => {
        refreshFact()
    }

    return (
        <main className="cat-card">
            <h1>My technical interview</h1>
            <button className="random-button" onClick={handleClick}>Get new fact</button>
            <section className="cat-card-section">
                {fact && <p>{fact}</p>}
                {imgUrl && <img src={imgUrl} alt='Cat random img'></img>}
            </section>
        </main>
    )
}