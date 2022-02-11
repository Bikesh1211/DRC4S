const menu = document.getElementById('menu')
const links = document.getElementById('links')

menu.addEventListener('click',function(){
    this.style.color = 'red'
    links.style.display = 'block'

})