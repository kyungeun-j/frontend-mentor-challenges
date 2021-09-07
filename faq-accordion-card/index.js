
let faqDrop = document.getElementsByClassName('drop-down')[0].children;

for (let i=0; i<faqDrop.length; i++) {
    faqDrop[i].addEventListener('click', () => {
        var fd = faqDrop[i].children
        openFaqDrop(fd)
        fd = null
    });
}

let section = document.querySelector('section')
window.getComputedStyle(section).getPropertyValue('height')


function openFaqDrop(fd) {
    if (fd[1].classList[1] === 'close') {
        let section = document.querySelector('section');
        // let sec_height = window.getComputedStyle(section).getPropertyValue('height');
        let sec_height = window.getComputedStyle(section).getPropertyValue('height');
        document.querySelector('section').style.height = 'calc(${sec_height} + 2.2rem)';
        console.log(window.getComputedStyle(section).getPropertyValue('height'))
        fd[1].classList.remove('close')
        fd[1].classList.add('open')
        fd[0].style.fontWeight = '700'
    } else {
        fd[1].classList.remove('open')
        fd[1].classList.add('close')
        fd[0].style.fontWeight = '400'
    }
     
}