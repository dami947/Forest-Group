const navBtn = document.querySelector('.nav-btn')
const navMobile = document.querySelector('.nav-mobile');
const navAllLink = document.querySelectorAll('.nav-link')
const footerYear = document.querySelector('.footer-year');






const activeNav = () => {
    document.body.classList.toggle('sticky-body')
    navMobile.classList.toggle('nav-mobile-active')
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


navAllLink.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.remove('sticky-body')
        navMobile.classList.remove('nav-mobile-active')
    })
})



handleCurrentYear();


navBtn.addEventListener('click', activeNav);