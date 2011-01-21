/* Author: Christian Kirkegaard
*/

var R = {

    init: function() {
        $('.job h3').bind('click', function(event) {
            $(this).parent().find('.description').slideToggle();
        });

        $('a[rel*=lightbox]').lightBox({
            overlayBgColor: '#000',
            overlayOpacity: 0.2,
        });

    }

}

jQuery(document).ready(function($) {
    R.init();
});
