import { Header } from "./components/header.tsx";
import { Recipes } from "./views/recipes.tsx";
import { useEffect, useState } from "react";
import { getAllRecipes } from "./api/getRecipes.ts";

export function App() {
	const [recipes, setRecipes] = useState([]);

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
