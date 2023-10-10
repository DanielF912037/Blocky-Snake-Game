// Import necessary functions and modules from other files
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

// Initialize variables to keep track of game state
let lastRenderTime = 0
let gameOver = false

// Get the game board element from the HTML
const gameBoard = document.getElementById("game-board")

// The main game loop
function main(currentTime) {

    // Check if the game is over
    if (gameOver) {

        // Display a confirmation dialog to restart the game
        if (confirm("You lost. Press OK to restart.")) {
            window.location = "/" // Reload the page to restart the game
        }
        return
    }

    // Request the next animation frame to continue the game loop
    window.requestAnimationFrame(main)

    // Calculate the time since the last frame in seconds
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    // Control the game speed based on SNAKE_SPEED
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    // Update the last render time
    lastRenderTime = currentTime

    // Call the update and draw functions to update and render the game
    update()
    draw()
}

// Start the game loop by requesting the first animation frame
window.requestAnimationFrame(main)

// Function to update the game state
function update() {
    updateSnake() // Update the snake's position and movement
    updateFood()  // Update the food's position
    checkDeath()  // Check if the game should end due to collision or out-of-bounds
}

// Function to render the game on the game board
function draw() {
    gameBoard.innerHTML = '' // Clear the game board
    drawSnake(gameBoard)    // Render the snake
    drawFood(gameBoard)     // Render the food
}

// Function to check if the game should end
function checkDeath() {
    
    // Game over if the snake is outside the grid or intersects itself
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
