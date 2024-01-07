export const getAllRecipes = async () => {
	const recipes: Recipe = [];

	const rec1: Recipe = {
		id: 1,
		title: "Test",
		ingredients: ["1", "2"],
	};

	const rec2: Recipe = {
		id: 2,
		title: "Test2",
		ingredients: ["1", "2"],
	};

	recipes.push(rec1);
	recipes.push(rec2);
	return recipes;
};
