const popUps = document.querySelectorAll('.popUp'),
      popUp_closeBtns = document.querySelectorAll('.popUp-close');



popUp_closeBtns.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.classList.add('popUpHide');
        setTimeout(() => {
            close.parentElement.parentElement.classList.add('d-none');
            window.location.reload()
        }, 500);
    })
});


window.addEventListener('click', (e) => {
    popUps.forEach(popUp => {
        if(e.target == popUp) {
            popUp.children[0].classList.add('popUpHide');
            setTimeout(() => {
                popUp.classList.add('d-none');
                window.location.reload()
            }, 500);
        }
    })
})