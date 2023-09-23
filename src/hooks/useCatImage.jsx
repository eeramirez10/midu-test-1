import { useEffect, useState } from 'react'
import { getCatImage } from '../services/facts'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 1).join(' ')
    getCatImage({ firstWord })
      .then(newCatImage => setImageUrl(newCatImage))
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}/${imageUrl}` }
}
