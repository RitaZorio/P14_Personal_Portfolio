
//Go-back butto takes you to index.html
//selecting the button


/*No funciona: 
let button = document.getElementById('go-back');
*/
let button = document.getElementsByClassName('go-back');

const changeColor = () =>{
    button.style.backgroundColor= 'blue';

}

button.onclick = changeColor;

