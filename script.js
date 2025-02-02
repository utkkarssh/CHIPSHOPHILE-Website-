// Add basic interactivity
document.addEventListener("DOMContentLoaded", function () {
    // Click effect for service boxes
    const serviceBoxes = document.querySelectorAll(".service-box");
    
    serviceBoxes.forEach(box => {
        box.addEventListener("click", function () {
            alert(`You clicked on: ${this.textContent}`);
        });
    });
});
