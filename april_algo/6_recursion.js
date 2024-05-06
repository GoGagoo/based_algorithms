// Рекурсивные функции

// Факториал
const factorial = (n) => {
	if (n === 1) return 1

	return n * factorial(n - 1)
}

// Числа Фибоначчи
const fibonacci = (n) => {
	if (n === 1 || n === 2) return 1

	return fibonacci(n - 1) + fibonacci(n - 2)
}