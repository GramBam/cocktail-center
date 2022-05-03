import Image from 'next/image';
import styles from '../styles/Cocktail.module.scss'
import Link from 'next/link'
import { CocktailProps } from '../pages/cocktail/[id]';

function CocktailDisplay({ name, img, id }: CocktailProps) {


  return (
    <Link href='/cocktail/[id]' as={`/cocktail/${id}`}>
      <div className={styles.displayContainer}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.imageWrapper}>
          <Image src={img} height='200px' width='200px' alt={name} loading='lazy' />
        </div>
      </div>
    </Link>
  )
}
export default CocktailDisplay