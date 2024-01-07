import { Recipe } from "../../components/recipe";
import "./recipeCard.css";

interface Props {
	recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
	return (
		<article className="card">
			<p className="title">{recipe.title}</p>
		</article>
	);
};

export default RecipeCard;
