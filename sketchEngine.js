// sketchEngine.js
// Nathan Mack 2020

// Generates divs in an HTML file to hold the sketching grid
function genDivs(divs) {
    var grid = document.getElementById('grid');
    
    // Looping to create the grid
    for (var i = 0; i < divs; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        
        for (var j = 1; j <= divs; j++) {
            var cell = document.createElement('div');
            cell.className = 'gridsquare';
            cell.id = 'cell' + ((i * divs) + j);
            row.append(cell);
        }
        grid.append(row);
    }

}

// A function that adds event listeners to populate the grid with colored pixels
function populateGrid() {
    // Clears the grid to be blank
    var remove = document.getElementsByClassName('row');
    Array.from(remove).forEach((element) => {
        element.remove();
    });

    // Initializes intial parameters for the sketching grid
    var divs = parseInt(prompt('Enter Grid Resolution'));
    genDivs(divs);
    var dimension = 600 / divs;
    const cells = document.getElementsByClassName('gridsquare');
    const rows = document.getElementsByClassName('row');

    // Formats grid to be the correct user specified resolution
    Array.from(rows).forEach((row) => {
        row.style['grid-template-columns'] = `repeat(${divs}, ${dimension}px)`;
        row.style['grid-template-rows'] = `${dimension}px`;
    });
    
    // Adds a mousover event listener for all of the grid divs
    Array.from(cells).forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            cell.style.backgroundColor = 'black';
        });
    });
}

// Initalizes the grid for the first time
populateGrid();

// Adds event listener to a button to call the populateGrid function to reset everything
var resetButton = document.querySelector('button');
resetButton.addEventListener('click', function(e) {
    console.log('test');
    populateGrid();
});
 

