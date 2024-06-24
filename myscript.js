// Create Container Grid
const main = document.querySelector("body")
const container = document.createElement("div");
container.classList.add("container")
main.appendChild(container)




// Create 16x16 grid of square divs
for (let index = 0; index < 256; index++) {
    let current_element = document.createElement("div")
    current_element.classList.add("square_div")
    current_element.textContent = "Test Input"
    container.appendChild(current_element)
}


const all_squares = document.querySelectorAll(".square_div");

all_squares.forEach((eachsquare) => {
    eachsquare.addEventListener("mouseover", () => {

        eachsquare.style.background-color = "blue";


    });

});
