const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      menu_navs = document.querySelectorAll('.menu-nav li'),
      body = document.querySelector('body');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('d-none')
  menuBtn.classList.toggle('clickedBtn')
  body.classList.toggle('bodyStopScroll')
});

menu_navs.forEach(li => {
  li.addEventListener('click', () => {
    menu.classList.add('d-none')
    menuBtn.classList.remove('clickedBtn')
    body.classList.remove('bodyStopScroll')
  })
})


const catalog = new Swiper('.swiper-catalog', {
    loop: true,
    navigation: {
        nextEl: '.catalog-next',
        prevEl: '.catalog-prev',
      },
      pagination: {
        el: '.catalog-pagination',
        clickable: 'true',
    },
    breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
  }
  });


// Оставьте заявку
  const phone = document.getElementById('request-phone'),
        formBtn = document.querySelector('.request-submit');

formBtn.addEventListener('click', () => {
checkInputs();
const phoneSuc =  phone.nextElementSibling.classList;

if(phoneSuc == 'success') {
// formBtn.type = 'submit'
popUp_request.classList.remove('d-none')
body.classList.add('bodyStopScroll')
popUp_request.children[0].classList.add('d-none')
popUp_request.children[1].classList.remove('d-none')
}
})

function checkInputs() {
const phoneVal = phone.value.trim();

if(phoneVal == '' || phone.value.substr(-1) === '_') {
setError(phone)
} else {
setSuccess(phone)
}

}

const phone_popUp = document.getElementById('request-phone1'),
      formBtn_popUp = document.querySelector('.popUp-request .request-submit');
      popUp_thanks = document.querySelector('.popUp-request .thanks');

formBtn_popUp.addEventListener('click', () => {
checkInputsTwo();
const phoneSuc1 =  phone_popUp.nextElementSibling.classList;

if(phoneSuc1 == 'success') {
// formBtn_popUp.type = 'submit'
popUp_request.children[0].classList.add('d-none')
popUp_request.children[1].classList.remove('d-none')
}
})

function checkInputsTwo() {
const phoneVal1 = phone_popUp.value.trim();

if(phoneVal1 == '' || phone_popUp.value.substr(-1) === '_') {
setError(phone_popUp)
} else {
setSuccess(phone_popUp)
}

}

function setSuccess(input) {
input.parentElement.classList.remove('error')
input.nextElementSibling.classList.add('success');
}

function setError(input) {
    input.parentElement.classList.add('error')
    input.nextElementSibling.classList.remove('success');
}

// input mask
$("#request-phone").inputmask({"mask": "+7(999) 999-99-99"});

$("#request-phone1").inputmask({"mask": "+7(999) 999-99-99"});

// 
const search = document.querySelector('.search-inp'),
      search_clear = document.querySelector('.search-clear');
search.addEventListener('input', () => {
    if(search.value.length >= 1) {
      search.parentElement.classList.add('searchInp')
    } else {
      search.parentElement.classList.remove('searchInp')
    }
  });
  
  search_clear.addEventListener('click', () => {
    search_clear.previousElementSibling.value = ''
    search_clear.parentElement.classList.remove('searchInp');
  });



  const request_btns = document.querySelectorAll('.request-btn'),
        popUp_request = document.querySelector('.popUp-request')

  request_btns.forEach(btn => {
    btn.addEventListener('click', () => {
      popUp_request.classList.remove('d-none')
      body.classList.add('bodyStopScroll')
    })
  })