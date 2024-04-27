function cashFunc(fn) {
	const cash = {}
	return function (n) {
		if (cash[n]) {
			console.log('Взято из кеша', cash[n])
			return cash[n]
		}
		let result = fn(n)
		console.log('Посчитала функция = ', result)
		cash[n] = result
		return result
	}
}

function factorial(n) {
	let result = 1
	while (n != 1) {
		result *= n
		n -= 1
	}
	return result
}

const cashFactorial = cashFunc(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(2)
cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
