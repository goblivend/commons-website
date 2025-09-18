document.querySelectorAll('.toggle-description-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.project-card');
        const detailedDescription = card.querySelector('.project-description-detailed');
        const shortDescription = card.querySelector('.project-description');

        if (detailedDescription.style.display === 'none') {
            detailedDescription.style.display = 'block';
            shortDescription.style.display = 'none';
            this.classList.add('down');
            card.classList.add('expanded'); // Add the expanded class to the card
        } else {
            detailedDescription.style.display = 'none';
            shortDescription.style.display = 'block';
            this.classList.remove('down');
            card.classList.remove('expanded'); // Remove the expanded class from the card
        }
    });
});
