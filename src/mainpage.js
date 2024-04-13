import dota from "./images/dota.jpg"
import secret from './images/secretShopRemoved.png'
import goldImg2 from './images/goldImg.jpg'
import plus from './images/plus.svg'
import goldImg from './images/goldImg.jpg'
import menuPage from "./menu"
import earnPage from "./game"

import { itemsArray } from "./menu"

let userGold = {
	gold: 1200
}

function mainPage (animationCondition, buyCondition, target, priceCount, index) {
	let currentPage = 'title'
	let targetItem
	let priceNumber
	const content = document.getElementById('content')
	const backgroundImage = document.createElement('img')
	const secretShop = document.createElement('img')
	const coverDiv = document.createElement('div')

	const goldCountContainer = document.createElement('div')
	const goldCountImage = document.createElement('img')
	const goldPlusButton = document.createElement('img')
	const cartButton = document.createElement('img')
	const goldCountText = document.createElement('p')
	const goldCountTextAnimation = document.createElement('p')
	const descriptionAddToCartButton = document.createElement('button')
	const dialogContainer = document.createElement('div')

	if (animationCondition == 'true') {
		backgroundAnimation()
	} else { currentPage = 'title' }

	if (buyCondition == 'true') {
		targetItem = target
		priceNumber = priceCount
		showBuyDialog('buying', targetItem, priceNumber)
	}

	function showBuyDialog(condition, name, price) {

		const dialogTextArea = document.createElement('div')
		const dialogAlertContainer = document.createElement('div')
		const dialogAlertMessage = document.createElement('p')
		const dialogAlertName = document.createElement('p')
		const dialogPriceContainer = document.createElement('div')
		const dialogPriceImg = document.createElement('img')
		const dialogPriceText = document.createElement('p')
		const dialogButtonsContainer = document.createElement('div')
		const dialogYesButton = document.createElement('button')
		const dialogNoButton = document.createElement('button')
		const dialogThanksMessage = document.createElement('p')
		const questionMark = document.createElement('p')
		const dialogExitButton = document.createElement('button')
		const dialogSecondPage = document.createElement('div')


		dialogContainer.classList.add('dialogContainer')
		dialogSecondPage.classList.add('dialogSecondPage')
		dialogContainer.classList.add('slide-in-top')
		dialogAlertContainer.classList.add('dialogAlertContainer')
		dialogPriceContainer.classList.add('dialogPriceContainer')
		dialogAlertName.classList.add('dialogAlertName')
		dialogPriceImg.classList.add('dialogPriceImg')
		dialogPriceImg.src = goldImg2
		questionMark.classList.add('questionMark')
		questionMark.textContent = '?'
		dialogExitButton.classList.add('dialogExitButton')
		dialogPriceText.classList.add('dialogPriceText')
		dialogPriceText.textContent = `for ${price}`
		dialogTextArea.classList.add('dialogTextArea')
		dialogAlertMessage.classList.add('dialogAlertMessage')
		dialogAlertMessage.textContent = `do you really want to buy`
		dialogAlertName.textContent = `${name}`
		dialogButtonsContainer.classList.add('dialogButtonsContainer')
		dialogExitButton.textContent = 'exit'

		dialogYesButton.classList.add('dialogYesButton')
		dialogYesButton.textContent = 'yap man'
		dialogNoButton.textContent = 'not realy'
		dialogNoButton.classList.add('dialogNoButton')

		dialogNoButton.addEventListener('click', event=> {
			dialogContainer.classList.remove('slide-in-top')
					dialogContainer.classList.add('slide-out-top')
					giveReverseAnimationMain()
				setTimeout(clear, 800)
				setTimeout(menuPage, 801)
		})

		dialogYesButton.addEventListener('click', event=> {
			itemsArray[index][7] = 'true'
			userGold = userGold - Number(price)
			content.removeChild(goldCountContainer)
			domWork()
			goldCountContainer.classList.remove('slide-in-right')
			goldCountText.classList.add('fade-in')
			goldCountTextAnimation.classList.remove('slide-in-right')
			goldCountTextAnimation.textContent = `-${price}`
			goldCountTextAnimation.classList.add('slide-out-top-slow')
			content.appendChild(goldCountContainer)

			dialogContainer.removeChild(dialogAlertContainer)
			dialogContainer.removeChild(dialogPriceContainer)
			dialogContainer.removeChild(dialogTextArea)
		
				dialogThanksMessage.textContent = 'thanks for buying friend!'
				dialogExitButton.style.visibility = 'visible'
				dialogThanksMessage.classList.add('fade-in')
				dialogExitButton.classList.add('fade-in')

				dialogExitButton.addEventListener('click', event=> {
					dialogContainer.classList.remove('slide-in-top')
					dialogContainer.classList.add('slide-out-top')
					setTimeout(() => {
						dialogContainer.style.visibility = 'hidden'
					}, 1001);
				})
		})

		dialogThanksMessage.classList.add('dialogThanksMessage')
		dialogContainer.style.visibility = 'visible'


		if (condition == 'buying') {
		content.appendChild(dialogContainer)
		dialogContainer.appendChild(dialogAlertContainer)
		dialogAlertContainer.appendChild(dialogAlertMessage)
		dialogAlertContainer.appendChild(dialogAlertName)
		dialogContainer.appendChild(dialogPriceContainer)
		dialogPriceContainer.appendChild(dialogPriceText)
		dialogPriceContainer.appendChild(dialogPriceImg)
		dialogPriceContainer.appendChild(questionMark)
		dialogTextArea.appendChild(dialogButtonsContainer)
		dialogButtonsContainer.appendChild(dialogYesButton)
		dialogButtonsContainer.appendChild(dialogNoButton)
		dialogSecondPage.appendChild(dialogThanksMessage)
		dialogContainer.appendChild(dialogTextArea)
		dialogSecondPage.appendChild(dialogExitButton)
		dialogContainer.appendChild(dialogSecondPage)
		}
	}

	function backgroundAnimation () {
		coverDiv.style.animation = 'animateBackground 1s ease forwards'
		coverDiv.addEventListener('animationend', function() {
			coverDiv.style.animation = ''
		})
	}


	const domWork = () => {
		backgroundImage.classList.add('backgroundImage')
		backgroundImage.setAttribute('src', dota)

		secretShop.classList.add('secretShopMainPage')
		secretShop.setAttribute('src', secret)

		coverDiv.classList.add('coverDiv')


		goldCountContainer.classList.add('goldCountContainer')
		goldCountImage.classList.add('goldCountImage')
		goldCountImage.src = goldImg
		goldPlusButton.classList.add('goldPlusButton')
		goldPlusButton.setAttribute('src', plus)
		goldPlusButton.addEventListener('click', event=> {
			giveReverseAnimationMain()
			setTimeout(() => {
				clear()
				earnPage()
			}, 1001);
		})
		cartButton.classList.add('cartButton')
		goldCountText.classList.add('goldCountText')
		goldCountText.textContent = `${userGold.gold}`
		goldCountContainer.classList.add('slide-in-right')
		goldCountTextAnimation.classList.add('goldCountTextAnimation')
		goldCountTextAnimation.textContent = `${userGold.gold}`
		goldCountTextAnimation.classList.add('slide-in-right')

		secretShop.addEventListener('click', event => {
			if (currentPage !== 'title') {
				giveReverseAnimationMain()
				setTimeout(clear, 800)
				setTimeout(mainPage, 801)
			}
		})
	}

	domWork()

	function createSpans() {
		const section = document.createElement('section')
		for (let i = 0; i < 10; i++) {
			const span = document.createElement('span')
			section.appendChild(span)
		}
		content.appendChild(section)
	}

	function giveReverseAnimationMain() {
		const title = document.getElementById('title')
		const menu = document.getElementById('menu')
		const contact = document.getElementById('contact')

		contact.style.animation = 'animateContactBack 1s forwards'
		title.style.animation = 'animateTitleBack 1s forwards'
		menu.style.animation = 'animateMenuBack 1s forwards'
		secretShop.style.animation = 'animateSecretShopMainPageBack 1s forwards'
		dialogContainer.classList.remove('slide-in-top')
		dialogContainer.classList.add('slide-out-top')
		goldCountTextAnimation.classList.remove('slide-out-top-slow')
		goldCountTextAnimation.classList.remove('slide-in-right')
		goldCountTextAnimation.classList.add('slide-out-right')

		goldCountContainer.classList.remove('slide-in-right')
		goldCountContainer.classList.add('slide-out-right')
	}

	const createText = (name, text, buttonText) => {
		const item = document.createElement('h1')
		const button = document.createElement('button')
		item.classList.add('text')
		item.id = name
		item.textContent = `${text}`
		button.textContent = `${buttonText}`
		button.classList.add(`${name}`)
		button.classList.add('button')
		button.addEventListener('click', event => {
			const clickedBtn = event.target.className;
			if (clickedBtn == 'menu button') {
				giveReverseAnimationMain()
				setTimeout(clear, 800)
				setTimeout(menuPage, 801) 
			}	
		})
	
		content.appendChild(item)
		item.appendChild(button)
		return item
	}

	const append = () => {
		content.appendChild(backgroundImage)
		content.appendChild(secretShop)
		content.appendChild(coverDiv)

		content.appendChild(goldCountContainer)
		goldCountContainer.appendChild(goldCountImage)
		goldCountContainer.appendChild(goldCountText)
		goldCountContainer.appendChild(goldPlusButton)
		goldCountContainer.appendChild(cartButton)
		content.appendChild(goldCountTextAnimation)
	}

	createText('title', '', 'how is it going, bra?')
	createText('menu', '', 'up to buying stuff?')
	createText('contact', '', 'yors collection here man')
	createSpans()
	append()

	setTimeout(() => {
    secretShop.classList.add('vibrate-1')
  }, 1001);

	const clear = () => {
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}
}

export { userGold }
export default mainPage;
