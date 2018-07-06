class Finder {
    constructor() {
        this.minlen = 1;
        this.keyint = 50;
        this.term = '';
        this.n = 0;
        this.time_keyup = 0;
        this.time_search = 0;
        self = this;
    }

    dosearch() {
        self.term = jQuery('#finder').val();

        jQuery('span.highlight').each(function() {
            jQuery(this).after(jQuery(this).html()).remove();  
        });

        jQuery('div.content').each(function() {
            jQuery(this).html(jQuery(this).html().replace(new RegExp("(?![^<>]*>)(" + self.term + ")", 'ig'), '<span class="highlight">$&</span>'));

            this.n = jQuery('span.highlight').length;

            if (this.n == 0) {
                jQuery('#find-result').html('Nie ma wyników');
            } else {
                jQuery('#find-result').html('Wyników: ' + this.n); 
            }
        });
    }

    startFind() {
        this.d1 = new Date();
        self.time_keyup = this.d1.getTime();

        if (jQuery('#finder').val() != self.term) {
            if (jQuery('#finder').val().length >= self.minlen) {
                setTimeout(function() {
                    this.d2 = new Date();
                    self.time_search = this.d2.getTime();
    
                    if (self.time_search - self.time_keyup >= self.keyint) {
                        self.dosearch();
                    }
                }, self.keyint); 
            } else {
                jQuery('#find-result').html('&nbsp');

                jQuery('span.highlight').each(function() {
                    jQuery(this).after(jQuery(this).html()).remove();  
                });
            }
        }
    }
}
