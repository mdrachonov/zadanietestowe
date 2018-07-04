jQuery(document).ready(function() {
    var minlen = 1;
    var keyint = 50;
    var term = '';
    var n = 0;
    var time_keyup = 0;
    var time_search = 0;
    
    function dosearch() {
        term = jQuery('#finder').val();

        jQuery('span.highlight').each(function() {
            jQuery(this).after(jQuery(this).html()).remove();  
        });

        jQuery('div.content').each(function() {
            jQuery(this).html(jQuery(this).html().replace(new RegExp(term, 'ig'), '<span class="highlight">$&</span>'));

            n = jQuery('span.highlight').length;

            if (n == 0) {
                jQuery('#find-result').html('Nie ma wyników');
            } else {
                jQuery('#find-result').html('Wyników: ' + n); 
            }
        });
    }
   
    jQuery('#finder').keyup(function() {
        var d1 = new Date();
        time_keyup = d1.getTime();

        if (jQuery('#finder').val() != term) {
            if (jQuery('#finder').val().length >= minlen) {
                setTimeout(function() {
                    var d2 = new Date();
                    time_search = d2.getTime();
    
                    if (time_search - time_keyup >= keyint) {
                        dosearch();
                    }
                }, keyint); 
            } else {
                jQuery('#find-result').html('&nbsp');
                jQuery('span.highlight').each(function() {
                    jQuery(this).after(jQuery(this).html()).remove();  
                });
            }
        }
    });	
});
