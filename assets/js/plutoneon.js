/*!
=========================================================
* Plutoneon Landing page V 1.0
=========================================================

* Copyright: 2015-2023 Plutoneon (https://plutoneon.com)
* Licensed: (https://plutoneon.com)
* Coded by www.plutoneon.com and ajshepherd.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

 // toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const themeLight = document.querySelector('.theme-selector .light');
    const themeDark = document.querySelector('.theme-selector .dark');
    const themeVideo = document.querySelector('.theme-selector .video');

    // Set default theme to video
    let theme = localStorage.getItem('theme') || 'video';
    header.setAttribute('data-theme', theme);

    themeLight.addEventListener('click', function() {
        header.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    });

    themeDark.addEventListener('click', function() {
        header.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    });

    themeVideo.addEventListener('click', function() {
        header.setAttribute('data-theme', 'video');
        localStorage.setItem('theme', 'video');
    });
});

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 
