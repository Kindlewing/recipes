import { Recipe } from "../../components/recipe";
import "./recipeCard.css";

interface Props {
	recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
	return (
		<article className="card">
			<header>
				<p className="title">{recipe.title}</p>
			</header>
			<section className="content">
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
			</section>
		</article>
	);
};

export default RecipeCard;
