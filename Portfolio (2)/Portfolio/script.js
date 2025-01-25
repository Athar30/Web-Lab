// Add functionality to switch categories
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function () {
        // Remove active class from all categories
        document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
        // Add active class to the clicked category
        this.classList.add('active');

        // Get the selected category
        const selectedCategory = this.getAttribute('data-category');

        // Show only skills matching the category
        document.querySelectorAll('.skill-card').forEach(card => {
            if (card.getAttribute('data-category') === selectedCategory || selectedCategory === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
