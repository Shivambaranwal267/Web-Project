const ContainerEl = document.querySelector('.container')

const leftEl = document.querySelector('.left')
const rightEl = document.querySelector('.right')

leftEl.addEventListener('mouseenter', ()=> {
    ContainerEl.classList.add('active-left')
})

leftEl.addEventListener('mouseleave', ()=> {
    ContainerEl.classList.remove('active-left')
})

rightEl.addEventListener('mouseenter', ()=> {
    ContainerEl.classList.add('active-right')
})

rightEl.addEventListener('mouseleave', ()=> {
    ContainerEl.classList.remove('active-right')
})