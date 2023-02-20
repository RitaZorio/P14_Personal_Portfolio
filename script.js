// Mobile nav bar recedes after clicking on a link
//selecting the correct <a>s 
let navLink = document.getElementsByClassName('navlink');
//selecting hamburger menu checkbox
let checkbox = document.querySelector('checkbox');
//un-checking the checkbox
let unCheck = ()=>{
    checkbox.checked = false;
}
//adding the eventListener
//Esta opcion da error: addEventListener no es una funcion
navLink.addEventListener('click', unCheck);
//Esta no da error pero no funciona
navLink.onclick = unCheck;