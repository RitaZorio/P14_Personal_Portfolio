
//Go-back button takes you to index.html
//selecting the button

console.log('Hello from form-response')
//sale null???
let button = document.getElementById('go-back');

const changeName = () =>{
    alert ('It Worked!');
}


button.addEventListener('click', changeName);
//button.onclick = changeName(); 

//-------------
/*
let myBtn = document.getElementsByClassName('go-back');

const itWorked = () =>{
    alert ('It Worked!');
}

myBtn.addEventListener('click', itWorked)
*/