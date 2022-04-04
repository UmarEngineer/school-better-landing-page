
    const NavbarToggler = document.querySelector('.js-navbar__toggle');
    const NavbarItems = document.querySelector('.navbar-items');

if (NavbarToggler) {

    NavbarToggler.addEventListener('click', function(){
     NavbarItems.classList.toggle('navbar__toggle-open');
});
}


