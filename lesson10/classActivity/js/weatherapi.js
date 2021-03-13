window.addEventListener("load",(e)=>{
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    const forcaseURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log('first jsObject: ');
      console.log(jsObject);

      document.querySelector('#current-temp').textContent = jsObject.main.temp;
      document.querySelector(".location").textContent = jsObject.name;  
      document.querySelector('.speed').textContent = jsObject.wind.speed;
      document.querySelector('.humi').textContent = jsObject.main.humidity;
      document.querySelector('.chill').textContent = jsObject.main.temp_min;
      document.querySelector('.high').textContent = jsObject.main.temp_max;
      document.querySelector('.description').textContent = jsObject.weather[0].description;
      const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      const desc = jsObject.weather[0].description;  // note how we reference the weather array
      document.querySelector('#icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      document.querySelector('#icon').setAttribute('alt', desc);  
    })

    fetch(forcaseURL)
    .then(response => response.json())
    .then((jsObject) =>{
      console.log('Second jsObject: ');
      console.log(jsObject);
    })
  });
