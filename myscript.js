// Create Container Grid
const main = document.querySelector("body")
const container = document.createElement("div");
main.appendChild(container)




// Create 16x16 grid of square divs
for (let index = 0; index < 16; index++) {
    let current_element = document.createElement("div")
    current_element.classList.add("square_div")
    current_element.textContent = "Test Input"
    container.appendChild(current_element)
}
