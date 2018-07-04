jQuery(document).ready(function(){
    var minlen = 1;
    var paddingtop = 30;
    var scrollspeed = 200;
    var keyint = 1000;
    var term = '';
    var n = 0;
    var time_keyup = 0;
    var time_search = 0;
    
    jQuery('body').delegate('#spgo', 'click', function(){
        jQuery('body,html').animate({scrollTop: jQuery('span.highlight:first').offset().top-paddingtop}, scrollspeed);
    });
    
    function dosearch() {
        term = jQuery('#spterm').val();

        jQuery('span.highlight').each(function(){
            jQuery(this).after(jQuery(this).html()).remove();  
        });

        var t = '';

        jQuery('div#content').each(function(){
            jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>'));

            n = jQuery('span.highlight').length;
        });
    }
   
    jQuery('#spterm').keyup(function(){
        var d1 = new Date();
        time_keyup = d1.getTime();

        if (jQuery('#spterm').val() != term) {
            if (jQuery('#spterm').val().length >= minlen) {
                setTimeout(function() {
                    var d2 = new Date();
                    time_search = d2.getTime();
    
                    if (time_search - time_keyup >= keyint) {
                        dosearch();
                    }
                }, keyint); 
            } else {
                jQuery('#spresult').html('&nbsp');
            }
        }
    });	
});
