import './styles.css'
import mainPage from './mainpage'

function initializeGold() {
	// Check if the gold count already exists in local storage
	if (!localStorage.getItem('userGold')) {
			// If not, set the gold count to a default value (e.g., 0)
			localStorage.setItem('userGold', '2500')
	}
}
initializeGold()

function getGoldCount() {
	const goldCount = localStorage.getItem('userGold')
	return parseInt(goldCount)
}

function updateGoldCount(newGoldCount) {
	localStorage.setItem('userGold', newGoldCount.toString())
}

function addGold(amount) {
	// Retrieve the current gold count
	let currentGoldCount = getGoldCount()
	
	// Add the specified amount of gold
	currentGoldCount += amount
	
	// Update the gold count in local storage
	updateGoldCount(currentGoldCount)
}

function spendGold(amount) {
	// Retrieve the current gold count
	let currentGoldCount = getGoldCount()
	
	// Check if there is enough gold to spend
	if (currentGoldCount >= amount) {
			// Subtract the specified amount of gold
			currentGoldCount -= amount
			
			// Update the gold count in local storage
			updateGoldCount(currentGoldCount)
	} else {
			console.log('Not enough gold to spend.')
	}
}

console.log(getGoldCount())
let gold = getGoldCount()

const userGold = {
	gold: gold
}

function updateGold(value) {
	updateGoldCount(userGold.gold)
	console.log(getGoldCount())
}

mainPage('true')

export { getGoldCount }
export { updateGoldCount }
export { addGold }
export { spendGold }
export { updateGold }
export { userGold }