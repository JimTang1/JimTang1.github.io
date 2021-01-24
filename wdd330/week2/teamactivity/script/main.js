const readAndWrite = () =>{
    const num1 = parseInt(document.querySelector('#num1').value);
    document.querySelector('#div1').innerHTML = sum(num1);
    console.log(num1);
}

const sum = (num) =>{
    let n = 0;
    for(let i = 1; i < num+1; i++){
        n += i;
    }
    console.log(n);
    return n;
}

const subNum =() =>{
    let sub = parseInt(document.querySelector('#num1').value) - 
            parseInt(document.querySelector('#num2').value);
    document.querySelector('#div1').innerHTML = sub;
}

const addNum =() =>{
    let add = parseInt(document.querySelector('#num1').value) + 
            parseInt(document.querySelector('#num2').value);
    document.querySelector('#div1').innerHTML = add;
}


document.querySelector('#sum')
        .addEventListener('click', readAndWrite);

document.querySelector('#add')
        .addEventListener('click', addNum);

document.querySelector('#sub')
        .addEventListener('click', subNum);
        