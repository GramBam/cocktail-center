import { server } from '../../../config'
const Cocktail = ({ cocktail }) => {
  return <div>This is a {cocktail.name}</div>
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/cocktails/${context.params.id}`)
  const cocktail = await res.json()
  return {
    props: { cocktail }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/cocktails`)
  const cocktails = await res.json()

  const ids = cocktails.map(cocktail => cocktail.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default Cocktail