import dota from "./images/dota.jpg"
import secret from './images/secretShopRemoved.png'
import bkb0 from './images/bkb.png'
import blademail1 from './images/blademail.png'
import daedalus2 from './images/daedalus.png'
import discord3 from './images/discord.png'
import midas4 from './images/midas.png'
import refresher5 from './images/refresher.png'
import soulring6 from './images/souring.png'
import travelboots7 from './images/travelboots.png'
import goldImg from './images/goldImg.jpg'
import handLeftImported from './images/left2.svg'
import handRightImported from './images/right2.svg'
import soundButton from './images/soundButton.svg'
import bkbSound from './sounds/bkb.mp3'
import blamedeMailSound from './sounds/bladeMail.mp3'
import discordSound from './sounds/discord.mp3'
import midasSound from './sounds/midas.mp3'
import refresherSound from './sounds/refresher.mp3'
import soulRingSound from './sounds/soulRing.mp3'
import travelbootsSound from './sounds/travelboots.mp3'
import descriptions from "./itemsDescription"
import plus from './images/plus.svg'
import mainPage from "./mainpage"
import boughtSymbolImg from './images/boughtSymbol.svg'
import { userGold } from "./mainpage"
import ballSound from './sounds/ballsound.mp3'
import earnPage from "./game"


const audioContainer = {
	bkb: new Audio(bkbSound),
	bladeMail: new Audio(blamedeMailSound),
	daedalus: new Audio(),
	discord: new Audio(discordSound),
	midas: new Audio(midasSound),
	refresher: new Audio(refresherSound),
	soulring: new Audio(soulRingSound),
	travelboots: new Audio(travelbootsSound),
	//ballsound: new Audio(ballSound)
}

let itemsArray = [
	[0, 'bkb', '4050', bkb0, audioContainer.bkb, descriptions.bkbText, 0, 'false'],
	[1, 'blademail', '2100', blademail1, audioContainer.bladeMail, `${descriptions.blademailText}`, 0, 'false'],
	[2, 'daedalus', '5200', daedalus2, audioContainer.daedalus, `${descriptions.daedalusText}`, 0, 'false'],
	[3, 'discord', '1725', discord3, audioContainer.discord, `${descriptions.discordText}`, 0, 'false'],
	[4, 'midas', '2200', midas4, audioContainer.midas, `${descriptions.midasText}`, 0, 'false'],
	[5, 'refresher', '5000', refresher5, audioContainer.refresher, `${descriptions.refresherText}`, 0, 'false'],
	[6, 'soulring', '805', soulring6, audioContainer.soulring, `${descriptions.soulRingText}`, 0, 'false'],
	[7, 'tr. boots', '2500', travelboots7, audioContainer.travelboots, `${descriptions.travelBootsText}`, 0, 'false']
]

