import { Recipe } from "../components/recipe";
import RecipeCard from "./components/recipeCard";

interface Props {
	recipes: Recipe[];
}

const Recipes = (props: Props) => {
	return (
		<div>
			{props.recipes.map((entry: Recipe) => {
				return <RecipeCard recipe={entry} />;
			})}
		</div>
	);
};

export { Recipes };
