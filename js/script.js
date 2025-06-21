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
    // Галлерея
    const galerey = document.querySelector('.galerey');
    if(galerey) {
        baguetteBox.run('.galerey-buget');
    }
    // Галлерея
    // Модальное окно
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('[data-modal]');

    

    function removeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    };

    function showModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    modalBtn.addEventListener('click', ()=> showModal());
    modal.addEventListener('click', (e)=> {
        if(e.target === modal || e.target.classList.contains('modal-close')) {
            removeModal();
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' || modal.classList.contains('show')) {
            removeModal();
        }
    })
    // Модальное окно
})