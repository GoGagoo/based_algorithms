// написать функцию, отвечающая требованиям:

// 1) Функция принимает 2 аргумента - массив из уникальных целых чисел и сумму в виде целого числа.
// 2) Если сумма двух любых чисел массива из 1-го аргумента равна числу, которое приходит 2-м аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке.
// 3) Если решения нет, вернуть пустой массив.

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6]
const sum = 10

const findPairs = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		const numFirst = nums[i]

		for (let j = i + 1; j < nums.length; j++) {
			const numSecond = nums[j]

			if (numFirst + numSecond === target) {
				return [numFirst, numSecond]
			}
		}
	}
	return []
}

const result = findPairs(myNumbers, sum)
console.log(result)
