
//Go-back button takes you to index.html
//selecting the button


//sale null???
let button = document.getElementById('go-back');

const changeName = () =>{
    button.innerHTML = "CHANGED";
}


button.addEventListener('click', changeName);
button.onclick = changeName(); 

//-------------

let myBtn = document.getElementsByClassName('go-back');

const itWorked = () =>{
    alert ('It Worked!');
}

myBtn.addEventListener('click', itWorked)
