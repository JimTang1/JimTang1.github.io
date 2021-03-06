window.addEventListener("load", (event)=>{

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
    .then(result => result.json())
    .then(jsonResult =>{
        console.log(jsonResult);
        jsonResult.towns.forEach(
            town =>{
                let section = document.createElement('section');
                let name = document.createElement('h2');
                let span = document.createElement('span');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let image = document.createElement('img');

                name.textContent = town.name;
                span.textContent = town.motto;
                yearFounded.textContent = "Year Founded: " + town.yearFounded;
                currentPopulation.textContent = "Population: " + town.currentPopulation;
                averageRainfall.textContent = "Annual Rain Fall" + town.averageRainfall;
                image.setAttribute('src',"images/" + town.photo);
                image.setAttribute('alt',town.name);

                section.appendChild(name);
                section.appendChild(span);
                section.appendChild(yearFounded);
                section.appendChild(currentPopulation);
                section.appendChild(averageRainfall);
                section.appendChild(image);

                document.querySelector('.content').appendChild(section);
            }
        )
    })
})


