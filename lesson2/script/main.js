window.addEventListener("load", (event)=>{

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

    const lu = document.querySelector('#lastupdated');
    lu.textContent = document.lastModified;

})

madelink = () =>{
    window.open('https://www.made.com/');   
    
}

amazonlink = () =>{
    window.open('https://www.amazon.com/s?k=bowl&ref=nb_sb_noss_1')
}

wixlink= () =>{
    window.open('https://www.wix.com/');
}