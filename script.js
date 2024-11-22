document.addEventListener("DOMContentLoaded", function() {
    // Get all tab buttons and content panels
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Function to switch tabs
    function switchTab(event) {
        const targetTab = event.target.dataset.tab; // Get the tab name from the data-tab attribute

        // Remove the active class from all tab buttons and panels
        tabButtons.forEach(button => button.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add the active class to the clicked button and corresponding content panel
        event.target.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    }

    // Attach click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Optionally, set the first tab as active by default
    tabButtons[0].classList.add('active');
    tabPanels[0].classList.add('active');
});
