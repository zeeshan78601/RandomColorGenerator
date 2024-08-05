function generateRandomColor() {
    // Generate a random color
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
}
let color = generateRandomColor()
// Example usage
console.log(generateRandomColor());

let boxes = document.querySelectorAll('.box')
for(let element of boxes){
    element.style.backgroundColor = color
}