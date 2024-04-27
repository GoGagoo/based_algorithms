// Быстрая сортировка (Хоара)

const array = [0, 3, 2, 5, 6, 7, 8, 1, 9, 4, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 33]
let count = 0

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}
	let pivotIndex = Math.floor(arr.length / 2)
	let pivot = arr[pivotIndex]
	let less = []
	let greater = []

	for (let i = 0; i < arr.length; i++) {
		count += 1

		if (i == pivotIndex) continue

		if (arr[i] < pivot) {
			less.push(arr[i])
		} else {
			greater.push(arr[i])
		}
	}
	return [...quickSort(less), pivot,...quickSort(greater)]
}

console.log('length:', array.length)
console.log(quickSort(array))
console.log('count = ', count)