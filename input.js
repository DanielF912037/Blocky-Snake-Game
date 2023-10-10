// Initialize the current input direction as { x: 0, y: 0 }
let inputDirection = { x: 0, y: 0 }

// Initialize the last input direction as { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// Add an event listener for keydown events
window.addEventListener('keydown', e => {

    // Handle different arrow key presses
    switch (e.key) {

      case 'ArrowUp':
        // If the last input direction was not in the opposite direction (y-axis), update the input direction to move upward
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: -1 }
        break

      case 'ArrowDown':
        // If the last input direction was not in the opposite direction (y-axis), update the input direction to move downward
        if (lastInputDirection.y !== 0) break
        inputDirection = { x: 0, y: 1 }
        break

      case 'ArrowLeft':
        // If the last input direction was not in the opposite direction (x-axis), update the input direction to move to the left
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: -1, y: 0 }
        break

      case 'ArrowRight':
        // If the last input direction was not in the opposite direction (x-axis), update the input direction to move to the right
        if (lastInputDirection.x !== 0) break
        inputDirection = { x: 1, y: 0 }
        break
    }
  })

// Function to get the current input direction
export function getInputDirection() {
  
    // Update the last input direction with the current input direction and return it
    lastInputDirection = inputDirection
    return inputDirection
}
