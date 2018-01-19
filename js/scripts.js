/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */

/*Adding onClick listener to the play store button*/

$(".play_store").on('click', function(){
     window.location = "https://goo.gl/Fk6pRL";
});

/*wow.js sliding animation here */

$(function () {

    //init wow effects
    new WOW().init();
    //scroll menu
    $(window).scroll(function () {
        var secondFeature = $('#features').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('.sticky-navigation').css({"top": '0px'});
        } else {
            $('.sticky-navigation').css({"top": '-100px'});
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    });
    
    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/**/

var accurate="The accurate and standard data from government of Nepal, Department of transport management."
var hotline="Contains traffic hotline and other toll free hotline numbers so that you can make a call to report in case of any cheating, jam or pressures"
var online="Supports both online and offline services. More freedom in case of offline use"
var safety="Safety and Security guidelines for all sorts of users including pedestrians, cyclists, motorists, motorcyclists, schoolchildrens etc."
var ease="Easy to use with swipeable tabbed layout and navigation drawer."
var material_design="Built following material design guidelines and material cardview."

var download_connect="Download and install fare finder nepal in you mandroid smartphone now. "

$(".accurate").text(accurate)
$(".hotline").text(hotline);
$(".online").text(online);
$(".safety").text(safety);
$(".ease").text(ease);
$(".material_design").text(material_design);
$(".download_connect").text(download_connect);







