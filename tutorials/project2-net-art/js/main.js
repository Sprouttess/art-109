function goToNextDoor(currentDoorNumber) {
    const currentDoor = document.getElementById(`image-${currentDoorNumber}`);
    const nextDoor = document.getElementById(`image-${currentDoorNumber + 1}`);
    
    if (nextDoor) {
        // Hide the current door and show the next door
        currentDoor.style.display = 'none';
        nextDoor.style.display = 'block';
    }

    // Disable the "Next" button if on the last door
    if (!nextDoor) {
        const nextButton = document.querySelector(`#image-${currentDoorNumber} .next-door`);
        if (nextButton) {
            nextButton.disabled = true;
        }
    }

    // Enable the "Previous" button
    const prevButton = document.querySelector(`#image-${currentDoorNumber + 1} .prev-door`);
    if (prevButton) {
        prevButton.disabled = false;
    }
}

function goToPrevDoor(currentDoorNumber) {
    const currentDoor = document.getElementById(`image-${currentDoorNumber}`);
    const prevDoor = document.getElementById(`image-${currentDoorNumber - 1}`);
    
    if (prevDoor) {
        // Hide the current door and show the previous door
        currentDoor.style.display = 'none';
        prevDoor.style.display = 'block';
    }

    // Disable the "Previous" button if on the first door
    if (!prevDoor) {
        const prevButton = document.querySelector(`#image-${currentDoorNumber} .prev-door`);
        if (prevButton) {
            prevButton.disabled = true;
        }
    }

    // Enable the "Next" button
    const nextButton = document.querySelector(`#image-${currentDoorNumber - 1} .next-door`);
    if (nextButton) {
        nextButton.disabled = false;
    }
}

// Initial setup to show the first door and hide others
window.onload = function() {
    document.getElementById('image-1').style.display = 'block'; // Show the first door
    for (let i = 2; i <= 5; i++) {
        document.getElementById(`image-${i}`).style.display = 'none'; // Hide the other doors
    }
};
