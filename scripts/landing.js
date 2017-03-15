$(window).load(function() {
    // Convert to window to jQuery update .innerHeight to jQuery height() method
    if ($(window).height() > 950) {
        animatePoints();
    }
    
    // Replace getBoundingClientRect() with .offset() method               
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
    
    // Replace addEventListener() with scroll() method
    $(window).scroll(function(event) {
        // Replace document.documentElement.scrollTop || document.body.scrollTop with 
        // $(window).scrollTop() 
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    });
});

// Remove DOM selector that gets .point element by class name
var animatePoints = function() {
    var revealPoint = function() {
        // Use css() method in place of multiple style instances
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    // Replace for loop with $.each() function
    $.each($('.point'), revealPoint);
};

/*var pointsArray = document.getElementsByClassName('point');

var animatePoints = function (points) {
    var revealPoint = function (index) {
        points[index].style.opacity = 1;
        points[index].style.transform = "scaleX(1) translateY(0)";
        points[index].style.msTransform = "scaleX(1) translateY(0)";
        points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
    
    for(var i = 0; i < points.length; i++) {
            revealPoint(i);
        }
 
};*/