function menuPage() {

	let currentPage = 'menu'
	const content = document.getElementById('content')
	const clear = () => {
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}

	const backgroundImage = document.createElement('img')
	const secretShop = document.createElement('img')
	const coverDiv = document.createElement('div')
	const item = document.createElement('h1')
	const button = document.createElement('button')
	const shopContainer = document.createElement('div')
	const leftHandContainer = document.createElement('div')
	const rightHandContainer = document.createElement('div')
	const handLeft = document.createElement('img')
	const handRight = document.createElement('img')
	const descriptionMain = document.createElement('div')

	const goldCountContainer = document.createElement('div')
	const goldCountImage = document.createElement('img')
	const goldPlusButton = document.createElement('img')
	const cartButton = document.createElement('img')
	const goldCountText = document.createElement('p')
	const descriptionAddToCartButton = document.createElement('button')

	const noMoneyContainer = document.createElement('div')
	const noMoneyTextContainer = document.createElement('div')
	const noMoneyTextBottomContainer = document.createElement('div')
	const noMoneyText = document.createElement('p')
	const noMoneyImg = document.createElement('img')
	const noMoneyValue = document.createElement('p')
	const noMoneyButtonsContainer = document.createElement('div')
	const noMoneyEarnButton = document.createElement('button')
	const noMoneyExitButton = document.createElement('button')
	const dialogArea = document.createElement('div')


	let fadeCondition = true 
	let showCount = 0
	
	 const eventTargetObject = {
		eventTarget: 0,
		position: 0,
		boughtCondition: 'false'
	}

	for (const key in audioContainer) {
	 if (audioContainer.hasOwnProperty(key)) {
		audioContainer[key].volume = 0.05
	 }
	}

	function createShopCell (index, name, priceText, img, sound, text, position, boughtCondition) {
		const shopCellContainer = document.createElement('div')
		const nameCreation = document.createElement('p')
		const imgCreation = document.createElement('img')
		const priceContainer = document.createElement('div')
		const priceImgCreation = document.createElement('img')
		const priceTextCreation = document.createElement('div')
		const shopCell = document.createElement('div')
		const boughtSymbol = document.createElement('img')

		if (fadeCondition == true) {
			shopCell.classList.add('fade-in')
		}

		shopCellContainer.classList.add('shopCellContainerContainer')
		shopCellContainer.setAttribute('data-value', `${position}`)
		shopCellContainer.setAttribute('data-bought', `${boughtCondition}`)
		shopCell.classList.add('shopCellContainer')
		shopCellContainer.setAttribute('data-index', `${index}`)
		boughtSymbol.classList.add('boughtSymbol')

		shopCellContainer.addEventListener('click', event => {
			eventTargetObject.eventTarget = shopCellContainer.dataset.index
			eventTargetObject.position = shopCellContainer.dataset.value
			eventTargetObject.boughtCondition = shopCellContainer.dataset.bought
			if (eventTargetObject.boughtCondition == 'true') {
				alreadyBought()
			} else {
				shopCell.classList.remove('shake-horizontal')
				dialogArea.classList.add('slide-out-bottom')
				showDescription(eventTargetObject.eventTarget, eventTargetObject.position)
			}
		})

		imgCreation.src = img
		imgCreation.classList.add('shopCellImage')
		priceImgCreation.src = `${goldImg}`
		priceImgCreation.classList.add('shopGoldSymbol')
		priceTextCreation.textContent = `${priceText}`
		nameCreation.textContent = `${name}`
		nameCreation.classList.add('shopCellName')
		priceContainer.classList.add('priceContainer')
		boughtSymbol.setAttribute('src', boughtSymbolImg)

		shopContainer.appendChild(shopCellContainer)
		shopCellContainer.appendChild(shopCell)
		shopCell.appendChild(nameCreation)
		shopCell.appendChild(imgCreation)
		shopCell.appendChild(priceContainer)
		priceContainer.appendChild(priceImgCreation)
		priceContainer.appendChild(priceTextCreation)

		if (boughtCondition == 'true') {
			shopCell.appendChild(boughtSymbol)
		}

		fadeCondition = false


		function alreadyBought() {
			shopCell.classList.remove('fade-in')
			shopCell.classList.add('shake-horizontal')
			content.appendChild(dialogArea)
			dialogArea.classList.remove('slide-out-bottom')
	
			setTimeout(() => {
				shopCell.classList.remove('shake-horizontal')
				dialogArea.classList.add('slide-out-bottom')
			}, 2000);
		}
	}

	function showDescription(number, position) {
		function clearDescription() {
			while (descriptionMain.firstChild) {
				descriptionMain.removeChild(descriptionMain.firstChild);
			}
		}

		if (position == 0) {
			leftHandContainer.style.animation = ''
			rightHandContainer.style.animation = ''
			leftHandContainer.classList.add('slide-out-bottom')
			rightHandContainer.classList.add('slide-out-bottom') 	
			shopContainer.children[1].classList.remove('slide-in-bottom')
			shopContainer.children[2].classList.remove('slide-in-bottom')
			shopContainer.children[1].classList.add('slide-out-bottom')
			shopContainer.children[2].classList.add('slide-out-bottom')
			descriptionMain.classList.remove('slide-out-top')
			descriptionMain.classList.add('slide-in-blurred-top')
		} else if (position == 1) {
			nextShopItem('right')
			leftHandContainer.style.animation = ''
			leftHandContainer.classList.add('slide-out-bottom')
			rightHandContainer.style.animation = ''
			rightHandContainer.classList.add('slide-out-bottom')
			shopContainer.children[1].classList.remove('slide-in-bottom')
			shopContainer.children[2].classList.remove('slide-in-bottom')
			shopContainer.children[0].classList.add('slide-in-right')
			shopContainer.children[1].classList.add('slide-out-bottom')
			shopContainer.children[2].classList.add('slide-out-bottom')
			descriptionMain.classList.remove('slide-out-top')
			descriptionMain.classList.add('slide-in-blurred-top')
		} else if (position == 2) {
			nextShopItem('right')
			nextShopItem('right')
			leftHandContainer.style.animation = ''
			rightHandContainer.style.animation = ''
			leftHandContainer.classList.add('slide-out-bottom')
			rightHandContainer.classList.add('slide-out-bottom')
			shopContainer.children[1].classList.remove('slide-in-bottom')
			shopContainer.children[2].classList.remove('slide-in-bottom')
			shopContainer.children[0].classList.add('slide-in-right')
			shopContainer.children[1].classList.add('slide-out-bottom')
			shopContainer.children[2].classList.add('slide-out-bottom')
			descriptionMain.classList.remove('slide-out-top')
			descriptionMain.classList.add('slide-in-blurred-top')
		}

		if (showCount == 0) {
			leftHandContainer.style.animation = ''
			rightHandContainer.style.animation = ''
			leftHandContainer.classList.remove('slide-in-bottom-hands')
			rightHandContainer.classList.remove('slide-in-bottom-hands')
			leftHandContainer.classList.add('slide-out-bottom')
			rightHandContainer.classList.add('slide-out-bottom')
			clearDescription()
			appendDescription()
			showCount ++
		} else if (showCount == 1) {
			shopContainer.children[0].classList.remove('slide-in-right')
			shopContainer.children[1].classList.remove('slide-out-bottom')
			shopContainer.children[2].classList.remove('slide-out-bottom')
			shopContainer.children[1].classList.add('slide-in-bottom')
			shopContainer.children[2].classList.add('slide-in-bottom')

			leftHandContainer.style.animation = ''
			rightHandContainer.style.animation = ''
			leftHandContainer.classList.add('slide-in-bottom-hands')
			rightHandContainer.classList.add('slide-in-bottom-hands')

			descriptionMain.classList.add('slide-out-top')
			showCount = 0
		}

		function appendDescription() {
			descriptionMain.style.visibility = 'visible'

		let itemImage
		let itemName
		let itemPriceText 
		let itemSound 
		let itemText 
		let	itemIndex

		for (let i = 0; i < itemsArray.length; i++) {
			let newArray = itemsArray[i]
			if (newArray[0] == number) {
				itemIndex = newArray[0]
				itemImage = newArray[3]
				itemName = newArray[1]
				itemPriceText = newArray[2]
				itemSound = newArray[4]
				itemText = newArray[5]
			}
		} 

		const descriptionContainer = document.createElement('div')
		const descriptionLeftSection = document.createElement('div')
		const descriptionRightSection = document.createElement('div')
		const descriptionItemImage = document.createElement('img')
		const descriptionItemName = document.createElement('p')
		const descriptionItemPriceContainer = document.createElement('div')
		const descriptionItemPriceImage = document.createElement('img')
		const descriptionItemPriceText = document.createElement('p')
		const descriptionItemSound = document.createElement('img')
		const descriptionItemText = document.createElement('p')
		const descriptionSoundContainer = document.createElement('div')
		const descriptionBackButton = document.createElement('button')
		const descriptionSoundText = document.createElement('p')
		const descriptionItemTextContainer = document.createElement('div')
		const descriptionAddToCartButton = document.createElement('button')

		descriptionContainer.classList.add('descriptionContainer')
		descriptionLeftSection.classList.add('descriptionLeftSection')
		descriptionRightSection.classList.add('descriptionRightSection')
		descriptionItemImage.classList.add('descriptionItemImage')
		descriptionItemName.classList.add('descriptionItemName')
		descriptionItemPriceContainer.classList.add('descriptionItemPriceContainer')
		descriptionItemPriceImage.classList.add('descriptionItemPriceImage')
		descriptionItemPriceText.classList.add('descriptionItemPriceText')
		descriptionItemSound.classList.add('descriptionItemSound')
		descriptionItemText.classList.add('descriptionItemText')
		descriptionBackButton.classList.add('descriptionBackButton')
		descriptionSoundContainer.classList.add('descriptionSoundContainer')
		descriptionSoundText.classList.add('descriptionSoundText')
		descriptionItemTextContainer.classList.add('descriptionItemTextContainer')
		descriptionSoundText.textContent = 'play'
		descriptionAddToCartButton.classList.add('descriptionAddToCartButton')
		descriptionAddToCartButton.textContent = 'buy'

		descriptionItemImage.setAttribute('src', itemImage)
		descriptionItemName.textContent = `${itemName}`
		descriptionItemPriceImage.setAttribute('src', goldImg)
		descriptionItemPriceText.textContent = `${itemPriceText}`
		descriptionItemSound.setAttribute('src', soundButton)
		descriptionBackButton.textContent = 'back'
		descriptionItemText.textContent = `${itemText}`
		
		descriptionBackButton.addEventListener('click', event=> {
			noMoneyContainer.classList.remove('slide-in-top')
			noMoneyContainer.classList.add('slide-out-top')
			showDescription(eventTargetObject.eventTarget, 0)
		})
		descriptionItemSound.addEventListener('click', event=> {
			itemSound.play()
		})
	  descriptionSoundText.addEventListener('click', event=> {
			itemSound.play()
		})
		descriptionAddToCartButton.addEventListener('click', event => {
			if (userGold >= Number(itemPriceText)) {
			if (event && currentPage !== 'title') {
				giveReverseAnimation()
				setTimeout(clear, 1001)
				setTimeout(function() {
					mainPage('false', 'true', itemName, itemPriceText, itemIndex)
			}, 1002)
			}
		} else {
			noMoney(itemPriceText)
		}
		})

		descriptionMain.appendChild(descriptionContainer)
		descriptionContainer.appendChild(descriptionLeftSection)
		descriptionContainer.appendChild(descriptionRightSection)
		descriptionLeftSection.appendChild(descriptionItemImage)
		descriptionLeftSection.appendChild(descriptionItemPriceContainer)
		descriptionItemPriceContainer.appendChild(descriptionItemPriceImage)
		descriptionItemPriceContainer.appendChild(descriptionItemPriceText)
		descriptionLeftSection.appendChild(descriptionSoundContainer)
		descriptionSoundContainer.appendChild(descriptionItemSound)
		descriptionSoundContainer.appendChild(descriptionSoundText)
		descriptionLeftSection.appendChild(descriptionAddToCartButton)
		descriptionLeftSection.appendChild(descriptionBackButton)

		descriptionRightSection.appendChild(descriptionItemName)
		descriptionRightSection.appendChild(descriptionItemTextContainer)
		descriptionItemTextContainer.appendChild(descriptionItemText)
		}
	}

	function noMoney(value) {
		noMoneyText.textContent = 'not enought gold!'
		noMoneyValue.textContent = `you need ${value - userGold} more`
		noMoneyImg.setAttribute('src', goldImg)
		noMoneyEarnButton.textContent = 'earn'
		noMoneyExitButton.textContent = 'exit'

		noMoneyContainer.classList.remove('slide-out-top')
		noMoneyContainer.classList.add('slide-in-top')

		content.appendChild(noMoneyContainer)
		noMoneyContainer.appendChild(noMoneyTextContainer)
		noMoneyContainer.appendChild(noMoneyButtonsContainer)
		noMoneyTextContainer.appendChild(noMoneyText)
		noMoneyTextContainer.appendChild(noMoneyTextBottomContainer)
		noMoneyTextBottomContainer.appendChild(noMoneyValue)
		noMoneyTextBottomContainer.appendChild(noMoneyImg)
		noMoneyButtonsContainer.appendChild(noMoneyEarnButton)
		noMoneyButtonsContainer.appendChild(noMoneyExitButton)

		noMoneyExitButton.addEventListener('click', event => {
			noMoneyContainer.classList.remove('slide-in-top')
			noMoneyContainer.classList.add('slide-out-top')
		})

		noMoneyEarnButton.addEventListener('click', event => {
			giveReverseAnimation()
			setTimeout(() => {
				clear()
				earnPage()
			}, 1000);
		})
	}

	let index1 = Number('0')
	let index2 = Number('1')
	let index3 = Number('2')

	function showShop(condition) {
		while (shopContainer.firstChild) {
			shopContainer.removeChild(shopContainer.firstChild);
		}

		itemsArray[index1][6] = 0
		itemsArray[index2][6] = 1
		itemsArray[index3][6] = 2
		createShopCell(...itemsArray[index1])
		createShopCell(...itemsArray[index2])
		createShopCell(...itemsArray[index3])
		
		shopContainer.appendChild(rightHandContainer)
		shopContainer.appendChild(leftHandContainer)
		leftHandContainer.appendChild(handLeft)
		rightHandContainer.appendChild(handRight)
	}

	function nextShopItem(value) {
		if (value == 'left') {
			index1 -= 1
			index2 -= 1
			index3 -= 1
			if (index1 < 0) {
				index1 = itemsArray.length - 1
			} else if (index2 < 0) {
				index2 = itemsArray.length - 1
			} else if (index3 < 0) {
				index3 = itemsArray.length - 1
			}
			showShop('left')
		} else if (value == 'right') {
			index1 += 1
			index2 += 1
			index3 += 1
			if (index3 > itemsArray.length - 1) {
				index3 = itemsArray.length - itemsArray.length
			} else if (index2 > itemsArray.length - 1) {
				index2 = itemsArray.length - itemsArray.length
			} else if (index1 > itemsArray.length - 1) {
				index1 = itemsArray.length - itemsArray.length
			}
			showShop('right')
		} 
		rightHandContainer.style.animation ='none'
		leftHandContainer.style.animation ='none'
	}

	function giveReverseAnimation() {
		secretShop.style.animation = 'animateSecretBack 1s forwards'
		item.style.animation = 'animateTitleBack 1s forwards'
		shopContainer.classList.remove('slide-in-bottom')
		shopContainer.classList.add('slide-out-bottom')
		leftHandContainer.style.animation = ''
		rightHandContainer.style.animation = ''
		leftHandContainer.classList.add('slide-out-bottom-hands')
		rightHandContainer.classList.add('slide-out-bottom-hands')
		descriptionMain.style.animation = ''
		descriptionMain.classList.add('slide-out-top')
		goldCountContainer.classList.remove('slide-in-right')
		goldCountContainer.classList.add('slide-out-right')
		noMoneyContainer.classList.remove('slide-in-top')
		noMoneyContainer.classList.add('slide-out-top')
	}

	const domWork = () => {

		dialogArea.classList.add('dialogArea')
		dialogArea.textContent = 'this item was already bought'

		backgroundImage.classList.add('backgroundImage')
		backgroundImage.setAttribute('src', dota)

		secretShop.classList.add('secretShop')
		secretShop.setAttribute('src', secret)

		shopContainer.classList.add('shopContainer')
		shopContainer.classList.add('slide-in-bottom')

		descriptionMain.classList.add('descriptionMain')

		leftHandContainer.classList.add('leftHandContainer')
		rightHandContainer.classList.add('rightHandContainer')

		noMoneyContainer.classList.add('noMoneyContainer')
		noMoneyTextContainer.classList.add('noMoneyTextContainer')
		noMoneyTextBottomContainer.classList.add('noMoneyTextBottomContainer')
		noMoneyText.classList.add('noMoneyText')
		noMoneyImg.classList.add('noMoneyImg')
		noMoneyValue.classList.add('noMoneyValue')
		noMoneyButtonsContainer.classList.add('noMoneyButtonsContainer')
		noMoneyEarnButton.classList.add('noMoneyEarnButton')
		noMoneyExitButton.classList.add('noMoneyExitButton')

		goldCountContainer.classList.add('goldCountContainer')
		goldCountImage.classList.add('goldCountImage')
		goldCountImage.src = goldImg
		goldPlusButton.classList.add('goldPlusButton')
		goldPlusButton.setAttribute('src', plus)
		goldPlusButton.addEventListener('click', event=> {
			giveReverseAnimation()
			setTimeout(() => {
				clear()
				earnPage()
			}, 1001);
		})
		cartButton.classList.add('cartButton')
		goldCountText.classList.add('goldCountText')
		goldCountText.textContent = `${userGold.gold}`
		goldCountContainer.classList.add('slide-in-right')

		handLeft.src = `${handLeftImported}`
		leftHandContainer.style.animation = ''
		rightHandContainer.style.animation = ''
		handLeft.classList.add('handLeft')
		handRight.src = `${handRightImported}`
		handRight.classList.add('handRight')
		handLeft.addEventListener('click', event => {
			if (event) {nextShopItem('left')}
		})
		handRight.addEventListener('click', event => {
			if (event) {nextShopItem('right')}
		})

		secretShop.addEventListener('click', event => {
			if (event && currentPage !== 'title') {
				giveReverseAnimation()
				setTimeout(clear, 1001)
				setTimeout(function() {
					mainPage('false');
			}, 1002);
			}
		})

		coverDiv.classList.add('coverDiv')
		item.id = 'title'
		item.textContent = ''
		button.textContent = 'Wellcome to the dota shop!'
		button.classList.add('title')
		button.classList.add('button')
		button.id = 'unactive'
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

	const append = () => {
		content.appendChild(backgroundImage)
		content.appendChild(secretShop)
		showShop('none')
		content.appendChild(item)
		content.appendChild(descriptionMain)
		title.appendChild(button)
		content.appendChild(shopContainer)
		content.appendChild(goldCountContainer)
		goldCountContainer.appendChild(goldCountImage)
		goldCountContainer.appendChild(goldCountText)
		goldCountContainer.appendChild(goldPlusButton)
		goldCountContainer.appendChild(cartButton)
	}
	createSpans()
	append()
}

export { audioContainer }
export { itemsArray }
export default menuPage;









