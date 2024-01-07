import { Recipe } from "../../components/recipe";
import "./recipeCard.css";

interface Props {
	recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
	return (
		<article className="card">
			<p className="title">{recipe.title}</p>
			<ul className="ingredients">
				{recipe.ingredients.map((entry) => {
					return <li className="ingredient">{entry}</li>;
				})}
			</ul>
			<ol className="directions">
				{recipe.directions.map((entry) => {
					return <li className="direction">{entry}</li>;
				})}
			</ol>
		</article>
	);
};

export default RecipeCard;
