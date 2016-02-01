 
$(document).ready(function (){
    var detect = "onorientationchange" in window;
    var orientTimer = 0;
 
    var ROTATION_CLASSES = {
        "0" : "none",
        "90" : "right",
        "-90" : "left",
        "180": "flipped"
    };
    $(window).bind(detect ? "orientationchange" : "resize", function(evt) {
        clearTimeout(orientTimer);
        orientTimer = setTimeout( function(){
            $("#tipo").html("Evento chamado: " + evt.type);
            $("#orientacao").html(window.orientation);
            $("#largura").html(window.innerWidth);
            $("#altura").html(window.innerHeight);
 
            var aspect = 1;
            if (window.innerHeight !== 0){
                aspect = window.innerWidth / window.innerHeight;
            }
            var orientation = aspect <= 1 ? "retrato" : "paisagem";
            var rotationText = null;
            rotationText = ROTATION_CLASSES[window.orientation.toString()];
            $("#orientacao-detectada").html(orientation);
            $("#rotacao").html(rotationText);
        }, 500);
    });
});
