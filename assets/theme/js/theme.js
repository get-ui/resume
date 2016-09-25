(function($) {
    //Run function When Document Ready
    $(document).ready(function() {
        initNavbarLink();
        initGradientsAnimations();
        initPortofolio();
        initMap();
    });

    $(window).load(function() {
        //Preloader
        $('#preloader').fadeOut('slow');
        $('.wrapper').css('visibility', 'visible').animate({
            opacity: 1.0
        }, 2000);

        //check if url contain hash(#)
        if (window.location.hash) {
            $('.link-inpage[href="' + window.location.hash + '"]').first().trigger('click');
        }
    });



    //Click Envents
    function initNavbarLink() {
        $('.link-inpage').click(function(e) {
            $(".nav-item > a").removeClass("active");
            $(this).addClass("active");
            var target = this.hash,
                $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - (50)
            }, 1500, 'easeInOutExpo', function() {
                //window.location.hash = target;
            });
            return false;
        });

        $("#main-menu-toggle").click(function(e) {
            if($("#nav-content").is(":visible")){
                $("#nav-content").hide();
            }else{
              $("#nav-content").show();
            }
            return false;
        });
    }

    //Dropdown show hover
    function initGradientsAnimations() {
        if ($('.intro-canvas-image').length > 0) {
            var granimInstance = new Granim({
                element: '.intro-canvas-image',
                direction: 'left-right',
                opacity: [0.8, 0.5],
                isPausedWhenNotInView: true,
                states: {
                    "default-state": {
                        gradients: [
                            ['#000000', '#34495e'],
                            ['#2c3e50', '#ab9d9d'],
                            ['#7f8c8d', '#d2c7c7']
                        ],
                        transitionSpeed: 4000
                    }
                }
            });
        }
    }

    function initPortofolio() {
        var $container = $('#images-portofolio');
        $('#filter-images a').click(function(e) {
            $(this).addClass('active').siblings().removeClass('active');
            var selector = $(this).attr("data-id");
            $container.isotope({
                filter: selector
            });
            return false;
        });
    }

    function initMap() {
        var themes = [{
            "stylers": [{
                "hue": "#00ffee",
            }]
        }];

        $('#map-contact').gmap({
            'center': '-6.597751, 106.798758',
            'zoom': 15,
            scrollwheel: false,
            'disableDefaultUI': false,
            styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "saturation": 36
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 40
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }, {
                    "weight": 1.2
                }]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 20
                }]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 21
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 29
                }, {
                    "weight": 0.2
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 18
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 16
                }]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 19
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }, {
                    "lightness": 17
                }]
            }],
            'callback': function() {
                var self = this;
                self.addMarker({
                    'position': this.get('map').getCenter(),
                    icon: 'assets/theme/images/marker.png'
                }).click(function() {
                    self.openInfoWindow({
                        'content': $('.map-contact-body').html()
                    }, this);
                });
            }
        });
    }


})(jQuery);
