// Page Nav
var clickMenu = function() {

    $('#navbar a:not([class="external"])').click(function(event){
        var section = $(this).data('nav-section'),
            navbar = $('#navbar');

            if ( $('[data-section="' + section + '"]').length ) {
                $('html, body').animate({
                    scrollTop: $('[data-section="' + section + '"]').offset().top - 0
                }, 500);
           }

        if ( navbar.is(':visible')) {
            navbar.removeClass('in');
            navbar.attr('aria-expanded', 'false');
            $('.js-fh5co-nav-toggle').removeClass('active');
        }

        event.preventDefault();
        return false;
    });


};

// Reflect scrolling in navigation
var navActive = function(section) {

    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function(){
        $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
    });

};

var navigationSection = function() {

    var $section = $('section[data-section]');
    
    $section.waypoint(function(direction) {
          
          if (direction === 'down') {
            navActive($(this.element).data('section'));
          }
    }, {
          offset: '150px'
    });

    $section.waypoint(function(direction) {
          if (direction === 'up') {
            navActive($(this.element).data('section'));
          }
    }, {
          offset: function() { return -$(this.element).height() + 155; }
    });

};

// Window Scroll
var windowScroll = function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event){

           var header = $('#fh5co-header'),
            scrlTop = $(this).scrollTop();

        if ( scrlTop > 500 && scrlTop <= 2000 ) {
            header.addClass('navbar-fixed-top fh5co-animated slideInDown');
        } else if ( scrlTop <= 500) {
            if ( header.hasClass('navbar-fixed-top') ) {
                header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
                setTimeout(function(){
                    header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
                }, 100 );
            }
        } 
        
    });
}};