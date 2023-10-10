// Define the size of the grid
const GRID_SIZE = 21

// Function to generate a random grid position
export function randomGridPosition() {
    return {
        // Generate a random x coordinate within the grid size range
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        // Generate a random y coordinate within the grid size range
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

// Function to check if a given position is outside the grid boundaries
export function outsideGrid(position) {
    return (

        // Check if the x coordinate is less than 1 or greater than GRID_SIZE
        position.x < 1 || position.x > GRID_SIZE ||
        
        // Check if the y coordinate is less than 1 or greater than GRID_SIZE
        position.y < 1 || position.y > GRID_SIZE
    )
}
