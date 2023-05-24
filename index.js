const showHideButton = () => {
    const Button = document.querySelector('#scrollToTop');

    if (window.pageYOffset >= 100) {
        Button.style.display = "block"
    } else {
        Button.style.display = "none"
    }
}

const scrollToTop = () => {
    console.log("ok")
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const scrollButton = document.querySelector('#scrollToTop');
scrollButton.addEventListener('click', scrollToTop);

window.addEventListener('scroll', showHideButton);