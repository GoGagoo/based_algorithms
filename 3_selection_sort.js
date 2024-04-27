// Сортировка выбором

const array = [0, 3, 2, 5, 6, 7, 8, 1, 9, 4, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 33]
let count = 0

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexMin = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] < arr[indexMin]) {
				indexMin = j
			}
			count += 1
		}
		let tmp = arr[i]
		arr[i] = arr[indexMin]
		arr[indexMin] = tmp
	}
	return arr
}

console.log(selectionSort(array))
console.log(array.length)
console.log('count = ', count)