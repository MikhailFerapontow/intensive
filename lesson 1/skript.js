function myfirstapp (name, age) {
	alert("Привет, меня зовут " + name + " и свою первую программу я написал в " + age + " лет!" )

	function showSkills () {
		let answers = []
		let skills = [
		'html',
		'css',
		'Pascal abc',
		'счетом до 10'
		];
		for (let i = 0; i < skills.length; i++){
			answers[i] = document.write('Я владею ' + skills[i], "<br>") 
		}
	}
	showSkills();
	function checkAge () {
		if (age > 18) {
			alert("Вам больше 18 лет, все нормально, проходите.")
		} else {
			alert("и лучше уходите молодой человек, вам только " + age)
		}
	}
	checkAge();
	let num = prompt('Какое число возвести в квадрат?')
	function clacPow (num) {
		console.log('Квадрат числа: ' + num * num)
	}
	clacPow(num)
}
myfirstapp('Михаил', 16)