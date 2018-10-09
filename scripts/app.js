// Get input
var nameInput = document.getElementById('nameInput');

// Normalize formatting of Input
nameInput.addEventListener('keyup', filterNames);



function filterNames() {
        // Place all collection-item a innerHTML into an array
        var ul = document.getElementById('names');
        var li = ul.querySelectorAll('li.collection-item');
        // Get value of input
        var inputValue = document.getElementById('nameInput').value.toUpperCase();
        
// Loop through the array and compare each item in the array's a innerHTML ofIndex value to the inputvalue;
    for(var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('a')[0];
        
        // Run conditional to change css styling
        if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }

    }

}




// If the nameInput == collection item value, then set the display to ''

// If nameInput !== to collection item value, then set display to none