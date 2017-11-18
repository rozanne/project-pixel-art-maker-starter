// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    console.log('::::makeGrid');

// Your code goes here!
    var height = document.querySelector('#input_height').value;
    var width = document.querySelector('#input_width').value;
    var color = document.querySelector('#colorPicker').value;

    var table = document.querySelector('#pixel_canvas');
    table.innerHTML = '';

    for(var i=0; i<height; i++) {
        var tr = document.createElement('tr');
        for(var j=0; j<width; j++) {
            var td = document.createElement('td');
            td.addEventListener('click', function() {
                this.style.background = color;
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
