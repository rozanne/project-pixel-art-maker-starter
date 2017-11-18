// Select color input
// Select size input
let inputHeight = null;
let inputWidth = null;
let inputColor = null;

window.onload = function() {
    //  window onload, put each elements in to each variables to use later.
    inputHeight = document.querySelector('#input_height');
    inputWidth = document.querySelector('#input_width');
    inputColor = document.querySelector('#colorPicker');
};

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    console.log('::::makeGrid');

    // save input height and width values from user
    let height = inputHeight.value;
    let width = inputWidth.value;

    // render table cells
    let table = document.querySelector('#pixel_canvas');

    // clear table before rendering cells
    table.innerHTML = '';

    // rendering cells
    for(let i=0; i<height; i++) {
        let tr = document.createElement('tr');
        for(let j=0; j<width; j++) {
            let td = document.createElement('td');
            // add 'click' event for filling the selected color
            td.addEventListener('click', function() {
                this.style.background = inputColor.value;
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
