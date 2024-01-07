import { Header } from "./views/components/header.tsx";
import { Recipe } from "./recipe.ts";
import RecipeCard from "./views/components/recipeCard.tsx";

function App() {
	const recipe: Recipe = {
		title: "Test",
		ingredients: ["1. 2 tsp olive oil"],
	};

	return (
		<>
			<Header />
			<RecipeCard recipe={recipe} />
		</>
	);
}

export default App;
