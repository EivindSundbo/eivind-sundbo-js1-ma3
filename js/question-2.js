const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=70df0463efac468c841d435010080bd0";

const container = document.querySelector(".name");

async function gamesImport() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        const games = data.results;

        container.innerHTML = "";

        for(let i = 0; i < games.length; i++){
            if(i === 8){
                break;
            }
            
            container.innerHTML += `
            <div>
                <h2>${games[i].name}</h2>
                <p>Rating: ${games[i].rating}</p>
                <p>Number of tags: ${games[i].tags.length}</p>
            </div>`;
        }
    }
    catch(error){
        console.log("Error occured: ", error);
    }
};

gamesImport();