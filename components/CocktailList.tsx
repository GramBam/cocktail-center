import CocktailDisplay from "./CocktailDisplay"
import styles from '../styles/Cocktail.module.scss'
import { CocktailProps } from "../pages/cocktail/[id]"
import Link from "next/link"

function CocktailList({ cocktails }: { cocktails: CocktailProps[] }) {

  // let test = cocktails.filter(cocktail => cocktail.ingredients.some((i) => i.name === 'Gin'))
  // console.log(test);

  return (
    <>
      <div className={styles.itemNav}>
        <Link href='/cocktail/[id]' as={`/cocktail/${Math.floor(Math.random() * cocktails.length)}`}>
          <h2 className={styles.enabled}>Find Random Cocktail</h2>
        </Link>
        {/* <h2 className={styles.enabled}>Find Cocktails by Ingredients</h2> */}
      </div>
      <div className={styles.list}>
        {cocktails.map((cocktail: CocktailProps) => (
          <CocktailDisplay name={cocktail.name} key={cocktail.id} id={cocktail.id} img={cocktail.img} />
        ))}
      </div>
    </>

  )
}
export default CocktailList