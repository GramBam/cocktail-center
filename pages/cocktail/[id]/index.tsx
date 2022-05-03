import Image from 'next/image';
import Link from 'next/link';
import { server } from '../../../config'
import styles from '../../../styles/Cocktail.module.scss'

export interface CocktailProps {
  name: string;
  id: number;
  img: string;
  ingredients?: { name: string, amount: string }[] | { name: string, amount: null }[];
  instructions?: string;
  serveIn?: string
}

const Cocktail = ({ name, id, img, ingredients, instructions, serveIn }: CocktailProps) => {

  return (
    <div className={styles.item}>
      <div className={styles.itemNav}>
        {id !== 0
          ? <Link href='/cocktail/[id]' as={`/cocktail/${id - 1}`}><h1 className={styles.enabled}>Prev</h1></Link>
          : <h1 className={styles.disabled}>Prev</h1>
        }

        <Link href='/'><h1 className={styles.enabled}>Home</h1></Link>

        <Link href='/cocktail/[id]' as={`/cocktail/${id + 1}`}><h1 className={styles.enabled}>Next</h1></Link>
      </div>
      <h1 className={styles.itemTitle}>{name}</h1>
      <p className={styles.servedIn}>Served in a {serveIn}</p>
      <div className={styles.itemImageWrapper}>
        <Image src={img} alt={name} height='550px' width='550px' />
      </div>
      <div className={styles.ingredientsContainer}>
        {ingredients && ingredients.map((ing, i) => (
          <div className={styles.ingredients} key={i}>
            <p>{ing.amount}  <span>{ing.name}</span></p>
          </div>
        ))}
      </div>
      <div className={styles.itemInstructions}>
        <p>{instructions}</p>
      </div>
    </div>
  )
}

export const getStaticProps = async (context: { params: { id: number } }) => {
  const res = await fetch(`${server}/api/cocktails/${context.params.id}`)
  const cocktail = await res.json()
  const { name, id, img, ingredients, instructions, serveIn } = cocktail
  return {
    props: { name, id, img, ingredients, instructions, serveIn }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/cocktails`)
  const cocktails = await res.json()

  const ids = cocktails.map((cocktail: CocktailProps) => cocktail.id)
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default Cocktail