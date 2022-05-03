import CocktailDisplay from "./CocktailDisplay"
import styles from '../styles/Cocktail.module.scss'

function CocktailList({ cocktails }: any) {
  return (
    <div className={styles.list}>
      {cocktails.map((cocktail: any) => (
        <CocktailDisplay data={cocktail} key={cocktail.id} />
      ))}
    </div>
  )
}
export default CocktailList