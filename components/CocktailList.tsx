import CocktailDisplay from "./CocktailDisplay"
import styles from '../styles/Cocktail.module.scss'
import { CocktailProps } from "../pages/cocktail/[id]"
import Link from "next/link"

function CocktailList({ cocktails }: any) {

  return (
    <>
      <div className={styles.itemNav}>
        <Link href='/cocktail/[id]' as={`/cocktail/${Math.floor(Math.random() * cocktails.length)}`}>
          <h2 className={styles.enabled}>Get Random Cocktail</h2>
        </Link>
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