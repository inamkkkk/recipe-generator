const Recipe = require('../models/recipe');

const recipeData = [
    {
        id: 1,
        name: 'Chicken Stir-Fry',
        ingredients: ['chicken', 'rice', 'soy sauce', 'vegetables'],
        instructions: 'Stir-fry chicken and vegetables, then add soy sauce and serve over rice.'
    },
    {
        id: 2,
        name: 'Pasta Carbonara',
        ingredients: ['pasta', 'eggs', 'bacon', 'parmesan cheese'],
        instructions: 'Cook pasta. Mix eggs, bacon, and parmesan. Combine with pasta.'
    },
    {
        id: 3,
        name: 'Vegetable Curry',
        ingredients: ['vegetables', 'coconut milk', 'curry paste', 'rice'],
        instructions: 'Cook vegetables in coconut milk and curry paste. Serve with rice.'
    }
];


exports.generateRecipe = (req, res) => {
    const { ingredients } = req.body;

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
        return res.status(400).json({ message: 'Ingredients are required and must be a non-empty array.' });
    }

    const possibleRecipes = recipeData.filter(recipe =>
        ingredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );

    if (possibleRecipes.length === 0) {
        return res.status(404).json({ message: 'No recipes found matching the provided ingredients.' });
    }

    const randomIndex = Math.floor(Math.random() * possibleRecipes.length);
    const selectedRecipe = possibleRecipes[randomIndex];

    res.json(selectedRecipe);
};
