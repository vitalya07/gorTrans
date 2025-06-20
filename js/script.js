document.addEventListener('DOMContentLoaded', ()=> {
    //Открытие меню
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('open')
    });
    //Открытие меню
    //Открытие каждого элемента меню
        const hambergerNavItem = document.querySelectorAll('.hamburger-nav__item');
        hambergerNavItem.forEach(item => {
            item.addEventListener('click', ()=> {
                item.classList.toggle('menu-open');
            })
        })

    //Открытие каждого элемента меню
})