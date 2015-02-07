$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;

        if (target) {
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function() {
                window.location.hash = target;
            });
        }

    });
});

jQuery(document).ready(function() {
    //open-close submenu on mobile
    $('.cd-main-hamburger').on('click', function(event) {
        // $(this).next().slideToggle(); // both do the same thing
        $('.cd-main-nav').slideToggle();
    });
});

// Map Placemarkers script
$(document).ready(function() {
    //set up markers
    var myMarkers = {
        "markers": [{
            "latitude": "39.050811",
            "longitude": "-76.663514",
            "icon": "img/stick-btn.png",
            "baloon_text": 'API Indoor facility'
        }, {
            "latitude": "39.052696",
            "longitude": "-77.034868",
            "icon": "img/stick-btn.png",
            "baloon_text": 'Wheaton Indoor Lacrosse facility (Performance and Red Line Lacrosse)'
        }, {
            "latitude": "39.052681",
            "longitude": "-76.514073",
            "icon": "img/stick-btn.png",
            "baloon_text": 'Heros Lacrosse Summer League'
        },
            {
            "latitude": "38.2684541",
            "longitude": "-77.4523822",
            "icon": "img/stick-btn.png",
            "baloon_text": 'Fredericksburg Field House'
        },
            {
            "latitude": "39.2210638",
            "longitude": "-76.7592369",
            "icon": "img/stick-btn.png",
            "baloon_text": 'Howard County League + MD Masters'
        },
            {
            "latitude": "38.907965",
            "longitude": "-77.075334",
            "icon": "img/stick-btn.png",
            "baloon_text": 'Stars and Stripes League'
        }
        ]
    };

    $('#tm').one('change', function() {

	    //set up map options
	    $("#map").mapmarker({
	        zoom: 10,
	        center: '38.9681957,-76.8623406',
	        markers: myMarkers
	    });
    });

});


/*get rid of if. replace 
$(this).children('ul').toggleClass('is-visible');	
with
$(this).children('ul').slideToggle();*/
