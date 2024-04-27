// Сортировка пузырьком

const array = [0, 3, 2, 5, 6, 7, 8, 1, 9, 4, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 33]
let count = 0

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j + 1] < arr[j]) {
				let tmp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
			}
			count += 1
		}
	}
	return arr
}

console.log('length:', array.length)
console.log(bubbleSort(array))
console.log('count = ', count)