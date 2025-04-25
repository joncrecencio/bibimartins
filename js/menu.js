function openMenu(){
    const mobileMenu = document.querySelector('.mobile-menu')
    const navList = document.querySelector('.nav-list')

    mobileMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle('active')
        navList.classList.toggle('active')
    })
}

function closeMenuLinks(){
    const links = document.querySelectorAll('.links')
    for(let link of links){
        link.addEventListener("click", () => {
            document.querySelector(".mobile-menu").classList.remove("active")
            document.querySelector(".nav-list").classList.remove("active")
        })
    }
}

openMenu()
closeMenuLinks()