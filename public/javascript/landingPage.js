document.addEventListener('scroll',()=>{
    if (window.scrollY > 1000) {
        toTopArrow.classList.add('show');
    }else{
        toTopArrow.classList.remove('show');
    }
})

// toTopArrow.classList.add('show');

