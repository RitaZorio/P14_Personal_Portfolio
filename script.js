// Mobile nav bar recedes after clicking on a link:
//selecting the <a>s that are inside the ul with id link-list.
//This refers to an array because there are 4 <a> links.
const navLinks = document.querySelectorAll('#link-list a');
//selecting hamburger menu checkbox
const checkbox = document.getElementById('hamburger-button');
//un-checking the checkbox
const unCheck = ()=>{
    checkbox.checked = false;
}
//Adding the eventListener. Since it's an array, we have to iterate
//the array and add an eventListener to each <a>:
 navLinks.forEach(navLink => navLink.addEventListener('click', unCheck));
