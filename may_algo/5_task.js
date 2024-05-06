// Получить единый массив из любимых пицц каждого друга

const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];

const pizzas = friends.reduce((acc, current) => {
	return [...acc, ...current.pizzas]
}, [])

console.log(pizzas)