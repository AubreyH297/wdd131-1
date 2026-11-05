// 1. Add event listener to the button
document.querySelector('#rollButton').addEventListener("click", event => {
    // Animate the die
        const images = document.querySelectorAll('#gameboard img')
        images.forEach(image => {
            // switch the source to the die_rolling.gif animation
            if(isDieUnlocked(image)) {
                image.src = "assets/die_rolling.gif"
            }
        });

    setTimeout(() => {
        // run what is in here after x milliseconds
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                let randomNumber = Math.floor((Math.random() * 6) + 1);

                image.src = `assets/white_dice_${randomNumber}.gif`;
                // set the images to a random die
            }
        });
    }, 1000);
})

function isDieUnlocked(dieImage) {
    // is the corresponding checkbox checked? Return false
    const checkboxes = document.querySelectorAll('#gameboard input');
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}