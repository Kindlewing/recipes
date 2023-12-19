import { useEffect, useState } from "react";
import { Recipe } from "./recipe";
import data from "../recipes.json";

const RecipeCard = () => {
	const [recipes, setRecipes] = useState<Array<Recipe> | null>(null);

	useEffect(() => {
		const json = JSON.parse(JSON.stringify(data));
		const recipes: Array<Recipe> = [];

		console.log(json);
		setRecipes(recipes);
	}, []);

	return (
		<article className="card">
			<p className="title"></p>
		</article>
	);
};

export default RecipeCard;
