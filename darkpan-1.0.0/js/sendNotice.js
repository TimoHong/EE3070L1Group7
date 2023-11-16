function sendAnnouncement(){
    const userInput = document.getElementById("Announcement").value;
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleDateString();
    
    if (!checkbox1 || !checkbox2) {
        console.error('Checkbox elements not found.');
        return; // Exit the function if checkboxes are not found
    }

    // Check if at least one checkbox is not checked
    if (!checkbox1.checked && !checkbox2.checked) {
        alert('Please check at least one checkbox.');
        return; // Exit the function if no checkbox is checked
    }

    if(userInput == ''){
        alert('Please enter announcement content.');
        return;
    }

    // Display messages based on checkbox status
    if ((checkbox1.checked && checkbox2.checked)) {
        alert('Announcement Uploaded\nContent :'+userInput+'\ntarget : User and Admin'+'\ntime: '+formattedTime);
    } else if (checkbox1.checked) {
        alert('Announcement Uploaded\nContent :'+userInput+'\ntarget : User');
    } else if (checkbox2.checked) {
        alert('Announcement Uploaded\nContent :'+userInput+'\ntarget : Admin');
    } else {
        alert('Error');
    }
};

