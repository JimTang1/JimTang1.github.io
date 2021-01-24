function save1(){
    console.log('save');
}

const save2 = function(){
    console.log('save');
}

const save3 =() => {
    console.log('save');
}

const save4 =() =>{
    const name = document.querySelector('#name').value;
    console.log(name);

}

const save5 =() =>{
const result = document.querySelector('#numSum');
result.textContent = number//something

}

//add event listener!
document.querySelector('button')
        .addEventListener('click', save1());




