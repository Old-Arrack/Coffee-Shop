// Generate Brand link
var brand = document.querySelectorAll('.brand');
brand.forEach((item) => {
    item.href = window.location.href.split('#')[0];
})


// Navigation bar menu

var nav_list = document.querySelector('.nav-list');
var menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    nav_list.style.transition = "height 1s";
    nav_list.classList.toggle('open-navbar');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        nav_list.style.transition = null;
    }
});


// Read more button

var read_more_btn = document.querySelector('.read-more-btn');

read_more_btn.addEventListener('click', () => {
    window.scrollTo(0, window.screen.height)
});


// Show more button

var show_more_box = document.querySelector('.show-more-box');
var show_more = document.querySelector('.show-more');
var more = document.querySelectorAll('.more');

show_more_box.addEventListener('click', () => {
    if (show_more.textContent == "Show more") {
        more.forEach((item) => {
            item.style.display = "block";
        })
        show_more.innerHTML = "Show less"
    }
    else {
        more.forEach((item) => {
            item.style.display = "none";
        })
        show_more.textContent = "Show more"
    }

    show_more.scrollIntoView();
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        more.forEach((item) => {
            item.style.display = "block";
        })
    }

    if (window.innerWidth < 600) {
        more.forEach((item) => {
            item.style.display = "none";
        })
    }
});