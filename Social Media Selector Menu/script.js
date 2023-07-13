const MenuEl = document.querySelector('.menu');
const MenuTextEl = document.querySelector('.menu p');

const socialListEl = document.querySelector('.social-lists');

const liEls = document.querySelectorAll('.social-lists li');


MenuEl.addEventListener('click', ()=> {
    socialListEl.classList.toggle('hide')
    MenuEl.classList.toggle('rotate');
})

liEls.forEach(liEls=> {
    liEls.addEventListener('click', ()=> {
        MenuTextEl.innerHTML = liEls.innerHTML;
        socialListEl.classList.add('hide')
        MenuEl.classList.toggle('rotate')
    })
})