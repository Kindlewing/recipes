import { Recipe } from "../recipe";

const RecipeCard = (recipe: Recipe) => {
	return (
		<article className="card">
			<p className="title">{recipe.title}</p>
		</article>
	);
};

export default RecipeCard;
