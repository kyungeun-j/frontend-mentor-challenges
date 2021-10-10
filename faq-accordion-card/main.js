let faqDrop = document.getElementsByClassName('drop-down')[0].children;
// console.log(faqDrop)
for (let i=0; i<faqDrop.length; i++) {
    faqDrop[i].addEventListener('click', () => {
        var fd = faqDrop[i].children
        openFaqDrop(fd)
        fd = null
    });
}

function openFaqDrop(fd) {
    console.log(fd)
    if (fd[1].classList[1] === 'close') {
        fd[1].classList.remove('close')
        fd[1].classList.add('open')
        fd[0].style.fontWeight = '700'
        fd[0].children[1].style.transform = 'rotate(180deg)'
    } else {
        fd[1].classList.remove('open')
        fd[1].classList.add('close')
        fd[0].style.fontWeight = '400'
        fd[0].children[1].style.transform = 'rotate(0deg)'
    }
}