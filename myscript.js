// Create Container Grid
const main = document.querySelector("body")
const container = document.createElement("div");
container.classList.add("container")
main.appendChild(container)



//Create Square Grid Function here
function createGrid(n) {
    //Create Grid
    for (let index = 0; index < n*n; index++) {
        let current_element = document.createElement("div")
        current_element.classList.add("square_div")
        
        container.appendChild(current_element)

    }


    // Add Mouseover Effect
    const all_squares = document.querySelectorAll(".square_div");
    all_squares.forEach((eachsquare) => {
        eachsquare.style.width = `${99/n}%`
        
        
        eachsquare.addEventListener("mouseover", () => {

            eachsquare.style.backgroundColor = "blue";
        });
    });

};



// Event Listener for Button 
const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    //Get New Dimension
    let squaresize = Number(prompt("How many squares for the square grid?"))
    
    // Remove Old Grid
    const all_squares_one = Array.from(document.querySelectorAll(".square_div"))
    for (let index = 0; index < all_squares_one.length; index++) {
        container.removeChild(all_squares_one[index]);
        
    }

    createGrid(squaresize)

})



