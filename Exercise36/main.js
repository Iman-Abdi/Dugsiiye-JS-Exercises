const Color = document.querySelector('#Color');
const colorDisplay = document.querySelector('#colorDisplay');
const PickedColors = document.querySelector('#PickedColors');
const clearButton = document.querySelector('#clearButton');

Color.addEventListener('input', function() {
    colorDisplay.style.backgroundColor = Color.value;

    const newColor = document.createElement('p');
    newColor.style.color = Color.value;
    newColor.textContent = Color.value;
    PickedColors.appendChild(newColor);
});


clearButton.addEventListener('click', function() {
    PickedColors.innerHTML = '';
    colorDisplay.style.backgroundColor = '';
});