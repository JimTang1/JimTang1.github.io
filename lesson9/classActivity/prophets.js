const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

    fetch(requestURL)
    .then(result => result.json())
    .then(jsonResult =>{
        console.log(jsonResult);
        // jsonResult.results.forEach(
        //     prophet=>{
        //         let card = document.createElement('section');
        //         let h2 = document.createElement('h2');
        //         h2.textContent = prophet.name + ' ' + prophet.lastname;
    
        //         card.appendChild(h2);
        //         document.querySelector('div.cards').appendChild(card);
        //     }   
        // )

        const prophets = jsonResult['prophets'];
        
        for (let i = 0; i < prophets.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthdate = document.createElement('p');
            let birthplace = document.createElement('p');
            let image = document.createElement('img');


            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            birthdate.textContent = prophets[i].birthdate;
            birthplace.textContent = prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name)

            card.appendChild(h2);
            card.appendChild(birthdate);
            card.appendChild(birthplace);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });

