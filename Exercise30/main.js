async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Http Error`, response.status);
        }

        console.log("Before JSON");
        console.log(response);

        console.log("After JSON");
        const data = await response.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}

fetchData();