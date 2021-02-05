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


getDay =() =>{
    let dayNow = new Date();
    let day = dayNow.getDay();
    console.log(day);

    switch(day){
        case 0:
            newDay = "Sunday";
            break;
        case 1:
            newDay = "Monday";
            break;
        case 2:
            newDay = "Tuesday";
            break;
        case 3:
            newDay = "Wednesday";
            break;
        case 4:
            newDay = "Thursday";
            break;
          case 5:
            newDay = "Friday";
            break;
          case 6:
            newDay = "Saturday";
            break;
    }

    document.querySelector(".today").textContent = "To day: " + newDay;
}

getDay();




getBanner =() =>{
    let banner = document.querySelector(".banner");
    banner.textContent = 
    `
    Preston Pancakes in the Park!  
    9:00 a.m. Saturday at the city park pavilion.
    `;
}

getBanner();


$(".navigation").click=() =>{
    $(this).find("a").toggle();
}