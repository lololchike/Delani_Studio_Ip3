
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




     $(".work1").mouseenter("hover", function () {
       $(".work1").show();
       $(".project1").toggle();
       $(".project1").show();
     });
     $(".project1").mouseenter("hover", function () {
       $(".project1").hide();
       $(".work1").toggle();
       $(".work1").show();
    
     });
    
$(".work2").mouseenter("hover", function () {
  $(".work2").show();
  $(".project2").toggle();
  $(".project2").show();
});
$(".project2").mouseenter("hover", function () {
  $(".project2").hide();
  $(".work2").toggle();
  $(".work2").show();
});
    $(".work3").mouseenter("hover", function () {
      $(".work3").show();
      $(".project3").toggle();
      $(".project3").show();
    });
    $(".project3").mouseenter("hover", function () {
      $(".project3").hide();
      $(".work3").toggle();
      $(".work3").show();
    });
    $(".work4").mouseenter("hover", function () {
      $(".work4").show();
      $(".project4").toggle();
      $(".project4").show();
    });
    $(".project4").mouseenter("hover", function () {
      $(".project4").hide();
      $(".work4").toggle();
      $(".work4").show();
    });
    $(".work5").mouseenter("hover", function () {
      $(".work5").show();
      $(".project5").toggle();
      $(".project5").show();
    });
    $(".project5").mouseenter("hover", function () {
      $(".project5").hide();
      $(".work5").toggle();
      $(".work5").show();
    });
    $(".work6").mouseenter("hover", function () {
      $(".work6").show();
      $(".project6").toggle();
      $(".project6").show();
    });
    $(".project6").mouseenter("hover", function () {
      $(".project6").hide();
      $(".work6").toggle();
      $(".work6").show();
    });
    $(".work7").mouseenter("hover", function () {
      $(".work7").show();
      $(".project7").toggle();
      $(".project7").show();
    });
    $(".project7").mouseenter("hover", function () {
      $(".project7").hide();
      $(".work7").toggle();
      $(".work7").show();
    });
    $(".work8").mouseenter("hover", function () {
      $(".work8").show();
      $(".project8").toggle();
      $(".project8").show();
    });
    $(".project8").mouseenter("hover", function () {
      $(".project8").hide();
      $(".work8").toggle();
      $(".work8").show();
    });

});
 
    $(document).ready(function () {
      $("#form").submit(function (event) {
        var userName = $("input#NAME").val();
        var email = $("input#EMAIL").val();
        if (userName && email != "") {
          alert(
            "Thank you " +
              userName +
              "." +
              " we have received your message,Thank you for reaching out to us."
          );
        } else {
          alert("Please enter your name and email");
        }
        event.preventDefault();
      });
    });


