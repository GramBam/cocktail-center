import data from '../../../data.json'

export default function handler({ query: { id } }, res) {
  const filtered = data.find(cocktail => cocktail.id === Number(id))
  if (filtered) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: `No cocktail with ID of ${id}` })
  }
}