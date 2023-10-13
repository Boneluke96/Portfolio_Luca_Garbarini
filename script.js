//emailJs
let contactForm = document.getElementById('contact-form');
let contactMessage = document.getElementById('contact-message');

let sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rbev6y6', 'template_oy2uq2p', '#contact-form', 'L91b_8kNqziTtqhhf')
        .then(() => {
            contactMessage.textContent = 'Messaggio inviato con successo!';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset();
        })
        .catch((error) => {
            contactMessage.textContent = 'Messaggio non inviato (errore del servizio)';
            console.error('Errore EmailJS:', error);
        });
};

contactForm.addEventListener('submit', sendEmail);


//navabar blur
let navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    scrolled > 0 ? changeNavbar("navbar-blur") : navbar.classList.remove("navbar-blur");
});

function changeNavbar(background){
    navbar.classList.add(background)
}


//show scroll-up
let scrollUp = () => {
    let scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);



//dark theme
let themeButton = document.getElementById('theme-button');
let theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

handleTheme = () => {
    document.body.classList.toggle('dark-mode');
    
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark-mode');
        themeButton.classList.remove('fa-moon');
        themeButton.classList.add('fa-sun');
    }else{
        localStorage.removeItem('theme');
        themeButton.classList.remove('fa-sun');
        themeButton.classList.add('fa-moon');
    }
}

themeButton.addEventListener('click', handleTheme);