const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=70df0463efac468c841d435010080bd0";

const container = document.querySelector(".name");

async function callUrbanDictionary() {
    try{
        const response = await fetch(url);
        const results = await response.json();
        const data = results.results
        console.log(results.results);

        for(let i = 0; i < data.length; i++){
            if(i === 8){
                break;
            }
            console.log(data[i].name);
            container.innerHTML += `
            <div>
                <h2>${data[i].name}</h2>
                <p>Rating: ${data[i].rating}</p>
                <p>Number of tags${data[i].tags.length}</p>
            </div>`
        }
    }
    catch(error){
        console.log("error occured", error);
    }
};

callUrbanDictionary();