// Создать массив который содержит только уникальные значения исходного массива.

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// with Set
const uniqueFruits = Array.from(new Set(fruits));
console.log(uniqueFruits)


// with empty object and forEach loop
const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const unique = {}

myFruits.forEach(f => {
	unique[f] = true
})

const uniqueArr = Object.keys(unique)
console.log(uniqueArr)