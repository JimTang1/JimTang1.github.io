window.addEventListener('load', (e)=>{
    const url = "json/temples2.json";
    fetch(url)
    .then(result => result.json())
    .then(jsonResult =>{
        console.log(jsonResult);
        buildTempleCard(jsonResult[0]);
        Object.entries(jsonResult).forEach(([key, temple])=>{
            //console.log(temple);
            if(temple.state =="ID")
                buildTempleCard(temple);
        });

        // jsonResult.forEach(temple =>{
        //     console.log(temple);
        //     buildTempleCard(temple);
        // })
    });
})

function buildTempleCard(temple){
    //console.log(temple);
    let card = document.createElement('section');
    card.classList.add('temple');
    card.innerHTML =`<h2>${temple.name}</h2> 
                    <img src = "${temple.imageurl}" alt ="${temple.name}>"
                    <br>
                    <p class="fp">First President <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p>
                    <p class = "lp">Current President <b>${temple.presidents[temple.presidents.length-1]}</b></p>
                    `;
    document.querySelector('#temples').appendChild(card);
}

function detailPage(temple){
    console.log(temple);
}