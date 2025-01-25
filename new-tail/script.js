const lines = [
    document.getElementById('companies-line-grp1'),
    document.getElementById('companies-line-grp2'),
    document.getElementById('companies-line-grp3')
];

const speeds = [1, -1.2, 1.5]; // Different speeds for the snake effect
let positions = [0, 0, 0];      // Initial positions for each line

function startSnakeScroll() {
    function scroll() {
        // Update each line's position
        for (let i = 0; i < lines.length; i++) {
            positions[i] += speeds[i]; // Increment position based on speed

            const lineWidth = lines[i].scrollWidth; // Get actual width of each line

            // Reset position when it goes off-screen for seamless looping
            if (positions[i] > lineWidth) {
                positions[i] -= lineWidth;
            } else if (positions[i] < 0) {
                positions[i] += lineWidth;
            }

            // Apply the transform to create the scroll effect
            lines[i].style.transform = `translateX(${-positions[i]}px)`;
        }

        // Request next animation frame
        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start the snake scrolling effect
startSnakeScroll();
