// Import necessary functions and modules from other files
import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

// Initialize the food position with a random value
let food = getRandomFoodPosition()

// Define the expansion rate for the snake when it eats food
const EXPANSION_RATE = 5

// Function to update the game state
export function update() {

    // Check if the snake has collided with the food
    if (onSnake(food)) {

        // If so, expand the snake and generate a new random food position
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

// Function to draw the food on the game board
export function draw(gameBoard) {
    
    // Create a new div element for the food
    const foodElement = document.createElement("div")
    
    // Set the grid row and column for the food based on its position
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    
    // Add the 'food' class to the food element for styling
    foodElement.classList.add("food")
    
    // Append the food element to the game board
    gameBoard.appendChild(foodElement)
}

// Function to generate a random food position that is not on the snake
function getRandomFoodPosition() {
    let newFoodPosition
    
    // Keep generating random positions until a valid one is found
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    
    return newFoodPosition
}