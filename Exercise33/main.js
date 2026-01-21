const header = document.querySelector('#header');
console.log(header);

const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

function changeContent() {
    header.textContent = `My Information`;
}

function changeElement() {
    firstParagraph.innerHTML = `Name: Iman Abdi`;
}