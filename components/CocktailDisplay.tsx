import Image from 'next/image';
import styles from '../styles/Cocktail.module.scss'
import Link from 'next/link'

interface CocktailDisplayProps {
  data: {
    name: string;
    id: number;
    img: string;
    ingredients: { name: string, amount: string }[] | { name: string, amount: null }[];
    instructions: string;
    serveIn: string
  }
}

function CocktailDisplay({ data }: any) {

  const { name, id, img, ingredients, instructions, serveIn } = data

  const handleClick = () => {
    console.log(data);

  }

  return (
    <Link href='/cocktail/[id]' as={`/cocktail/${id}`}>
      <div className={styles.displayContainer} onClick={handleClick}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.imageWrapper}>
          <Image src={img} height='200px' width='200px' alt={name} />
        </div>
      </div>
    </Link>
  )
}
export default CocktailDisplay