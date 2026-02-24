const button = document.querySelector("button");
const fromInput = document.querySelector("#somali");
const toInput = document.querySelector("#engilish");
const textInput = document.querySelector("#text");
const resultDiv = document.querySelector(".tanslate");

button.addEventListener("click", translateText);

async function translateText() {

    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const text = textInput.value.trim();

    if (!from || !to || !text) {
        alert("Fadlan dhammaan meelaha buuxi");
        return;
    }

  const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": 'f7a03912f0mshef66ffa85a7cba4p1bf0a3jsn3ba74739f2a0',
            "X-RapidAPI-Host": 'google-translate113.p.rapidapi.com',
        },
        body: JSON.stringify({
            from: from,
            to: to,
            text: text
        })
    };

    try {
        const response = await fetch(url, options);
        console.log(response)
        const data = await response.json();
        console.log(data)


        
        resultDiv.innerHTML = `<strong>Result:</strong> ${data.trans}`;

    } catch (error) {
        resultDiv.innerHTML = "waa qalad saxip";
        console.error(error);
    }
}