
$(document).ready(function () {

    $(".i-design").mouseenter('hover',function () {
      $(".i-design").hide();
      $("#design").toggle();
        $("#design").show();
    });
     $("#design").mouseenter("hover", function () {
       $("#design").hide();
       $(".i-design").toggle();
       $(".i-design").show();
     });
    
    
    $(".i-service").mouseenter("hover", function () {
      $(".i-service").hide();
      $("#service").toggle();
      $("#service").show();
    });
    $("#service").mouseenter("hover", function () {
      $("#service").hide();
      $(".i-service").toggle();
      $(".i-service").show();
    });
    $(".i-product").mouseenter("hover", function () {
      $(".i-product").hide();
      $("#product").toggle();
      $("#product").show();
    });
    $("#product").mouseenter("hover", function () {
      $("#product").hide();
      $(".i-product").toggle();
      $(".i-product").show();
    });
     
    });


