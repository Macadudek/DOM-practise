const tabs = document.querySelectorAll('.tab');
const contentBox = document.querySelectorAll('.content_box');

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab=>{tab.classList.remove('active')})
        tab.classList.add('active');

        contentBox.forEach(content =>{content.classList.remove('active')})
        contentBox[index].classList.add('active');
    })
})

const btn = document.querySelector('button');
const container = document.getElementsByClassName('container')[0];
const selectorBar = document.getElementsByClassName('selector_bar')[0];
let darkModeIsActive = false;

btn.addEventListener('click', function() {
    if(darkModeIsActive) {
        darkModeIsActive = false;
        document.body.style.backgroundColor = 'darkgrey';
        container.style.cssText = 'background-color: white; color: black';
        selectorBar.style.cssText = 'background-color: #f1f1f1; color: gray';
        btn.style.cssText = 'background-color: black; color: white';
        btn.textContent = 'DarkMode';
    } else {
        darkModeIsActive = true;
        document.body.style.backgroundColor = '#2A2929';
        selectorBar.style.cssText = 'background-color: lightgrey; color: #EDECEC';
        container.style.cssText = 'background-color: grey; color: white';
        btn.style.cssText = 'background-color: white; color: black';
        btn.textContent = 'LightMode'
    }
})
