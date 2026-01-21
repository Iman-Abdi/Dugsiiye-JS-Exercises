function changeImage() {
    const image =document.querySelector(`#image`);
    const url = prompt("Enter new image URL:");
    const border = prompt("Enter border color:");
    const width = prompt("Enter image width in px:");
    const height = prompt("Enter image height in px:");
    const borderRadius = prompt("Enter border radius in px:");

    image.setAttribute('src', url);
    image.style.border = '2px solid ' + border;
    image.style.width = width + 'px';
    image.style.height = height + 'px';
    image.style.borderRadius = borderRadius + 'px';
}