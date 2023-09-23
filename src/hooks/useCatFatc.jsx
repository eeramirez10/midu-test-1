import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'
export const useCatFact = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }, [])

  const refreshFact = () => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }

  return { fact, refreshFact }
}
