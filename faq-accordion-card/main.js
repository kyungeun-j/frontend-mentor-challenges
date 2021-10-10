let faqDrop = document.getElementsByClassName('drop-down')[0].children;

for (let i=0; i<faqDrop.length; i++) {
    faqDrop[i].addEventListener('click', () => {
        var fd = faqDrop[i].children
        openFaqDrop(fd)
        fd = null
    });
}

function openFaqDrop(fd) {
    if (fd[2].classList[1] === 'close') {
        fd[2].classList.remove('close')
        fd[2].classList.add('open')
        fd[0].style.fontWeight = '700'
        fd[1].style.transform = 'rotate(180deg)'
    } else {
        fd[2].classList.remove('open')
        fd[2].classList.add('close')
        fd[0].style.fontWeight = '400'
        fd[1].style.transform = 'rotate(0deg)'
    }
}

console.log(faqDrop[2])
faqDrop[2].children[0].style.fontWeight = '700'
faqDrop[2].children[1].style.transform = 'rotate(180deg)'