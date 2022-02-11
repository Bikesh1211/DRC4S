// const menu = document.getElementById('menu')
// const links = document.getElementById('links')

// menu.addEventListener('click',function(){
//     this.style.color = 'red'
//     links.style.display = 'block'

// })

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{
  navBarLinks.classList.toggle('active')
})
