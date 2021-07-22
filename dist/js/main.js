//Burger menu
var burgerIcon = document.querySelector('.burger-menu');
var logoHeader = document.querySelector('.logo');
var body = document.querySelector('body');
var menuLinks = document.querySelectorAll('.nav-list__link, .nav-list__item button');
function closeMenu() {
    burgerIcon.classList.toggle('burger-menu--open');
    logoHeader.classList.toggle('logo--all-white');
    body.classList.toggle('body--menu-open');
}
burgerIcon.addEventListener('click', (event) => {
    closeMenu();
});
menuLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
        closeMenu();
    });
});

//Features menu
var menuListItems = document.querySelectorAll('.features-table__nav-item');
menuListItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        var currentMenuActive = document.querySelector('.features-table__nav-item--active');
        var currentItemActive = document.querySelector('.features-table__content-block--active');
        var menuTarget = event.target;
        var itemTarget = document.getElementById(menuTarget.dataset.for);
        currentMenuActive.classList.remove('features-table__nav-item--active');
        menuTarget.classList.add('features-table__nav-item--active');
        currentItemActive.classList.remove('features-table__content-block--active');
        itemTarget.classList.add('features-table__content-block--active');
    });
});

//FAQ : show and hide answer on click on a question
var questions = document.querySelectorAll('.faq-content__question');
questions.forEach((item) => {
    item.addEventListener('click', (event) => {
        var itemCible = event.currentTarget.parentNode;
        //Delete any other existing active class to not have two open questions
        document.querySelectorAll('.faq-content__item--active').forEach((item) => {
            if (item != itemCible) {
                item.classList.remove('faq-content__item--active');
            }
        });
        //Adding active class to the item containing the clicked question
        itemCible.classList.toggle('faq-content__item--active');
    });
});

//Email form validation
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
}

function emailValid(form) {
    if (form.classList.contains('contact-form--invalid')) {
        form.classList.remove('contact-form--invalid');
    }
}

function emailInvalid(form) {
    if (!form.classList.contains('contact-form--invalid')) {
        form.classList.add('contact-form--invalid');
    }
    return false;
}
  
var form = document.querySelector('.contact-form');

form.querySelector('.contact-form__email').addEventListener('blur', (event) => {
    if(!ValidateEmail(event.target)) {
        event.preventDefault();
        emailInvalid(form);
      } else {
        emailValid(form);
      }
})
form.addEventListener('submit', (event) => {
  if(!ValidateEmail(form.querySelector('.contact-form__email'))) {
    event.preventDefault();
    emailInvalid(form);
  } else {
    emailValid(form);
  }
})