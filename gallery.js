function filterGallery(category, clickedButton) {
    // 1. Get all gallery items and filter buttons
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // 2. Remove 'active' class from all buttons and add it to the clicked one
    buttons.forEach(btn => btn.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // 3. Show or Hide items based on the selected category
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block'; // Display matching item
        } else {
            item.style.display = 'none';  // Hide non-matching item
        }
    });
}
