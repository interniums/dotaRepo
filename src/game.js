import dota from './images/dota.jpg'
import secret from './images/secretShopRemoved.png'
import goldImg from './images/goldImg.jpg'
import plus from './images/plus.svg'
import { userGold } from "./mainpage"
import mainPage from "./mainpage"

function earnPage() {
	const content = document.getElementById('content')
	const backgroundImage = document.createElement('img')
	const secretShop = document.createElement('img')
	const goldCountContainer = document.createElement('div')
	const goldCountImage = document.createElement('img')
	const goldPlusButton = document.createElement('img')
	const cartButton = document.createElement('img')
	const goldCountText = document.createElement('p')
	const descriptionAddToCartButton = document.createElement('button')
	const dialogArea = document.createElement('div')
	const gameContainerWhereCircles = document.createElement('div')
	const gameContainer = document.createElement('div')
	const gamePlayArea = document.createElement('div')
	const playButton = document.createElement('button')
	const section = document.createElement('section')
	const gameMainContainer = document.createElement('div')
	const disclaimer = document.createElement('div')
	const disclaimerTextContainer = document.createElement('div')
	const disclaimerText1 = document.createElement('p')
	const disclaimerText2 = document.createElement('p')
	const disclaimerText3 = document.createElement('p')
	const disclaimerButton = document.createElement('button')
	const gameScoreText = document.createElement('p')
	const startGameButton = document.createElement('button')
	let position = 0

	content.appendChild(disclaimer)
	disclaimer.appendChild(disclaimerTextContainer)
	disclaimerTextContainer.appendChild(disclaimerText1)
	disclaimerTextContainer.appendChild(disclaimerText2)
	disclaimerTextContainer.appendChild(disclaimerText3)
	disclaimer.appendChild(disclaimerButton)

	function doomWork() {
		playButton.classList.add('fade-in')
		playButton.classList.add('playButton')
		playButton.textContent = 'play'
		disclaimerButton.addEventListener('click', event=> {
			disclaimer.classList.remove('slide-in-top')
			disclaimer.classList.add('slide-out-top')			
		})

		disclaimer.classList.add('disclaimer')
		disclaimerTextContainer.classList.add('disclaimerTextContainer')
		disclaimerButton.classList.add('disclaimerButton')
		disclaimerButton.textContent = 'ok'
		disclaimerText1.textContent = 'there is a game to earn some gold.'
		disclaimerText2.textContent = 'you should click on appearing eyes as fast as possible.'
		disclaimerText3.textContent = 'faster u are - more gold u earn.'

		playButton.addEventListener('click', event=> {
			if (event) {
				if (position == 0) {
					disclaimer.classList.remove('fade-out')
					disclaimer.classList.add('slide-in-top')
					disclaimer.style.visibility = 'visible'
					playButton.textContent = 'exit'
					position = 1
					secretShop.style.animation = ''
					secretShop.style.animation = 'animateSecretBack 1s forwards'
					dialogArea.classList.remove('slide-in-bottom')
					dialogArea.classList.add('slide-out-bottom')
					goldCountContainer.classList.remove('slide-in-right')
					goldCountContainer.classList.add('slide-out-right')
					playButton.style.transform = 'scale(40%)'
					playButton.style.bottom = '-2%'
					playButton.style.right = '-4%'
					showGame('show')
				} else if (position == 1) {
					playButton.textContent = 'play'
					position = 0
					dialogArea.classList.remove('slide-out-bottom')
					dialogArea.classList.add('slide-in-bottom')
					goldCountContainer.classList.remove('slide-out-right')
					goldCountContainer.classList.add('slide-in-right')
					playButton.style.transform = 'scale(100%)'
					playButton.style.bottom = '40%'
					playButton.style.right = '40%'
					showGame('hide')
					disclaimer.classList.remove('slide-in-top')
					disclaimer.classList.add('slide-out-top')
				}
			}
		})

		backgroundImage.classList.add('backgroundImage')
		backgroundImage.setAttribute('src', dota)
		secretShop.classList.add('secretShop')
		secretShop.setAttribute('src', secret)

		secretShop.addEventListener('click', event => {
			giveReverseAnimation()
			setTimeout(clear, 1001)
			setTimeout(function() {
				mainPage('false');
			}, 1002)
		})

		goldCountContainer.classList.add('goldCountContainer')
		goldCountImage.classList.add('goldCountImage')
		goldCountImage.src = goldImg
		goldPlusButton.classList.add('goldPlusButton')
		goldPlusButton.setAttribute('src', plus)
		cartButton.classList.add('cartButton')
		goldCountText.classList.add('goldCountText')
		goldCountText.textContent = `${userGold}`
		goldCountContainer.classList.add('slide-in-right')
		dialogArea.classList.add('dialogArea')
		dialogArea.textContent = 'here u can earn some gold, just play!'
	}

	function createGame() {
		const gameInformationContainer = document.createElement('div')
		const gameScoreContainer = document.createElement('div')
		const gameTimeContainer = document.createElement('div')
		const gameTimeText = document.createElement('p')
		const gameButtonsContainer = document.createElement('div')
		const gameButton1 = document.createElement('button')
		const gameButton2 = document.createElement('button')
		const gameButton3 = document.createElement('button')
		const gameButton4 = document.createElement('button')
		const gameButton5 = document.createElement('button')
		const gameDescription = document.createElement('div')
		const gameDescriptionText = document.createElement('p')
		const gameInformationScoreName = document.createElement('p')
		const gameInformationTimeName = document.createElement('p')

		gameMainContainer.classList.add('gameMainContainer')
		gameInformationContainer.classList.add('gameInformationContainer')
		gameInformationScoreName.classList.add('gameInformationScoreName')
		gameInformationScoreName.textContent = 'score:'
		gameInformationTimeName.classList.add('gameInformationTimeName')
		gameInformationTimeName.textContent = 'lives:'
		gameScoreContainer.classList.add('gameScoreContainer')
		gameScoreText.classList.add('gameScoreText')
		gameScoreText.textContent = '0'
		startGameButton.classList.add('startGameButton')
		startGameButton.textContent = 'start game'
		gameTimeContainer.classList.add('gameTimeContainer')
		gameTimeText.classList.add('gameTimeText')
		gameTimeText.textContent = '30,52'
		gameContainer.classList.add('gameContainer')
		gameContainerWhereCircles.classList.add('gameContainerWhereCircles')
		gameButtonsContainer.classList.add('gameButtonsContainer')
		gameButton1.classList.add('gameButton1')
		gameButton1.textContent = '1 speed'
		gameButton2.classList.add('gameButton2')
		gameButton2.textContent = '2 speed'
		gameButton3.classList.add('gameButton3')
		gameButton3.textContent = '3 speed'
		gameButton4.classList.add('gameButton4')
		gameButton4.textContent = '4 speed'
		gameButton5.classList.add('gameButton5')
		gameButton5.textContent = '5 speed'
		gameDescription.classList.add('gameDescription')
		gameDescriptionText.classList.add('gameDescriptionText')

			content.appendChild(gameMainContainer)
			gameMainContainer.appendChild(gameInformationContainer)
			gameInformationContainer.appendChild(gameInformationScoreName)
			gameInformationContainer.appendChild(gameScoreContainer)
			gameScoreContainer.appendChild(gameScoreText)
			gameInformationContainer.appendChild(startGameButton)
			gameInformationContainer.appendChild(gameInformationTimeName)
			gameInformationContainer.appendChild(gameTimeContainer)
			gameTimeContainer.appendChild(gameTimeText)
			gameMainContainer.appendChild(gameContainer)
			gameContainer.appendChild(gameContainerWhereCircles)
			gameMainContainer.appendChild(gameButtonsContainer)
			gameButtonsContainer.appendChild(gameButton1)
			gameButtonsContainer.appendChild(gameButton2)
			gameButtonsContainer.appendChild(gameButton3)
			gameButtonsContainer.appendChild(gameButton4)
			gameButtonsContainer.appendChild(gameButton5)
	}
	createGame()

	function showGame(condition) {
		if (condition == 'show') {
			section.remove()
			gameMainContainer.style.visibility = 'visible'
			gameMainContainer.classList.add('slide-in-top')
			startGame('1')
		} else if (condition == 'hide') {
			setTimeout(() => {
				section.classList.add('fade-in')
				createSpans()
			}, 550);
			console.log('hide')
			gameMainContainer.classList.remove('slide-in-top')
			gameMainContainer.classList.add('slide-out-top')
			secretShop.style.animation = ''
			secretShop
		}
	}

	function startGame(speed) {
		let position = 'start'
		let interval
		let score = 0
		let time = 0
		let missedCircles = 0

		
		startGameButton.addEventListener('click', event=> {
			if (position == 'start') {
				missedCircles = 0
				position = 'stop'
				intervalFunction()
			} else {
				position = 'stop'
			}
		})

		gameContainerWhereCircles.addEventListener('click', event=> {
			const targetElement = event.target
			if (targetElement.classList.contains('gameCircle')) {
			} else {
				console.log('missed')
				missedCircles--
			}
		})

		function createCircles() {
			time += 500

			const gameCircle = document.createElement('div')
			gameCircle.classList.add('gameCircle')

			let positionY = Math.floor(Math.random() * (560 - 60) + 60) + 'px'
			let positionX = Math.floor(Math.random() * (960 - 60) + 60) + 'px'

			gameCircle.style.top = `${positionY}`
			gameCircle.style.right = `${positionX}`

			function appendCircle() {
				gameContainerWhereCircles.appendChild(gameCircle)
			}

			if (speed == '1') {
				let timeout
				let time = 3

				gameCircle.addEventListener('click', event=> {
					removeTimeout()
					score ++
					showScore()
					gameCircle.remove()
				})

				timeout = setTimeout(() => {
					missedCircles --
					showScore()
					gameCircle.remove()
				}, 1200)

				function removeTimeout() {
					clearTimeout(timeout)
				}
				appendCircle()
			}
		}

		function intervalFunction() {
			interval = setInterval(() => {
				if (missedCircles <= -1) {
					gameOver()
				} else {
					console.log(missedCircles)
					createCircles()
				}
			}, 700)
		}

		function showScore() {
			gameScoreText.textContent = `${score}`
		}

		function gameOver() {
			clearInterval(interval)
			gameContainerWhereCircles.innerHTML = ''

			const scoreColor = document.createElement('p')
			scoreColor.classList.add('scoreColor')
			scoreColor.style.fontSize = ('70px')
			const firstTextArea = document.createElement('div')
			const secondTextArea = document.createElement('div')
			secondTextArea.classList.add('secondTextArea')
			firstTextArea.classList.add('firstTextArea')
			const goldText = document.createElement('p')
			goldText.classList.add('goldText')
			const goldImageForGame = document.createElement('img')
			goldImageForGame.classList.add('goldImageForGame')
			const containerForTextGold = document.createElement('div')
			containerForTextGold.classList.add('containerForTextGold')

			disclaimerTextContainer.appendChild(firstTextArea)
			firstTextArea.appendChild(disclaimerText1)
			firstTextArea.appendChild(scoreColor)
			disclaimerTextContainer.appendChild(secondTextArea)
			secondTextArea.appendChild(disclaimerText2)
			secondTextArea.appendChild(containerForTextGold)
			containerForTextGold.appendChild(goldText)
			containerForTextGold.appendChild(goldImageForGame)

			let skillGroup
			let goldEarnd = '100'

			if (speed <= 2 && score < 25 || speed >= 2 && score < 20 || speed >= 4 && score < 10) {
				skillGroup = 'f'
				scoreColor.style.color = 'red'
			} else if (speed <= 2 && score < 50 || speed >= 2 && score < 40 || speed >= 4 && score < 25) {
				skillGroup = 'b'
				scoreColor.style.color = 'orange'
			} else if (speed <= 2 && score < 100 || speed >= 2 && score < 50 || speed >= 4 && score < 25) {
				skillGroup = 'a'
				scoreColor.style.color = 'green'
			}

			disclaimerText1.textContent = `your score is:`
			scoreColor.textContent =`${score} (skill-group ${skillGroup})`
			disclaimerText2.textContent = `you earn`
			goldText.textContent = `${goldEarnd}`
			disclaimerText3.textContent = `try one more time`
			disclaimer.classList.add('slide-in-top')
			disclaimer.classList.remove('slide-out-top')				
		}
		showScore()
	}

	function giveReverseAnimation() {
		disclaimer.classList.remove('slide-in-top')
			disclaimer.classList.add('fade-out')
			setTimeout(() => {
				disclaimer.style.visibility = 'hidden'
			}, 1000);
		dialogArea.classList.remove('slide-in-bottom')
		dialogArea.classList.add('slide-out-bottom')
		secretShop.style.animation = ''
		secretShop.style.animation = 'animateSecretBack 1s forwards'
		goldCountContainer.classList.remove('slide-in-right')
		goldCountContainer.classList.add('slide-out-right')
		playButton.classList.remove('fade-in')
		playButton.classList.add('fade-out')
	}

	const clear = () => {
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}

	function createSpans() {
		for (let i = 0; i < 10; i++) {
			const span = document.createElement('span')
			section.appendChild(span)
		}
		content.appendChild(section)
	}

	function append() {
		content.appendChild(playButton)
		content.appendChild(backgroundImage)
		content.appendChild(secretShop)
		content.appendChild(goldCountContainer)
		goldCountContainer.appendChild(goldCountImage)
		goldCountContainer.appendChild(goldCountText)
		goldCountContainer.appendChild(goldPlusButton)
		goldCountContainer.appendChild(cartButton)

		setTimeout(() => {
			dialogArea.classList.add('slide-in-bottom')
			content.appendChild(dialogArea)
		}, 1);
	}
	doomWork()
	createSpans()
	append()
}

export default earnPage;