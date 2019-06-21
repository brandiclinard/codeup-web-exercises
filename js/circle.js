(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var radius = circle.radius;
            var circleArea = Math.PI * (Math.pow(radius, 2));

            return circleArea; // TODO: return the proper value
        },

        logInfo: function (boolean) {
            // TODO: complete this method.
            var circleAction = circle.getArea();
           if (Number(boolean) === 1){
               circleAction = Math.round(circle.getArea());
               return circleAction;
           }else if (Number(boolean) === 0);
                return circleAction;



            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    console.log("Area of a circle with radius " + circle.radius + " is: " + circle.getArea(circle));
    // log info about the circle
    console.log("Raw circle information: " + circle.logInfo(false)) ;

    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(true));


    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var radius = circle.radius;
            var circleArea = Math.PI * (Math.pow(radius, 2));

            return circleArea; // TODO: return the proper value
        },

        logInfo: function (boolean) {
            // TODO: complete this method.
            var circleAction = circle.getArea();
            if (Number(boolean) === 1){
                circleAction = Math.round(circle.getArea());
                return circleAction;
            }else if (Number(boolean) === 0);
            return circleAction;
        }
    };


    // log info about the circle
    console.log("Area of a circle with radius " + circle.radius + " is: " + circle.getArea(circle));
    // log info about the circle
    console.log("Raw circle information: " + circle.logInfo(false)) ;

    console.log("Circle information rounded to the nearest whole number: " + circle.logInfo(true));


})();


//-- EXERCISE COMPLETE. PENDING WALK THROUGH.