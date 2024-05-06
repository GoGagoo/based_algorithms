// Создать функцию, которая группирует студентов по возрасту.

const students = [
	{ name: 'alex', age: 20 },
	{ name: 'mike', age: 24 },
	{ name: 'masha', age: 20 },
	{ name: 'stas', age: 18 },
]

const grouped = {}

students.forEach((s) => {
	if (!grouped[s.age]) {
		grouped[s.age] = [s]
	} else {
		grouped[s.age].push(s)
	}
})

console.log(grouped)
