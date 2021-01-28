window.addEventListener("load", (event)=>{

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

    const hamBtn = document.querySelector(".ham");
    const mainnav = document.querySelector(".navigation");

    hamBtn.addEventListener('click', ()=>{mainnav.classList.toggle('responsive')}, false);
    window.onresize = () =>{if(window.innerWidth>760) mainnav.classList.remove('responsive');};

});

