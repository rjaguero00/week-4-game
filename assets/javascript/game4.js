
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
		restart();

		$("#crystal1").on("click", function() {
		score+=crystal1Value
		if (randomNumber == score) {
			addWin();

		}
		if (randomNumber < score) {
			addLoss();
		}

		$('#ranNum').html(score)
		console.log(score)
		});

		$("#crystal2").on("click", function() {
		score+=crystal2Value
		if (randomNumber == score) {
			addWin();
		}
		if (randomNumber < score) {
			addLoss();
		}

		$('#ranNum').html(score)
		console.log(score)
		});

		$("#crystal3").on("click", function() {
		score+=crystal3Value
		if (randomNumber == score) {
			addWin();
		}
		if (randomNumber < score) {
			addLoss();
		}

		$('#ranNum').html(score)
		console.log(score)
		});

		$("#crystal4").on("click", function() {
		score+=crystal4Value
		if (randomNumber == score) {
			addWin();
		}
		if (randomNumber < score) {
			addLoss();
		}

		$('#ranNum').html(score)
		console.log(score)
		});

		function restart(){
			// get new random
			randomNumber = Math.floor(Math.random () * 50) + 1;
			console.log(randomNumber)

			$("#currentGuess").html(randomNumber);
			// reset score to 0
			score = 0;
			// get new random number for each gem
			crystal1Value = Math.floor(Math.random() * 10) + 1;
			crystal2Value = Math.floor(Math.random() * 10) + 1;
			crystal3Value = Math.floor(Math.random() * 10) + 1;
			crystal4Value = Math.floor(Math.random() * 10) + 1;
		}
		function addWin(){
			wins++;
			alert('You win!')
			restart()
			$('#winsNumber').html(wins)
		}

		function addLoss () {
			losses++;
			alert('You Lose!')
			restart()
			$('#lossesNumber').html(losses)
		}


	});			