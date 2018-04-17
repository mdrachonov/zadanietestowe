class slideWrapper {
    
    constructor(time) {
        this.slideNow = 1;
        this.translateWidth = 0;
        this.slideCount = $('#slider').children().length;
        this.navButtonId = 0;
        this.slideInterval = time;
        self = this;
    }
    
    
    nextSlide() {
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
    }
    

    prevSlide() {
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
    }
    
    
    numberSlideClick() {
        if (this.navButtonId + 1 != this.slideNow) {
            this.translateWidth = -$('#viewport').width() * (this.navButtonId);
            
            $('#slider').css({
                'transform': 'translate(' + this.translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + this.translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + this.translateWidth + 'px, 0)'
            }); 

            this.slideNow = this.navButtonId + 1;
        }
    }

    
    currentSlide() {
            $('.slide-nav-button').css('background', 'white');
            $('.slide-nav-button:nth-child(' + this.slideNow + ')').css('background', 'black'); 
    }
        
    startSlide() {
        this.switchInterval = setInterval(this.nextSlide.bind(this, this.currentSlide()), this.slideInterval);
        
        $('#slider').hover(function() {
            clearInterval(self.switchInterval);
        }, function() {
            self.switchInterval = setInterval(self.nextSlide.bind(self, self.currentSlide()), self.slideInterval);           
        });
        
        $('#next-button').click(function() {
            self.nextSlide();
        });
        
        $('#prev-button').click(function() {
            self.prevSlide();
        });
        
        $('.slide-nav-button').click(function() {
            self.navButtonId = $(this).index();

            self.numberSlideClick();

            self.currentSlide();
        });
    }
};