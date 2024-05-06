// Бинарный поиск. Итеративный поиск (цикл)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

function binarySearch(arr, item) {
	let start = 0
	let end = array.length
	let middle
	let found = false
	let position = -1
	while (found === false && start <= end) {
		count += 1
		middle = Math.floor((start + end) / 2)
		if (arr[middle] === item) {
			found = true
			return middle
		}
		if (item < arr[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
	}
	return position
}

// Бинарный поиск. Рекурсивный поиск

function recursiveBinarySearch(arr, item, start, end) {
	let middle = Math.floor((start + end) / 2)
	count += 1
	if (item === arr[middle]) {
		return middle
	}
	if (item < arr[middle]) {
		return recursiveBinarySearch(arr, item, start, middle - 1)
	} else {
		return recursiveBinarySearch(arr, item, middle + 1, end)
	}
}

console.log(recursiveBinarySearch(array, 14, 0, array.length))
// console.log(binarySearch(array, 2))
console.log(count)