import dota from "./images/dota.jpg"
import secret from './images/secretShopRemoved.png'
import goldImg2 from './images/goldImg.jpg'
import plus from './images/plus.svg'
import goldImg from './images/goldImg.jpg'
import menuPage from "./menu"
import earnPage from "./game"
import showInventory from "./inventory"
import { boughtItems } from "./menu"
import { itemsArray } from "./menu"
import { updateGold } from "."
import { userGold } from "."

function mainPage (animationCondition, buyCondition, target, priceCount, index) {
	let currentPage = 'title'
	let targetItem
	let priceNumber
	const content = document.getElementById('content')
	const backgroundImage = document.createElement('img')
	const secretShop = document.createElement('img')
	const coverDiv = document.createElement('div')
	const titleContainer = document.createElement('div')

	const goldCountContainer = document.createElement('div')
	const goldCountImage = document.createElement('img')
	const goldPlusButton = document.createElement('img')
	const cartButton = document.createElement('img')
	const goldCountText = document.createElement('p')
	const goldCountTextAnimation = document.createElement('p')
	const dialogContainer = document.createElement('div')

	

	const titleText = document.createElement('p')
	titleText.textContent = 'how is it going, bra?'
	titleText.classList.add('titleText')
	titleText.classList.add('slide-in-top')
	titleContainer.appendChild(titleText)
	const downTextContainer = document.createElement('div')
	downTextContainer.classList.add('downTextContainer')
	const menuText = document.createElement('p')
	const inventoryText = document.createElement('p')
	menuText.textContent = 'up to buying stuff?'
	menuText.classList.add('menuText')
	menuText.classList.add('slide-in-right')

	menuText.addEventListener('click', event => {
		giveReverseAnimationMain()
				setTimeout(() => {
					clear()
					menuPage()
				}, 805)
	})

	titleText.classList.add('slide-in-right')
	inventoryText.textContent = 'yors collection here man'
	inventoryText.classList.add('inventoryText')
	inventoryText.classList.add('slide-in-right')

	inventoryText.addEventListener('click', event => {
		giveReverseAnimationMain()
				setTimeout(() => {
					clear()
					showInventory()
				}, 805)
	})
	content.appendChild(downTextContainer)
	downTextContainer.appendChild(menuText)
	downTextContainer.appendChild(inventoryText)

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
				setTimeout(() => {
					clear()
					menuPage()
				}, 805)
		})

		dialogYesButton.addEventListener('click', event=> {
			itemsArray[index][7] = 'true'
			userGold.gold = userGold.gold - Number(price)
			updateGold()
			titleContainer.removeChild(goldCountContainer)
			domWork()
			goldCountContainer.classList.remove('slide-in-right')
			goldCountText.classList.add('fade-in')
			goldCountTextAnimation.classList.remove('slide-in-right')
			goldCountTextAnimation.textContent = `-${price}`
			goldCountTextAnimation.classList.add('slide-out-top-slow')
			titleContainer.appendChild(goldCountContainer)

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
		secretShop.classList.add('slide-in-bottom')
		secretShop.setAttribute('src', secret)

		coverDiv.classList.add('coverDiv')
		titleContainer.classList.add('titleContainer')

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
			}, 805)
		})
		cartButton.classList.add('cartButton')
		goldCountText.classList.add('goldCountText')
		goldCountText.textContent = `${userGold.gold}`
		goldCountContainer.classList.add('slide-in-right')
		goldCountTextAnimation.classList.add('goldCountTextAnimation')
		goldCountTextAnimation.textContent = `${userGold.gold}`
		goldCountTextAnimation.classList.add('slide-in-right')
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

		secretShop.classList.remove('slide-in-bottom')
		secretShop.classList.add('slide-out-bottom')
		
		dialogContainer.classList.remove('slide-in-top')
		dialogContainer.classList.add('slide-out-top')
		goldCountTextAnimation.classList.remove('slide-out-top-slow')
		goldCountTextAnimation.classList.remove('slide-in-right')
		goldCountTextAnimation.classList.add('slide-out-right')

		goldCountContainer.classList.remove('slide-in-right')
		goldCountContainer.classList.add('slide-out-right')
		titleText.classList.remove('slide-in-top')
		titleText.classList.add('slide-out-top')
		titleText.classList.remove('slide-in-right')
		titleText.classList.add('slide-out-right')
		inventoryText.classList.remove('slide-in-right')
		inventoryText.classList.add('slide-out-right')
		menuText.classList.remove('slide-in-right')
		menuText.classList.add('slide-out-right')
	}

	const append = () => {
		content.appendChild(backgroundImage)
		content.appendChild(secretShop)
		content.appendChild(coverDiv)

		content.appendChild(titleContainer)
		titleContainer.appendChild(goldCountContainer)
		goldCountContainer.appendChild(goldCountImage)
		goldCountContainer.appendChild(goldCountText)
		goldCountContainer.appendChild(goldPlusButton)
		goldCountContainer.appendChild(cartButton)
		content.appendChild(goldCountTextAnimation)
	}

	createSpans()
	append()

	const clear = () => {
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}
}

export { userGold }
export default mainPage;
