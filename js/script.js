$(document).ready(function(){

    $('.hr2').waypoint(function(direction) {
        if (direction === 'down') {
            $('.change1,.change3,.change4').css('opacity', '0');
            $('.change2').css('opacity', '1');
        } else {
            $('.change2,.change3,.change4').css('opacity', '0');
            $('.change1').css('opacity', '1');
        }
    }, { offset: 143 });

    $('.hr3').waypoint(function(direction) {
        if (direction === 'down') {
            $('.change1,.change2,.change4').css('opacity', '0');
            $('.change3').css('opacity', '1');
        } else {
            $('.change1,.change3,.change4').css('opacity', '0');
            $('.change2').css('opacity', '1');
        }
    }, { offset: 143 });

    $('.hr4').waypoint(function(direction) {
        if (direction === 'down') {
            $('.change1,.change2,.change3').css('opacity', '0');
            $('.change2').css('opacity', '0');
        } else {
            $('.change1,.change2,.change4').css('opacity', '0');
            $('.change3').css('opacity', '1');
        }
    }, { offset: 143 });

});
