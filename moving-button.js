const button = document.getElementById("movingButton");
const interactiveArea = document.querySelector(".interactive-area");

interactiveArea.addEventListener("mousemove", (e) => {
    const buttonRect = button.getBoundingClientRect();
    const distanceX = Math.abs(buttonRect.x + buttonRect.width / 2 - e.clientX);
    const distanceY = Math.abs(buttonRect.y + buttonRect.height / 2 - e.clientY);

    // If the cursor is within a certain range, move the button
    if (distanceX < 100 && distanceY < 100) {
        const newLeft = Math.random() * (interactiveArea.clientWidth - buttonRect.width);
        const newTop = Math.random() * (interactiveArea.clientHeight - buttonRect.height);
        
        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;
    }
});