import { Header } from "./components/header.tsx";
import { Recipe } from "./components/recipe.ts";
import { Recipes } from "./views/recipes.tsx";
import { useEffect, useState } from "react";
import { getAllRecipes } from "./api/getRecipes.ts";

export function App() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);

	useEffect(() => {
		getAllRecipes().then((res) => {
			setRecipes(res);
		});
	}, [recipes]);

	return (
		<>
			<Header />
			<Recipes recipes={recipes} />
		</>
	);
}

export default App;
