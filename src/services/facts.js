const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(res => {
      const { fact } = res
      return fact
    })
}

export const getCatImage = async ({ firstWord }) => {
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
