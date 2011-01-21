/* Author: Christian Kirkegaard
*/

var R = {

    init: function() {
        $('.job h3').bind('click', function(event) {
            $(this).parent().find('.description').slideToggle();
        });
        
        $('a[rel*=facebox]').facebox();
        //$(document).bind('reveal.facebox', function() {});
    }

}

jQuery(document).ready(function($) {
    R.init();
});
