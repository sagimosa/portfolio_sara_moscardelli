// // /////////// MENU SHOW

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// // /////////// ACTIVE EN REMOVE MENU

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


///////////////BUTTON DYNAMYQUE

document.getElementById('buttoncv').addEventListener('mousemove', (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    console.log(x + ' / ' + y);

    e.target.style.setProperty('--x',`${ x }px`);
    e.target.style.setProperty('--y',`${ y }px`);


});

/////////// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

///////////////// SCROLL HOME
sr.reveal('.home_title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home_img',{delay: 200})
sr.reveal('.home_social-icon',{interval: 200})

///////////////////SCROLL ABOUT
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 400})

////////////// SCROLL SKILLS
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.skills_img',{delay: 200})

////////////// SCROLL WORK
sr.reveal('.work_img',{interval: 200})

////////////// SCROLL CONTACT
sr.reveal('.contact_input',{interval: 200})