import { Recipe } from "../components/recipe";

export const getAllRecipes = async () => {
	const recipes: Recipe[] = [];

	const rec1: Recipe = {
		id: 1,
		title: "Test",
		ingredients: ["1", "2"],
		directions: [
			"Combine all ingredients in a bowl",
			"Bake at 475 degrees",
		],
	};

	const rec2: Recipe = {
		id: 2,
		title: "Test2",
		ingredients: ["1", "2"],
		directions: [
			"Combine all ingredients in a bowl",
			"Bake at 475 degrees",
		],
	};

	recipes.push(rec1);
	recipes.push(rec2);
	return recipes;
};
