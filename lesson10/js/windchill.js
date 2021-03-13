window.addEventListener("load",(e)=>{
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    const forcaseURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log('first jsObject: ');
    console.log(jsObject);
    document.querySelector('.speed').textContent = jsObject.wind.speed;
    document.querySelector('.humi').textContent = jsObject.main.humidity;
    document.querySelector('.chill').textContent = jsObject.main.temp_min;
    document.querySelector('.high').textContent = jsObject.main.temp_max;
    document.querySelector('.description').textContent = jsObject.weather[0].description;
  })

  fetch(forcaseURL)
  .then(response => response.json())
  .then((jsObject) =>{
    console.log('Second jsObject: ');
    console.log(jsObject);
    console.log('jsObject list: ');
    console.log(jsObject['list']);  

    const lists = jsObject['list'];
    let day = 1;

    // document.querySelector('.day1').textContent = jsObject
    // var str = lists[0].dt_txt;
    // console.log(str);
    // str1 = str.substr(str.indexOf(' ') + 1);
    // console.log(str1);
    // date = str.substr(0,str.indexOf(' '));
    // console.log(date);
    // date = new Date(date).toLocaleString('en-us', {weekday:'long'});
    // console.log(date);
    
    for(let i = 0; i < lists.length;i++){
      let dayTime = lists[i].dt_txt;
      date = dayTime.substr(0,dayTime.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday:'long'});
      console.log(date);
      let time = dayTime.substr(dayTime.indexOf(' ') + 1);
      console.log(time);
      if(time == "21:00:00"){
        document.querySelector('.day'+day).textContent = date;
        
        day++;
      }
      
    }
    // const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    // const desc = jsObject.weather[0].description;  // note how we reference the weather array
    // document.querySelector('#icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    // document.querySelector('#icon').setAttribute('alt', desc);  
  })
});

