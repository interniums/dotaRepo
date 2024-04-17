import dota from './images/dota.jpg'
import secret from './images/secretShopRemoved.png'
import goldImg from './images/goldImg.jpg'
import plus from './images/plus.svg'
import { userGold } from "."
import mainPage from "./mainpage"
import ballSound from './sounds/ballsound.mp3'
import missSound from './sounds/missSound.mp3'
import { updateGold } from "."

function earnPage() {
	const content = document.getElementById('content')
	const backgroundImage = document.createElement('img')
	const secretShop = document.createElement('img')
	const goldCountImage = document.createElement('img')
	const goldPlusButton = document.createElement('img')
	const sizeChangeText = document.createElement('p')
	const goldCountText = document.createElement('p')
	const dialogArea = document.createElement('div')
	const gameContainerWhereCircles = document.createElement('div')
	const gameContainer = document.createElement('div')
	const playButton = document.createElement('button')
	const section = document.createElement('section')
	const gameMainContainer = document.createElement('div')
	const disclaimer = document.createElement('div')
	const disclaimerTextContainer = document.createElement('div')
	const disclaimerText1 = document.createElement('p')
	const disclaimerText2 = document.createElement('p')
	const disclaimerText3 = document.createElement('p')
	const disclaimerButton = document.createElement('button')
	const slider = document.createElement('input')
	const gameScoreText = document.createElement('p')
	const gameTimeText = document.createElement('div')
	const startGameButton = document.createElement('button')
	const inputContainer = document.createElement('div')
	const titleContainer = document.createElement('div')
	const goldCountContainer = document.createElement('div')
	const gameButton1 = document.createElement('button')
		const gameButton2 = document.createElement('button')
		const gameButton3 = document.createElement('button')
		const gameButton4 = document.createElement('button')
		const gameButton5 = document.createElement('button')
		const gameButton6Circle = document.createElement('button')
		const gameStartCountText = document.createElement('p')
		const gameTimeContainer = document.createElement('div')
		const gameTimeHealth = document.createElement('div')
		const sizeChangeDiv = document.createElement('div')
	let gamePosition = 'start'
		let interval
		let score = 0
		let missedCircles = 0 
	let gameStart = false
	let position = 0
	let eventListener = 0
	let speed = '1'
	let intervalSpeed
	let size = 50
	let timeout1
	let timeout2
	let timeout3
	let timeout4
	let timeout5
	let startGameTimeout
	let skillGroup
	let goldEarnd = 0
	let timeout
	let showTimeout
	let arg = false
	let buttonCalled = false
	let score2


	content.appendChild(disclaimer)
	disclaimer.appendChild(disclaimerTextContainer)
	disclaimerTextContainer.appendChild(disclaimerText1)
	disclaimerTextContainer.appendChild(disclaimerText2)
	disclaimerTextContainer.appendChild(disclaimerText3)
	disclaimer.appendChild(disclaimerButton)

	function boardListener(event) {
		const targetElement = event.target
		if (targetElement.classList.contains('gameCircle')) {
		} else {
			const missSound1 = new Audio(missSound) 
			missSound1.volume = 0.5
			missSound1.play()
			const missText = document.createElement('p')
			missText.classList.add('missText')
			missText.textContent = 'miss'
    	const mouseX = event.clientX
    	const mouseY = event.clientY

			missText.style.top = `${mouseY}px`
			missText.style.left = `${mouseX - 13}px`
			content.appendChild(missText)
			missText.classList.add('fade-out')
			setTimeout(() => {
				missText.classList.remove('fade-out')
				content.removeChild(missText)
			}, 1001)
			console.log('missed')
			if (missedCircles >= -19) {
				missedCircles --
			} 
			showScore()
		}
	}

	function doomWork() {
		titleContainer.style.justifyContent = 'end'
		titleContainer.classList.add('titleContainer')
		playButton.classList.add('fade-in')
		playButton.classList.add('playButton')
		playButton.textContent = 'play'
		gameStartCountText.classList.add('gameStartCountText')

		disclaimerButton.addEventListener('click', event=> {
			if (event) {
				disclaimer.classList.remove('slide-in-top')
				disclaimer.classList.add('slide-out-top')		
				gameStart = true
				gamePosition = 'start'
				const item = document.querySelectorAll(`.healtBarItem`)
				item.forEach(element => element.style.backgroundColor = 'rgb(21, 82, 21)')
				setTimeout(() => {

					while (disclaimer.firstChild) {
						disclaimer.removeChild(disclaimer.firstChild)
					}
					disclaimer.appendChild(disclaimerTextContainer)
					disclaimerTextContainer.appendChild(disclaimerText1)
					disclaimerTextContainer.appendChild(disclaimerText2)
					disclaimerTextContainer.appendChild(disclaimerText3)
					disclaimer.appendChild(disclaimerButton)
				}, 350);
			}
		})

		disclaimer.classList.add('disclaimer')
		disclaimerTextContainer.classList.add('disclaimerTextContainer')
		disclaimerButton.classList.add('disclaimerButton')
		disclaimerButton.textContent = 'ok'
		disclaimerText1.textContent = 'there is a game to earn some gold.'
		disclaimerText2.textContent = 'you should click on appearing balls as fast as possible.'
		disclaimerText3.textContent = 'faster u are - more gold u earn. Choose size and speed bellow'

		playButton.addEventListener('click', event=> {
			if (event) {
				if (position == 0) {
					titleContainer.remove()
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
					content.appendChild(titleContainer)
					const item = document.querySelectorAll(`.healtBarItem`)
					item.forEach(element => element.style.backgroundColor = 'rgb(21, 82, 21)')
					buttonCalled = false
					gameContainerWhereCircles.removeEventListener('click', boardListener)
					setTimeout(() => {
						gameContainerWhereCircles.removeEventListener('click', boardListener)
					}, 3601);
					arg = true
					clearTimeout(startGameTimeout)
					clearTimeout(timeout1)
					clearTimeout(timeout2)
					clearTimeout(timeout3)
					clearTimeout(timeout4)
					clearTimeout(timeout5)
					score = 0
					missedCircles = 0
					clearTimeout(showTimeout)
					showScore()
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
					clearInterval(interval)
					gameContainerWhereCircles.innerHTML = ''

					setTimeout(() => {
						while (disclaimerTextContainer.firstChild) {
							disclaimerTextContainer.removeChild(disclaimerTextContainer.firstChild)
						}
						disclaimerText1.textContent = 'there is a game to earn some gold.'
						disclaimerText2.textContent = 'you should click on appearing eyes as fast as possible.'
						disclaimerText3.textContent = 'faster u are - more gold u earn.'
						disclaimerTextContainer.appendChild(disclaimerText1)
						disclaimerTextContainer.appendChild(disclaimerText2)
						disclaimerTextContainer.appendChild(disclaimerText3)
						startGameButton.textContent = 'start game'
						gameStart = false
					}, 450)
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
		goldCountText.classList.add('goldCountText')
		goldCountText.textContent = `${userGold.gold}`
		goldCountContainer.classList.add('slide-in-right')
		dialogArea.classList.add('dialogArea')
		dialogArea.textContent = 'here u can earn some gold, just play!'
	}

	function showScore() {
		gameTimeText.textContent = `${missedCircles + 20}`
		gameScoreText.textContent = `${score}`
		score2  = missedCircles + 20
		if (score2 < 20) {
			const item = document.querySelectorAll(`.healtBarItem${score2}`)
			item.forEach(item1 => item1.style.backgroundColor = 'inherit')
		}
	}

	function createGame() {
		const gameInformationContainer = document.createElement('div')
		const gameScoreContainer = document.createElement('div')
		const gameButtonsContainer = document.createElement('div')
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
		gameTimeHealth.classList.add('gameTimeHealth')
		gameScoreText.textContent = '0'
		startGameButton.classList.add('startGameButton')
		startGameButton.textContent = 'start game'
		gameTimeContainer.classList.add('gameTimeContainer')
		gameTimeText.classList.add('gameTimeText')
		gameContainer.classList.add('gameContainer')
		gameContainerWhereCircles.classList.add('gameContainerWhereCircles')
		gameButtonsContainer.classList.add('gameButtonsContainer')
		gameButton6Circle.classList.add('gameButton6Circle')
		gameButton6Circle.textContent = 'size'
		gameButton6Circle.addEventListener('click', showCircleSize)
		gameButton1.classList.add('gameButton1')
		gameButton1.classList.add('clicked')
		gameButton1.classList.add('gameButton')
		gameButton1.textContent = '1 speed'
		gameButton2.classList.add('gameButton2')
		gameButton2.classList.add('gameButton')
		gameButton2.textContent = '2 speed'
		gameButton3.classList.add('gameButton3')
		gameButton3.classList.add('gameButton')
		gameButton3.textContent = '3 speed'
		gameButton4.classList.add('gameButton4')
		gameButton4.classList.add('gameButton')
		gameButton4.textContent = '4 speed'
		gameButton5.classList.add('gameButton5')
		gameButton5.classList.add('gameButton')
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
			gameTimeContainer.appendChild(gameTimeHealth)
			gameMainContainer.appendChild(gameContainer)
			gameContainer.appendChild(gameContainerWhereCircles)
			gameMainContainer.appendChild(gameButtonsContainer)
			gameButtonsContainer.appendChild(gameButton6Circle)
			gameButtonsContainer.appendChild(gameButton1)
			gameButtonsContainer.appendChild(gameButton2)
			gameButtonsContainer.appendChild(gameButton3)
			gameButtonsContainer.appendChild(gameButton4)
			gameButtonsContainer.appendChild(gameButton5)


		function createHealthBar() {
			for (let i = 0; i < 20; i++) {
				const healtBarItem = document.createElement('div')
				healtBarItem.classList.add(`healtBarItem`)
				healtBarItem.classList.add(`healtBarItem${i}`)
				gameTimeHealth.appendChild(healtBarItem)
			}
		}

		function showCircleSize() {
			if (gamePosition == 'start') {
				inputContainer.classList.add('inputContainer')
				slider.type = 'range'
				slider.setAttribute('value', 50)
				slider.min = 10
				slider.max = 150
				slider.classList.add('slider')
				sizeChangeDiv.classList.add('sizeChangeDiv')
				sizeChangeDiv.style.height = '50px'
				sizeChangeDiv.style.width = '50px'

				while (disclaimer.firstChild) {
					disclaimer.removeChild(disclaimer.firstChild)
				}
				disclaimer.appendChild(sizeChangeText)
				disclaimer.appendChild(slider)
				disclaimer.appendChild(inputContainer)
				inputContainer.appendChild(sizeChangeDiv)
				disclaimer.appendChild(disclaimerButton)
				sizeChangeText.textContent = 'choose ball size'
				disclaimer.classList.remove('slide-out-top')
				disclaimer.classList.add('slide-in-top')

				slider.addEventListener('input', checkValue) 
				function checkValue () {
					console.log(`${slider.value}`)
					size = slider.value
					parseFloat(size)
					sizeChangeDiv.style.height = `${size}px`
					sizeChangeDiv.style.width = `${size}px`
				}
			}
		}

		createHealthBar()
	}
	createGame()

	const gameButtons = document.querySelectorAll('.gameButton')

	gameButton1.addEventListener('click', event=> {
		gameButtons.forEach((button) => {
			button.classList.remove('clicked')
		})
		gameButton1.classList.add('clicked')
		speed = '1'
	})
	gameButton2.addEventListener('click', event=> {
		gameButtons.forEach((button) => {
			button.classList.remove('clicked')
		})
		gameButton2.classList.add('clicked')
		speed = '2'
	})
	gameButton3.addEventListener('click', event=> {
		gameButtons.forEach((button) => {
			button.classList.remove('clicked')
		})
		gameButton3.classList.add('clicked')
		speed = '3'
	})
	gameButton4.addEventListener('click', event=> {
		gameButtons.forEach((button) => {
			button.classList.remove('clicked')
		})
		gameButton4.classList.add('clicked')
		speed = '4'
	})
	gameButton5.addEventListener('click', event=> {
		gameButtons.forEach((button) => {
			button.classList.remove('clicked')
		})
		gameButton5.classList.add('clicked')
		speed = '5'
	})

	function showGame(condition) {
		if (condition == 'show') {
			section.remove()
			gameMainContainer.style.visibility = 'visible'
			gameMainContainer.classList.add('slide-in-top')
			startGame()
		} else if (condition == 'hide') {
			setTimeout(() => {
				section.classList.add('fade-in')
				createSpans()
			}, 550);
			gameMainContainer.classList.remove('slide-in-top')
			gameMainContainer.classList.add('slide-out-top')
			secretShop.style.animation = ''
		}
	}

	function startGame() {
		showScore()

		function gameStartCountFunction() {
			timeout1 = setTimeout(() => {
				gameContainerWhereCircles.appendChild(gameStartCountText)
				gameStartCountText.classList.add('slide-in-bck-center')
				gameStartCountText.textContent = '3'
			}, 200)

			timeout2 = setTimeout(() => {
				gameContainerWhereCircles.removeChild(gameStartCountText)
				gameContainerWhereCircles.appendChild(gameStartCountText)
				gameStartCountText.classList.remove('slide-in-bck-center')
				gameStartCountText.classList.add('slide-in-bck-center')
				gameStartCountText.textContent = '2'
			}, 1000)

			timeout3 = setTimeout(() => {
				gameContainerWhereCircles.removeChild(gameStartCountText)
				gameContainerWhereCircles.appendChild(gameStartCountText)
				gameStartCountText.classList.remove('slide-in-bck-center')
				gameStartCountText.classList.add('slide-in-bck-center')
				gameStartCountText.textContent = '1'
			}, 1800)

			timeout4 = setTimeout(() => {
				gameContainerWhereCircles.removeChild(gameStartCountText)
				gameContainerWhereCircles.appendChild(gameStartCountText)
				gameStartCountText.classList.remove('slide-in-bck-center')
				gameStartCountText.classList.add('slide-in-bck-center')
				gameStartCountText.textContent = 'go!'
			}, 2600)

			timeout5 = setTimeout(() => {
				gameContainerWhereCircles.removeChild(gameStartCountText)
			}, 3400);
		}

		if (eventListener == 0) {
			startGameButton.addEventListener('click', event => {
				if (event) {
					if (gamePosition == 'start' && gameStart == true) {
							if (eventListener == 0) {
								setTimeout(() => {
									gameContainerWhereCircles.addEventListener('click', boardListener)
								}, 3600);
							}	
							gameStartCountFunction()
							startGameButton.textContent = 'stop game'
							missedCircles = 0
							if (speed == '1') {
								intervalSpeed = 1000
							} else if (speed == '2') {
								intervalSpeed = 800
							} else if (speed == '3') {
								intervalSpeed = 500
							} else if (speed == '4') {
								intervalSpeed = 400
							} else if (speed == '5') {
								intervalSpeed = 250
							}
							startGameTimeout = setTimeout(() => {
								intervalFunction()
							}, 3600 - intervalSpeed)
							gamePosition = 'stop'
							setTimeout(() => {
								buttonCalled = true
							}, 500);
					} else if (buttonCalled == true && gamePosition == 'stop' && gameStart == true) {
						gameContainerWhereCircles.removeEventListener('click', boardListener)
						setTimeout(() => {
							gameContainerWhereCircles.removeEventListener('click', boardListener)
						}, 3601)
						gameOver()
					}
				}
			})
		}

		function createCircles() {
			arg = false
			const gameCircle = document.createElement('div')
			gameCircle.classList.add('gameCircle')

			let positionY = Math.floor(Math.random() * (560 - size) + size) + 'px'
			let positionX = Math.floor(Math.random() * (960 - size) + size) + 'px'

			gameCircle.style.top = `${positionY}`
			gameCircle.style.right = `${positionX}`
			gameCircle.style.width = `${size}px`
			gameCircle.style.height = `${size}px`

			function circleListener(event) {
					function removeTimeout() {
						clearTimeout(timeout)
					}
					const ballSoundPlay = new Audio(ballSound)
					ballSoundPlay.volume = 0.3
					ballSoundPlay.play()
					removeTimeout()
					score ++
					showScore()
					gameCircle.remove()
			}

			function appendCircle() {
				gameContainerWhereCircles.appendChild(gameCircle)
			}

			if (speed == '1') {
				gameCircle.addEventListener('click', circleListener)

				timeout = setTimeout(() => {
					if (missedCircles >= -19) {
						missedCircles --
					} 
					if (!arg) {
						showScore()
					}
					gameCircle.remove()
				}, 9999)
				appendCircle()
			} else if (speed == 2) {
				gameCircle.addEventListener('click', circleListener)

				timeout = setTimeout(() => {
					if (missedCircles >= -19) {
						missedCircles --
					} 
					if (!arg) {
						showScore()
					}
					gameCircle.remove()
				}, 8000)
				appendCircle()
			} else if (speed == 3) {
				gameCircle.addEventListener('click', circleListener)

				timeout = setTimeout(() => {
					if (missedCircles >= -19) {
						missedCircles --
					} 
					if (!arg) {
						showScore()
					}
					gameCircle.remove()
				}, 5000)
				appendCircle()
			} else if (speed == 4) {
				gameCircle.addEventListener('click', circleListener)

				timeout = setTimeout(() => {
					if (missedCircles >= -19) {
						missedCircles --
					} 
					if (!arg) {
						showScore()
					}
					gameCircle.remove()
				}, 4000)
				appendCircle()
			} else if (speed == 5) {
				gameCircle.addEventListener('click', circleListener)

				timeout = setTimeout(() => {
					if (missedCircles >= -19) {
						missedCircles --
					} 
					if (!arg) {
						showScore()
					}
					gameCircle.remove()
				}, 3000)
				appendCircle()
			}
		}

		function intervalFunction() {
			interval = setInterval(() => {
				if (missedCircles < -19) {
					gameOver()
				} else {
					createCircles()
				}
			}, intervalSpeed)
		}

		function gameOver() {
			buttonCalled = false
			arg = true
			clearTimeout(showTimeout)
			clearTimeout(startGameTimeout)
			clearTimeout(timeout1)
			clearTimeout(timeout2)
			clearTimeout(timeout3)
			clearTimeout(timeout4)
			clearTimeout(timeout5)
			clearInterval(interval)
			gameStart = false
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
			goldImageForGame.setAttribute('src', goldImg)
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

			if (speed == 1) {
				goldEarnd = score / size * 10 * 20
			} else if (speed == 2) {
				goldEarnd = score / size * 10 * 30
			} else if (speed == 3) {
				goldEarnd = score / size * 10 * 40
			} else if (speed == 4) {
				goldEarnd = score / size * 10 * 50
			} else if (speed == 5) {
				goldEarnd = score / size * 10 * 60
			}

			goldEarnd = parseInt(goldEarnd)
			userGold.gold = goldEarnd + userGold.gold
			updateGold()
			goldCountText.textContent = `${userGold.gold}`

			if (speed == 1 && score < 80 || speed == 2 && score < 70 || speed == 3 && score < 40 || speed == 4 && score < 20 || speed == 5 && score < 10) {
				skillGroup = 'f'
				scoreColor.style.color = 'red'
				disclaimerText3.textContent = 'to slow...'
			} else if (speed == 1 && score < 500 || speed == 2 && score < 250 || speed == 3 && score < 150 || speed == 4 && score < 60 || speed == 5 && score < 25) {
				skillGroup = 'b'
				scoreColor.style.color = 'orange'
				disclaimerText3.textContent = 'not that bad.'
			} else if (speed == 1 && score >= 500 || speed == 2 && score >= 250 || speed == 3 && score >= 150 || speed == 4 && score >= 60 || speed == 5 && score >= 25) {
				skillGroup = 'a'
				scoreColor.style.color = 'green'
				disclaimerText3.textContent = 'impressive!'
			}

			disclaimerText1.textContent = `your score is:`
			scoreColor.textContent =`${score} (skill-group ${skillGroup})`
			disclaimerText2.textContent = `you earn:`
			goldText.textContent = `${goldEarnd}`
			disclaimer.classList.remove('slide-out-top')
			disclaimer.classList.add('slide-in-top')

			disclaimerButton.addEventListener('click', event=> {
					missedCircles = 0
					showScore()
					setTimeout(() => {
					disclaimer.classList.remove('slide-in-top')
					disclaimer.classList.add('slide-out-top')
				
					while (disclaimerTextContainer.firstChild) {
						disclaimerTextContainer.removeChild(disclaimerTextContainer.firstChild)
					}
					disclaimerText1.textContent = 'there is a game to earn some gold.'
					disclaimerText2.textContent = 'you should click on appearing eyes as fast as possible.'
					disclaimerText3.textContent = 'faster u are - more gold u earn.'
					disclaimerTextContainer.appendChild(disclaimerText1)
					disclaimerTextContainer.appendChild(disclaimerText2)
					disclaimerTextContainer.appendChild(disclaimerText3)
				}, 450);
				gameStart = true
			})				
			startGameButton.textContent = 'start game'
				gamePosition = 'start'
				score = 0
				skillGroup = ''
				goldEarnd = 0
				missedCircles = 0
				score2 = 0
				gameContainerWhereCircles.removeEventListener('click', boardListener)
				setTimeout(() => {
					gameContainerWhereCircles.removeEventListener('click', boardListener)
				}, 3601);
		}
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
		content.appendChild(titleContainer)
		titleContainer.appendChild(goldCountContainer)
		goldCountContainer.appendChild(goldCountImage)
		goldCountContainer.appendChild(goldCountText)
		goldCountContainer.appendChild(goldPlusButton)

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