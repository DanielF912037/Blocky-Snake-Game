// Import the getInputDirection function from the "input.js" module
import { getInputDirection } from "./input.js"

// Define the speed of the snake's movement
export const SNAKE_SPEED = 5

// Initialize the snake's initial position with one segment
const snakeBody = [{ x: 11, y: 11 }]

// Initialize a variable to keep track of new snake segments to be added
let newSegments = 0

// Function to update the snake's position and movement
export function update() {

  // Add new segments to the snake
  addSegments()

  // Get the input direction from the user
  const inputDirection = getInputDirection()

  // Update the positions of the snake's body segments
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  // Update the position of the snake's head based on the input direction
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

// Function to draw the snake on the game board
export function draw(gameBoard) {

  // Iterate through each segment of the snake's body
  snakeBody.forEach(segment => {

    // Create a new element for each segment
    const snakeElement = document.createElement('div')

    // Set the grid row and column for the segment
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x

    // Add the 'snake' class to style the snake segments
    snakeElement.classList.add('snake')

    // Append the segment element to the game board
    gameBoard.appendChild(snakeElement)
  })
}

// Function to expand the snake by a specified amount
export function expandSnake(amount) {
  newSegments += amount
}

// Function to check if a given position is on the snake
export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {

    // Ignore the snake's head when specified
    if (ignoreHead && index === 0) return false
    
    // Check if the position matches any segment's position
    return equalPositions(segment, position)
  })
}

// Function to get the position of the snake's head
export function getSnakeHead() {
  return snakeBody[0]
}

// Function to check if the snake intersects with itself
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

// Function to check if two positions are equal
function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

// Function to add new segments to the snake
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  // Reset the newSegments counter
  newSegments = 0
}
