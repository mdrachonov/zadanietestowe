var slideWrapper = function() {
    this.slideNow = 1;
    this.translateWidth = 0;
    this.slideCount = $('#slider').children().length;
    this.navButtonId = 0;
    
    
    this.nextSlide = function() {
        if (this.slideNow == this.slideCount || this.slideNow <= 0 || this.slideNow > this.slideCount) {
            $('#slider').css('transform', 'translate(0, 0)');

            this.slideNow = 1;
        }

        else {
            this.translateWidth = -$('#viewport').width() * (this.slideNow);

            $('#slider').css({
                    'transform': 'translate(' + this.translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + this.translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + this.translateWidth + 'px, 0)'
                }); 

            this.slideNow++;
        }
        
        
        this.currentSlide();
    };
    

    this.prevSlide = function() {
        if (this.slideNow == 1 || this.slideNow <= 0 || this.slideNow > this.slideCount) {
            this.translateWidth = -$('#viewport').width() * (this.slideCount - 1);

            $('#slider').css({
                    'transform': 'translate(' + this.translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + this.translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + this.translateWidth + 'px, 0)'
                }); 

            this.slideNow = this.slideCount;
        } 

        else {
            this.translateWidth = -$('#viewport').width() * (this.slideNow - 2);

            $('#slider').css({
                    'transform': 'translate(' + this.translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + this.translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + this.translateWidth + 'px, 0)'
                }); 

            this.slideNow--;
        }
        
        
        this.currentSlide();
    };
    
    
    this.numberSlideClick = function() {
        if (this.navButtonId + 1 != this.slideNow) {
            this.translateWidth = -$('#viewport').width() * (this.navButtonId);
            
            $('#slider').css({
                'transform': 'translate(' + this.translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + this.translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + this.translateWidth + 'px, 0)'
            }); 

            this.slideNow = this.navButtonId + 1;
        }
    };

    
    this.currentSlide = function() {
            $('.slide-nav-button').css('background', 'white');
            $('.slide-nav-button:nth-child(' + this.slideNow + ')').css('background', 'black'); 
    };
        
};


$(document).ready(function() {
    var slideInterval = 2000;
     
    var mainSlideWrapper = new slideWrapper();
    
    var switchInterval = setInterval(mainSlideWrapper.nextSlide.bind(mainSlideWrapper, mainSlideWrapper.currentSlide()), slideInterval);


    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(mainSlideWrapper.nextSlide.bind(mainSlideWrapper, mainSlideWrapper.currentSlide()), slideInterval);
    });
    

    $('#next-button').click(function() {
        mainSlideWrapper.nextSlide();
    });
    

    $('#prev-button').click(function() {
        mainSlideWrapper.prevSlide();
    });
    

    $('.slide-nav-button').click(function() {
        mainSlideWrapper.navButtonId = $(this).index();

        mainSlideWrapper.numberSlideClick();
        
        mainSlideWrapper.currentSlide();
    });
});