window.addEventListener("load",(e)=>{
  //4246765 payson
//5780026 provo
//5855797 hawaii
//5372433 mesa
    const forcasePayson = "https://api.openweathermap.org/data/2.5/forecast?id=4246765&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
  fetch(forcasePayson)
  .then(response => response.json())
  .then((jsObject) =>{
    const lists = jsObject['list'];
    let day = 1;

    let time = "";
    let d = new Date;
    let hour = d.getHours();
    
    if(hour >= 0 && hour < 3){
      time = "00:00:00";
    }else if(hour >= 3 && hour < 6){
      time = "03:00:00";
    }else if(hour >= 6 && hour < 9){
      time = "06:00:00";
    }else if(hour >= 9 && hour < 12){
      time = "09:00:00";
    }else if(hour >= 12 && hour < 15){
      time = "12:00:00";
    }else if(hour >= 15 && hour < 18){
      time = "15:00:00";
    }else if(hour >= 18 && hour < 21){
      time = "18:00:00";
    }else if(hour >= 21){
      time = "21:00:00";
    }else{
      return;
    }


    for(let i = 0; i < lists.length;i++){
      let dayTime = lists[i].dt_txt;
      date = dayTime.substr(0,dayTime.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday:'long'});
      let timeInDay = dayTime.substr(dayTime.indexOf(' ') + 1);
      
      if(time == timeInDay){
        document.querySelector('.day' + day +'Payson').textContent = date;  
        document.querySelector('.temp' + day+'Payson').textContent = lists[i].main.temp+'°F';
        const imagesrc = 'https://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'  // note the concatenation
        const desc = lists[i].weather[0].description;  // note how we reference the weather array
        
        document.querySelector('.img'+day+'Payson').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.querySelector('.img'+day+'Payson').setAttribute('alt', desc);     
        day++; 
      }
    }
  })

  const forcaseProvo = "https://api.openweathermap.org/data/2.5/forecast?id=5780026&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
  fetch(forcaseProvo)
  .then(response => response.json())
  .then((jsObject) =>{
    const lists = jsObject['list'];
    let day = 1;

    let time = "";
    let d = new Date;
    let hour = d.getHours();
    
    if(hour >= 0 && hour < 3){
      time = "00:00:00";
    }else if(hour >= 3 && hour < 6){
      time = "03:00:00";
    }else if(hour >= 6 && hour < 9){
      time = "06:00:00";
    }else if(hour >= 9 && hour < 12){
      time = "09:00:00";
    }else if(hour >= 12 && hour < 15){
      time = "12:00:00";
    }else if(hour >= 15 && hour < 18){
      time = "15:00:00";
    }else if(hour >= 18 && hour < 21){
      time = "18:00:00";
    }else if(hour >= 21){
      time = "21:00:00";
    }else{
      return;
    }


    for(let i = 0; i < lists.length;i++){
      let dayTime = lists[i].dt_txt;
      date = dayTime.substr(0,dayTime.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday:'long'});
      let timeInDay = dayTime.substr(dayTime.indexOf(' ') + 1);
      
      if(time == timeInDay){
        document.querySelector('.day' + day +'Provo').textContent = date;  
        document.querySelector('.temp' + day +'Provo').textContent = lists[i].main.temp+'°F';
        const imagesrc = 'https://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'  // note the concatenation
        const desc = lists[i].weather[0].description;  // note how we reference the weather array
        
        document.querySelector('.img'+day +'Provo').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.querySelector('.img'+day +'Provo').setAttribute('alt', desc);     
        day++; 
      }
    }
  })

  const forcaseHawaii = "https://api.openweathermap.org/data/2.5/forecast?id=5855797&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
  fetch(forcaseHawaii)
  .then(response => response.json())
  .then((jsObject) =>{
    const lists = jsObject['list'];
    let day = 1;

    let time = "";
    let d = new Date;
    let hour = d.getHours();
    
    if(hour >= 0 && hour < 3){
      time = "00:00:00";
    }else if(hour >= 3 && hour < 6){
      time = "03:00:00";
    }else if(hour >= 6 && hour < 9){
      time = "06:00:00";
    }else if(hour >= 9 && hour < 12){
      time = "09:00:00";
    }else if(hour >= 12 && hour < 15){
      time = "12:00:00";
    }else if(hour >= 15 && hour < 18){
      time = "15:00:00";
    }else if(hour >= 18 && hour < 21){
      time = "18:00:00";
    }else if(hour >= 21){
      time = "21:00:00";
    }else{
      return;
    }


    for(let i = 0; i < lists.length;i++){
      let dayTime = lists[i].dt_txt;
      date = dayTime.substr(0,dayTime.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday:'long'});
      let timeInDay = dayTime.substr(dayTime.indexOf(' ') + 1);
      
      if(time == timeInDay){
        document.querySelector('.day' + day + 'Hawaii').textContent = date;  
        document.querySelector('.temp' + day + 'Hawaii').textContent = lists[i].main.temp+'°F';
        const imagesrc = 'https://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'  // note the concatenation
        const desc = lists[i].weather[0].description;  // note how we reference the weather array
        
        document.querySelector('.img'+day + 'Hawaii').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.querySelector('.img'+day + 'Hawaii').setAttribute('alt', desc);     
        day++; 
      }
    }
  })

  const forcaseMesa = "https://api.openweathermap.org/data/2.5/forecast?id=5372433&appid=532c1b5f6ed1af0e5f24414cb15bc219&units=imperial";
    
  fetch(forcaseMesa)
  .then(response => response.json())
  .then((jsObject) =>{
    const lists = jsObject['list'];
    let day = 1;

    let time = "";
    let d = new Date;
    let hour = d.getHours();
    
    if(hour >= 0 && hour < 3){
      time = "00:00:00";
    }else if(hour >= 3 && hour < 6){
      time = "03:00:00";
    }else if(hour >= 6 && hour < 9){
      time = "06:00:00";
    }else if(hour >= 9 && hour < 12){
      time = "09:00:00";
    }else if(hour >= 12 && hour < 15){
      time = "12:00:00";
    }else if(hour >= 15 && hour < 18){
      time = "15:00:00";
    }else if(hour >= 18 && hour < 21){
      time = "18:00:00";
    }else if(hour >= 21){
      time = "21:00:00";
    }else{
      return;
    }



    for(let i = 0; i < lists.length;i++){
      let dayTime = lists[i].dt_txt;
      date = dayTime.substr(0,dayTime.indexOf(' '));
      date = new Date(date).toLocaleString('en-us', {weekday:'long'});
      let timeInDay = dayTime.substr(dayTime.indexOf(' ') + 1);
      
      if(time == timeInDay){
        document.querySelector('.day' + day +'Mesa').textContent = date;  
        document.querySelector('.temp' + day +'Mesa').textContent = lists[i].main.temp +'°F';
        const imagesrc = 'https://openweathermap.org/img/w/' + lists[i].weather[0].icon + '.png'  // note the concatenation
        const desc = lists[i].weather[0].description;  // note how we reference the weather array
        
        document.querySelector('.img'+day +'Mesa').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.querySelector('.img'+day +'Mesa').setAttribute('alt', desc);     
        day++; 
      }
    }
  })
});