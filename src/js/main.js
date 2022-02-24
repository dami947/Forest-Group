const navBtn = document.querySelector('.nav-btn')
const navMobile = document.querySelector('.nav-mobile');
const navAllLink = document.querySelectorAll('.nav-link')
const footerYear = document.querySelector('.footer-year');
const scrollSpySections = document.querySelectorAll('.scrollspy')






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


const handleScrollSpy = () => {
    if (document.body.classList.contains('main-page')) {

        const sections = []

        scrollSpySections.forEach(section => {
            if (window.scrollY <= section.offsetTop + section.offsetHeight - 103) {
                sections.push(section)

                const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

                navAllLink.forEach(item => item.classList.remove('active'))

                activeSection.classList.add('active')
            }

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
                const lastSection = document.querySelector('a:last-of-type')

                navAllLink.forEach(item => item.classList.remove('active'))

                lastSection.classList.add('active')
            }
        })
    }
}

handleCurrentYear();

window.addEventListener('scroll', handleScrollSpy)

navBtn.addEventListener('click', activeNav);