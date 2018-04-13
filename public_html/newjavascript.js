var slideNow = 1; //mówimy funkcji na jakim słajdzie znajdujemy się
var slideCount = $('#slider').children().length; //ilość wszystkich słajdów
var slideInterval = 3000;
var navButtonId = 0; //numer wybranego przycisku nawigacji
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval); //uruchamiamy  pokaz słajdów

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-button').click(function() {
        nextSlide();
    });

    $('#prev-button').click(function() {
        prevSlide();
    });

    $('.slide-nav-button').click(function() {
        navButtonId = $(this).index(); //przypisuję zmiennej numer kliknentego przycisku

        if (navButtonId + 1 != slideNow) { //sprawdzamy czy number przycisku i number słajdu są równe
            translateWidth = -$('#viewport').width() * (navButtonId);
            
            $('#slider').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            }); 
            
            slideNow = navButtonId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) { //sprawdzamy czu znajdujemy się na ostatnim lub na nieistniejącym słajdzie
        $('#slider').css('transform', 'translate(0, 0)'); //zmieszczamy na początkową pozycję
        
        slideNow = 1;
    } 
    
    else {
        translateWidth = -$('#viewport').width() * (slideNow); //ustawiamy odległość
        
        $('#slider').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            }); 
        
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) { //sprawdzamy czy znajdujemy się na pierwszym słajdzie
        translateWidth = -$('#viewport').width() * (slideCount - 1); // zmieszczamy no ostatnią pozycję
        
        $('#slider').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            }); 
        
        slideNow = slideCount; //ustaliamy pozycję ostatniego słajdu
    } 
    
    else {
        translateWidth = -$('#viewport').width() * (slideNow - 2); //zmieszczamy na -2, bo translate(x, 0) x już = szerokości 1 słajdu
        
        $('#slider').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            }); 
        
        slideNow--;
    }
}