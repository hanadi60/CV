document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDivButton');
    const additionalDetails = document.getElementById('additionalDetails');

    toggleButton.addEventListener('click', () => {
        if (additionalDetails.style.display === 'none') {
            additionalDetails.style.display = 'block';
            toggleButton.textContent = 'Hide Contact Details';
        } else {
            additionalDetails.style.display = 'none';
            toggleButton.textContent = 'Show Contact Details';
        }
    });
});