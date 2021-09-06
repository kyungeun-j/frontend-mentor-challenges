let faqDrop = document.getElementsByClassName('drop-title');
console.log(faqDrop)

for (let i=0; i<faqDrop.length; i++) {
    faqDrop[i].addEventListener('click', () => {
        openFaqDrop(faqDrop[i].children)
    });
}

function openFaqDrop(fd) {
    if (fd[1].classList[1] === 'close') {
        fd[1].classList.remove('close')
        fd[1].classList.add('open')
        fd[0].style.fontWeight = '700'
    } else {
        fd[1].classList.remove('open')
        fd[1].classList.add('close')
        fd[0].style.fontWeight = '400'
    }
}