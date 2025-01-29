function getFormvalue() {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the form inputs by name
    let firstName = document.getElementsByName('fname')[0].value;
    let lastName = document.getElementsByName('lname')[0].value;
    
    // Alert the full name
    alert(firstName + " " + lastName);
}