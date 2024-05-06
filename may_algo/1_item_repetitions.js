// Определить сколько раз каждый элемент встречается в массиве.

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const count = {}

fruits.forEach(f => {
	if (!count[f]) {
		count[f] = 1;
	} else {
		count[f]++
	}
})

console.log(count)