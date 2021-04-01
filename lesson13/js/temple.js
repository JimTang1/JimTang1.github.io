window.addEventListener("load", (event)=>{

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const requestURL = 'temple.json';
    fetch(requestURL)
    .then(result => result.json())
    .then(jsonResult =>{
        jsonResult.Temples.forEach(
            temple =>{
                let section = document.createElement('section');
                let div = document.createElement('div');
                let div2 = document.createElement('div');
                let name = document.createElement('h2');
                let image = document.createElement('img');  
                let info = document.createElement('p');
                let hr = document.createElement("hr");
                let hr2 = document.createElement("hr");
                let address = document.createElement('p');
                let hotel = document.createElement('a');
                let site = document.createElement('p');
                let space = document.createElement('p');
                let phone = document.createElement('p');
                let services = document.createElement('p');
                let map = document.createElement('a');


                div.className += "temple-img";
                div2.className += "temple-name";
                hotel.className += "hotel-link";
                site.className += "temple-site";
                image.className +="temple-img";
                map.className += "temple-map";

                name.textContent = temple.name;
                image.setAttribute('src',temple.imageurl);
                image.setAttribute('alt',temple.name);
                info.textContent = "Temple-Site: ";
                address.textContent = temple.address + "," + temple.city + " " + temple.state + " " + temple.zip;
                hotel.setAttribute('href', temple.hotel);
                hotel.textContent = "Hotel near by";
                site.textContent = temple.TempleSite;
                space.textContent = "";
                phone.textContent = temple.phone;
                services.textContent = "Services:"
                map.setAttribute('href', temple.map);
                map.textContent = "Google Map";

                div2.appendChild(name);
                div2.appendChild(address);
                div2.appendChild(map);
                div2.appendChild(phone);
                div2.appendChild(hr);
                
                console.log(temple.services);

                div2.appendChild(services);
                temple.services.forEach((service =>{
                    s = document.createElement('p');
                    s.classList.add('service');
                    s.textContent = service;
                    div2.appendChild(s);
                }));
                div2.appendChild(hr2);

                
                div2.appendChild(info);
                div2.appendChild(site);
                div2.appendChild(hotel);
                div2.appendChild(space);
                div.appendChild(image);


                section.appendChild(div);
                section.appendChild(div2);
                document.querySelector('.content').appendChild(section);
            }
        )
        console.log(jsonResult);
    })


});


let getDateNow =() =>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const weekday = week[dateObj.getDay()];
    const output = weekday + ', '+ day  + '\n'+ month  + ' ' + year;

    const lu = document.querySelector('#lastupdated');
    lu.textContent = output;
}
   
window.addEventListener("load", (event)=>{
    getDateNow();
    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();


    const hamBtn = document.querySelector(".ham");
    const mainnav = document.querySelector(".navigation");

    hamBtn.addEventListener('click', ()=>{mainnav.classList.toggle('responsive')}, false);
    window.onresize = () =>{if(window.innerWidth>760) mainnav.classList.remove('responsive');};

});





