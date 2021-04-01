window.addEventListener("load", (event)=>{

//4246765 payson
//5780026 provo
//5855797 hawaii
//5372433 mesa
//     dow.addEventListener("load",(e)=>{
//     const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
//     const forcaseURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
//     fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//     console.log('first jsObject: ');
//     console.log(jsObject);
//     document.querySelector('.speed').textContent = jsObject.wind.speed;
//     document.querySelector('.humi').textContent = jsObject.main.humidity;
//     document.querySelector('.chill').textContent = jsObject.main.temp_min;
//     document.querySelector('.high').textContent = jsObject.main.temp_max;
//     document.querySelector('.description').textContent = jsObject.weather[0].description;
//   })

//   fetch(forcaseURL)
//   .then(response => response.json())
//   .then((jsObject) =>{
//     console.log('Second jsObject: ');
//     console.log(jsObject);
//     console.log('jsObject list: ');
//     console.log(jsObject['list']);  

//     const lists = jsObject['list'];
//     let day = 1;

//     let time = "";
//     let d = new Date;
//     let hour = d.getHours();
    
//     console.log(hour);

//     if(hour >= 0 && hour < 3){
//       time = "00:00:00";
//     }else if(hour >= 3 && hour < 6){
//       time = "03:00:00";
//     }else if(hour >= 6 && hour < 9){
//       time = "06:00:00";
//     }else if(hour >= 9 && hour < 12){
//       time = "09:00:00";
//     }else if(hour >= 12 && hour < 15){
//       time = "12:00:00";
//     }else if(hour >= 15 && hour < 18){
//       time = "15:00:00";
//     }else if(hour >= 18 && hour < 21){
//       time = "18:00:00";
//     }else if(hour >= 21){
//       time = "21:00:00";
//     }else{
//       return;
//     }

//     console.log(time);


//     for(let i = 0; i < lists.length;i++){
//       let dayTime = lists[i].dt_txt;
//       date = dayTime.substr(0,dayTime.indexOf(' '));
//       date = new Date(date).toLocaleString('en-us', {weekday:'long'});
//       let timeInDay = dayTime.substr(dayTime.indexOf(' ') + 1);
      
//       if(time == timeInDay){
//         document.querySelector('.day' + day).textContent = date;  
//         document.querySelector('.temp' + day).textContent = lists[i].main.temp;
//         const imagesrc = 'https://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'  // note the concatenation
//         const desc = lists[i].weather[0].description;  // note how we reference the weather array
//         console.log(imagesrc);
//         console.log(desc);
        
//         document.querySelector('.img'+day).setAttribute('src', imagesrc);  // focus on the setAttribute() method
//         document.querySelector('.img'+day).setAttribute('alt', desc);     
//         day++; 
//       }
//     }
//   })

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
                let email = document.createElement('a');


                div.className += "temple-img";
                div2.className += "temple-name";
                hotel.className += "hotel-link";
                site.className += "temple-site";
                image.className +="temple-img";
                map.className += "temple-map";
                email.className += "temple-email";

                name.textContent = temple.name;
                image.setAttribute('src',temple.imageurl);
                image.setAttribute('alt',temple.name);
                info.textContent = "Temple-Site: ";
                address.textContent = temple.address + "," + temple.city + " " + temple.state + " " + temple.zip;
                hotel.setAttribute('href', temple.hotel);
                hotel.textContent = "Reserve Hotel nearby";
                site.textContent = temple.TempleSite;
                space.textContent = "";
                phone.textContent = temple.phone;
                services.textContent = "Services:"
                map.setAttribute('href', temple.map);
                map.textContent = "Google Map";
                email.textContent = "Email :" + temple.email;

                div2.appendChild(name);
                div2.appendChild(address);
                div2.appendChild(map);
                div2.appendChild(phone);
                div2.appendChild(email);
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





