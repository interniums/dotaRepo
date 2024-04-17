import { userGold } from "."
import mainPage from "./mainpage"
import dota from "./images/dota.jpg"
import secret from './images/secretShopRemoved.png'
import goldImage from './images/goldImg.jpg'
import plus from './images/plus.svg'
import { itemsArray } from "./menu"
import earnPage from "./game"
import goldImg from './images/goldImg.jpg'
import { updateGold } from "."

function showInventory() {


	const inventoryContainer = document.createElement('div')
	let boughtItems = [
		
	]

	function getBoughtItems() {
		for (let i = 0; i < itemsArray.length; i++) {
			if (itemsArray[i][7] == 'true') {
				boughtItems.push(itemsArray[i])
			} else if (boughtItems.length < 1) {
				inventoryContainer.style.alignItems = 'center'
				inventoryContainer.textContent = 'your inventory is empty'
			}
		}
	}
	getBoughtItems()

	const backgroundImage = document.createElement('img')
	const secretShop = document.createElement('img')
	const titleContainer = document.createElement('div')
	titleContainer.classList.add('titleContainer')
	const goldCountContainer = document.createElement('div')
	const goldCountImage = document.createElement('img')
	const goldPlusButton = document.createElement('img')
	const cartButton = document.createElement('img')
	const goldCountText = document.createElement('p')
	const goldCountTextAnimation = document.createElement('p')
	const content = document.getElementById('content')
	const inventoryTitle = document.createElement('p')


	const clear = () => {
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
	}

	function showInventory(name, price, image, sound, index) {
		inventoryContainer.style.alignItems = ''
		inventoryContainer.textContent = ''
		const inventoryCell = document.createElement('div')
		const inventoryName = document.createElement('p')
		const inventoryImage = document.createElement('img')
		const inventoryPriceContainer = document.createElement('div')
		const inventoryPriceText = document.createElement('p')
		const inventoryPriceImage = document.createElement('img')
		const inventoryButtonsContainer = document.createElement('div')
		const inventorySellButton = document.createElement('button')

		inventoryCell.classList.add('inventoryCell')
		inventoryCell.dataset.index = `${index}`
		inventoryName.classList.add('inventoryName')
		inventoryImage.classList.add('inventoryImage')
		inventoryPriceContainer.classList.add('inventoryPriceContainer')
		inventoryPriceText.classList.add('inventoryPriceText')
		inventoryPriceImage.classList.add('inventoryPriceImage')
		inventoryButtonsContainer.classList.add('inventoryButtonsContainer')
		inventorySellButton.classList.add('inventorySellButton')
		inventorySellButton.dataset.index = `${index}`

		inventoryName.textContent = `${name}`
		inventoryImage.setAttribute('src', image)
		inventoryPriceText.textContent = `${price}`
		inventoryPriceImage.setAttribute('src', goldImage)
		inventorySellButton.textContent = 'sell'

		inventoryContainer.appendChild(inventoryCell)
		inventoryCell.appendChild(inventoryName)
		inventoryCell.appendChild(inventoryImage)
		inventoryCell.appendChild(inventoryPriceContainer)
		inventoryPriceContainer.appendChild(inventoryPriceText)
		inventoryPriceContainer.appendChild(inventoryPriceImage)
		inventoryCell.appendChild(inventoryButtonsContainer)
		inventoryButtonsContainer.appendChild(inventorySellButton)

		inventorySellButton.addEventListener('click', removeItem)

		function removeItem(event) {
			if (event) {
				const removeCell  = document.querySelector(`	[data-index='${index}']`)
				const removeButtonYes = document.createElement('button')
				const removeButtonNo = document.createElement('button')

				removeButtonYes.addEventListener('click', event => {
					removeCell.classList.add('scale-out-center')
					userGold.gold = userGold.gold + Number(price / 2)
					updateGold()

					titleContainer.removeChild(goldCountContainer)
					doomWork()
						goldCountTextAnimation.textContent = `${userGold.gold}`
						goldCountContainer.classList.remove('slide-in-right')
						goldCountText.classList.add('fade-in')
						goldCountTextAnimation.classList.remove('slide-in-right')
						goldCountTextAnimation.textContent = `+${price / 2}`
						goldCountTextAnimation.classList.add('slide-out-top-slow')
						titleContainer.appendChild(goldCountContainer)

					setTimeout(() => {
						removeCell.classList.remove('scale-out-center')
						inventoryContainer.removeChild(removeCell)
						inventoryCell.removeChild(removeButtonYes)
						inventoryCell.removeChild(removeButtonNo)

						for (let i = 0; i < boughtItems.length; i++) {
							if (boughtItems[i][0] == index) {
								boughtItems.splice(i, 1)
								itemsArray[i][7] = 'false'
							}
						}
						if (boughtItems.length < 1) {
							inventoryContainer.style.alignItems = 'center'
							inventoryContainer.textContent = 'your inventory is empty'
						}
					}, 800)
				})

				removeButtonNo.addEventListener('click', event => {
					inventoryCell.removeChild(removeButtonYes)
					inventoryCell.removeChild(removeButtonNo)

					inventoryPriceText.textContent = `${price}`
					inventoryPriceContainer.remove()
					inventoryCell.appendChild(inventoryName)
					inventoryCell.appendChild(inventoryImage)
					inventoryCell.appendChild(inventoryPriceContainer)
					inventoryCell.appendChild(inventorySellButton)
				})

				removeButtonYes.classList.add('inventorySellButtonYes')
				removeButtonNo.classList.add('inventorySellButtonNo')
				removeButtonYes.textContent = 'yes'
				removeButtonNo.textContent = 'no'
				inventoryPriceText.textContent = `sell item for ${price / 2}?`
				inventoryName.remove()
				inventoryImage.remove()
				inventorySellButton.remove()
				inventoryCell.appendChild(removeButtonYes)
				inventoryCell.appendChild(removeButtonNo)
			}
		}
	}

	function createInventoryCell() {
		for (let i = 0; i < boughtItems.length; i++) {
			const itemName = boughtItems[i][1]
			const itemPrice = boughtItems[i][2]
			const itemImage = boughtItems[i][3]
			const itemSound = boughtItems[i][4]
			const itemIndex = boughtItems[i][0]

			showInventory(itemName, itemPrice, itemImage, itemSound, itemIndex)
		}
	}
	createInventoryCell()

	function doomWork() {
		content.style.display = 'grid'
		content.style.justifyContent = 'center'
		content.style.alignContent = 'center'
		content.style.alignItems = 'center'

		
		goldCountTextAnimation.style.top = '49px'

		backgroundImage.classList.add('backgroundImage')
		backgroundImage.setAttribute('src', dota)
	
		secretShop.classList.add('secretShop')
		secretShop.setAttribute('src', secret)

		inventoryContainer.classList.add('inventoryContainer')
		inventoryContainer.classList.add('slide-in-top')
		inventoryTitle.classList.add('inventoryTitle')
		inventoryTitle.textContent = 'inventory'
		inventoryTitle.classList.add('slide-in-top')
		
		titleContainer.style.justifyContent = 'end'
		goldCountContainer.style.top = '25px'
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
				}, 1001)
			})
			cartButton.classList.add('cartButton')
			goldCountText.classList.add('goldCountText')
			goldCountText.textContent = `${userGold.gold}`
			goldCountContainer.classList.add('slide-in-right')
			goldCountTextAnimation.classList.add('goldCountTextAnimation')
			goldCountTextAnimation.textContent = `${userGold.gold}`
			goldCountTextAnimation.classList.add('slide-in-right')
	
			secretShop.addEventListener('click', event => {
				if (event) {

				giveReverseAnimation()
				setTimeout(() => {
					clear()
					mainPage('false')
				}, 805);
				}
			})
	}
	doomWork()

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
		content.appendChild(inventoryTitle)
		content.appendChild(inventoryContainer)
		content.append(titleContainer)

		titleContainer.appendChild(goldCountContainer)
		goldCountContainer.appendChild(goldCountImage)
		goldCountContainer.appendChild(goldCountText)
		goldCountContainer.appendChild(goldPlusButton)
		goldCountContainer.appendChild(cartButton)
		content.appendChild(goldCountTextAnimation)
	}

	createSpans()
	append()

	function giveReverseAnimation() {
		secretShop.style.animation = 'animateSecretBack 1s forwards'
		goldCountTextAnimation.classList.remove('slide-out-top-slow')
		goldCountTextAnimation.classList.remove('slide-in-right')
		goldCountTextAnimation.classList.add('slide-out-right')

		goldCountContainer.classList.remove('slide-in-right')
		goldCountContainer.classList.add('slide-out-right')
		inventoryContainer.classList.remove('slide-in-top')
		inventoryContainer.classList.add('slide-out-top')
		inventoryTitle.classList.remove('slide-in-top')
		inventoryTitle.classList.add('slide-out-top')


		setTimeout(() => {
			goldCountTextAnimation.style.top = '74px'
			content.style.justifyContent = ''
			content.style.alignContent = ''
			content.style.alignItems = ''
			goldCountContainer.style.top = '50px'
			content.style.display = 'flex'
		}, 600)
	}
}

export default showInventory;