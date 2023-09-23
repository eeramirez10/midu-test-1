import '../App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFatc'

export const App = () => {
  const { fact, refreshFact } = useCatFact()

  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1> App de gatitos </h1>
      {fact && <p>{fact}</p>}
      <button onClick={handleClick}> Get new Fact</button>
      <section>
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`} />}
      </section>
    </main>
  )
}
