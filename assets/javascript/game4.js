
	$(document).ready(function() {
		var wins = 0;
		var losses = 0;
		var score = 0;
		var randomNumber = Math.floor(Math.random () * 50) + 1;
		console.log(randomNumber)
		var crystal1Value = Math.floor(Math.random() * 10) + 1;
		var crystal2Value = Math.floor(Math.random() * 10) + 1;
		var crystal3Value = Math.floor(Math.random() * 10) + 1;
		var crystal4Value = Math.floor(Math.random() * 10) + 1;

		$("#crystal1").on("click", function() {
		score+=crystal1Value
		if (randomNumber == score) {
			wins++;
			alert('You win!')
		}
		if (randomNumber < score) {
			losses++;
			alert('You Lose!')
		}
		console.log(score)
		});

		$("#crystal2").on("click", function() {
		score+=crystal2Value
		if (randomNumber == score) {
			wins++;
			alert('You win!')
		}
		if (randomNumber < score) {
			losses++;
			alert('You Lose!')
		}
		console.log(score)
		});

		$("#crystal3").on("click", function() {
		score+=crystal3Value
		if (randomNumber == score) {
			wins++;
			alert('You win!')
		}
		if (randomNumber < score) {
			losses++;
			alert('You Lose!')
		}
		console.log(score)
		});

		$("#crystal4").on("click", function() {
		score+=crystal4Value
		if (randomNumber == score) {
			wins++;
			alert('You win!')
		}
		if (randomNumber < score) {
			losses++;
			alert('You Lose!')
		}
		console.log(score)
		});



	});		