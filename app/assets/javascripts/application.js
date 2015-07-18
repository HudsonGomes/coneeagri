// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require underscore
//= require backbone
//= require backbone_rails_sync
//= require backbone_datalink
//= require backbone/coneeagri
//= require_tree .

$(document).ready(function(){
    $('.slider-home').slider({full_width: true, interval: 6000});

    $('.slider-infra').slider({indicators: false, full_width: true, height: 200, interval: 4000});

    $("#count-down").TimeCircles(
        {
            circle_bg_color: "#81c784",
            use_background: true,
            bg_width: 1.2,
            fg_width: 0.03,
            time: {
                Days: { color: "#fefeee" },
                Hours: { color: "#fefeee" },
                Minutes: { color: "#fefeee" },
                Seconds: { color: "#fefeee" }
            }
        }
    );

    $('.button-collapse').sideNav({
        edge: 'right',
        closeOnClick: true
    });

});


