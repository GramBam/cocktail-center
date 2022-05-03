import CocktailDisplay from "./CocktailDisplay"
import styles from '../styles/Cocktail.module.scss'
import { CocktailProps } from "../pages/cocktail/[id]"

function CocktailList({ cocktails }: any) {

  return (
    <div className={styles.list}>
      {cocktails.map((cocktail: CocktailProps) => (
        <CocktailDisplay name={cocktail.name} key={cocktail.id} id={cocktail.id} img={cocktail.img} />
      ))}
    </div>
  )
}
export default CocktailList