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
                let div = document.createElement('div');
                let div2 = document.createElement('div');
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

                
                div2.appendChild(name);
                div2.appendChild(span);
                div2.appendChild(yearFounded);
                div2.appendChild(currentPopulation);
                div2.appendChild(averageRainfall);
                div.appendChild(image);
                section.appendChild(div2);
                section.appendChild(div);

                
                document.querySelector('.content').appendChild(section);
                //document.querySelector('.content').appendChild(div);
            }
        )
    })
})


