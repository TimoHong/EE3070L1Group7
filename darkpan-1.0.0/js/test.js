function checkCheckboxes() {
    // Get the checkbox elements by their IDs
    const checkbox1 = document.getElementById('checkbox1');
    const checkbox2 = document.getElementById('checkbox2');

    // Check if checkboxes were found
    if (!checkbox1 || !checkbox2) {
        console.error('Checkbox elements not found.');
        return; // Exit the function if checkboxes are not found
    }

    // Check if at least one checkbox is not checked
    if (!checkbox1.checked && !checkbox2.checked) {
        alert('Please check at least one checkbox.');
        return; // Exit the function if no checkbox is checked
    }

    // Display messages based on checkbox status
    if (checkbox1.checked && checkbox2.checked) {
        alert('Both checkboxes are checked!');
    } else if (checkbox1.checked) {
        alert('Checkbox 1 is checked!');
    } else if (checkbox2.checked) {
        alert('Checkbox 2 is checked!');
    } else {
        alert('No checkboxes are checked.');
    }
}