
    const NavbarToggler = document.querySelector('.js-navbar__toggle');
    const NavbarItems = document.querySelector('.navbar-items');
    const NavbarButtons = document.querySelector('.navbar-buttons'); 
    var hamburgerIcon = document.querySelector('.hamburger-icon');
    if (NavbarToggler) {

    NavbarToggler.addEventListener('click', function(){
     NavbarItems.classList.toggle('navbar__toggle-open');
    NavbarButtons.classList.toggle('navbar-buttons-open');
});
}


