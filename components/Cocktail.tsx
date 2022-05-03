interface CocktailProps {
  data: {
    name: string;
    id: number;
    img: string;
    ingredients: { name: string, amount: string }[] | { name: string, amount: null }[];
    instructions: string;
    serveIn: string
  }
}

function Cocktail() {
  return (
    <div>Cocktail</div>
  )
}
export default Cocktail