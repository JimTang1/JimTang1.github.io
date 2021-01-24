let ol = document.querySelector('ol');


const links = [
{
    label: "Week 1",
    url: "week1/index.html",

    label2: "Week 2",
    url2: "week2/index.html",

    label3: "Week 3",
    url3: "week3/index.html"
}

];

links.forEach(
    link =>{
        ol.innerHTML +=
        `<li><a href = "${link.url}">${link.label}</li>
        <li><a href = "${link.url2}">${link.label2}</li>
        <li><a href = "${link.url3}">${link.label3}</li>
        `
    }
);