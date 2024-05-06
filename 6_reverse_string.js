// Записать строку (символы строки) в обратном порядке
const myStr = 'pizza'

// with for loop
const reverseString = (str) => {
	const reversed = []

	for (let i = str.length - 1; i >= 0; i--) {
		reversed.push(str[i])
	}

	return reversed.join('')
}

const reverseResult1 = reverseString(myStr);
console.log(reverseResult1)

// with split() & reverse()

const reverseStr = (str) => {
	return str.split('').reverse().join('')
}

const reverseResult2 = reverseStr(myStr);
console.log(reverseResult2)