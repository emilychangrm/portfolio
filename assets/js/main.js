/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*==menu show ==*/

if (navToggle){
    navToggle.addEventListener('click'), () =>{
        navMenu.classList.add('show-menu')
    }
}
/*==menu hidden ==*/
if(navClose){
    navClose.addEventListener('click'),()=>{
        navMenu.classList.remove('show-menu')
    }
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //click on each nav__link will remove show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader =() => {
    const header = document.getElementById('header')
    // scroll more than 50 viewportheigh add the shadow-header to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()
    //service id - template id - form - public key
    emailjs.sendForm('service_emily3','template_810755n','#contact-form','SmdndZiAJdyJXKTBL')
    .then(() =>{
        //show sent message
        contactMessage.textContent = "Message sent successfully ✅"

        //remove message after 5 seconds
        setTimeout(()=>{
            contactMessage.textContent =''
        }, 5000)

        //clear input fields

        contactForm.reset()

    }, ()=>{
        //show error message
        contactMessage.textContent = "Message not sent (service error) ❌"
    })
}

contactForm.addEventListener('submit',sendEmail)


/*
let testimonialSwiper = new Swiper(".testimonial-swiper", 
    {spaceBetween: 30,
    loop: 'true',
    navigation: {

    }
    }
)

*/ 

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() =>{
    const scollUp = document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')


}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive =() =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <=sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton  = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// PREV selected topic if user selected
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtain the current theme by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon =() => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// if the user prev choose a topic
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener.apply('click', () => {
    // add or remove the dark/ cion theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
// save the theme and the current icon user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animations repeat
})

sr.reveal('.home__perfil, .about__image, .contact__mail', {origin: 'right'})
sr.reveal('.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data', {origin:'left'})
sr.reveal('.services__card, .projects__card',  {interval: 100})