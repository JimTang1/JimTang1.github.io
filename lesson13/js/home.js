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
                let state = document.createElement('p');
                let hotel = document.createElement('a');
                let intro = document.createElement('p');
                let hotelname = document.createElement('p');
                let hotellink = document.createElement('a');
                let br = document.createElement('br');
                let space = document.createElement('p');

                div.className += "temple-img";
                div2.className += "temple-name";
                hotel.className += "hotel-link";
                intro.className += "temple-intro";
                hotellink.className += "hotel-link";
                name.textContent = temple.name;
                image.setAttribute('src',temple.imageurl);
                image.setAttribute('alt',temple.name);
                info.textContent = "Information: ";
                address.textContent = temple.address + "," + temple.city + " " + temple.state + " " + temple.zip;
                hotel.setAttribute('href', temple.hotel);
                hotel.textContent = "Reserve the Hotel";
                intro.textContent = temple.intro;
                space.textContent = "";
                hotelname.textContent = "Hotel: "+ temple.hotelName;
                hotellink.setAttribute('href', temple.hotelLink);
                hotellink.textContent = "Visit us ";

                div2.appendChild(name);
                div2.appendChild(hr);
                div2.appendChild(address);
                div2.appendChild(state);
                div.appendChild(image);
                div.appendChild(hr);
                div.appendChild(info);
                div.appendChild(intro);
                div.appendChild(hr2);
                div.appendChild(hotelname);
                div.appendChild(hotellink);

                div.appendChild(hotel);
                div.appendChild(space);

                section.appendChild(div2);
                section.appendChild(div);
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





