
let speed = parseInt(document.querySelector(".speed").innerHTML);
console.log(speed);

window.addEventListener('load', (e)=>{
    const high = document.querySelector(".high");
    const speed = document.querySelector(".speed");
    const chill = document.querySelector(".chill");
    const humi = document.querySelector(".humi");

    speed.innerHTML = 30;
    high.innerHTML = 40;
    humi.innerHTML = 50;

    console.log(speed.innerHTML);
    const windChill = (35.74 +(0.6215 * high.innerHTML) - (3.75 * Math.pow(speed.innerHTML, 0.16)) + 
                        0.4275 *high.innerHTML * Math.pow(speed.innerHTML, 0.16));
    chill.innerHTML = Math.floor(windChill);
})

