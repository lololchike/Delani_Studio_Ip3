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
  
   $(".onClickImage1").mouseenter("hover", function () {
     $(".onClickImage1").show();
     $(".project1").toggle();
     $(".project1").show();
   });
   $(".project1").mouseout("hover", function () {
     $(".project1").hide();
     $(".onClickImage1").toggle();
     $(".onClickImage1").show();
   });

   $(".onClickImage2").mouseenter("hover", function () {
     $(".onClickImage2").show();
     $(".project2").toggle();
     $(".project2").show();
   });
   $(".project2").mouseout("hover", function () {
     $(".project2").hide();
     $(".onClickImage2").toggle();
     $(".onClickImage2").show();
   });
   $(".onClickImage3").mouseenter("hover", function () {
     $(".onClickImage3").show();
     $(".project3").toggle();
     $(".project3").show();
   });
   $(".project3").mouseout("hover", function () {
     $(".project3").hide();
     $(".onClickImage3").toggle();
     $(".onClickImage3").show();
   });
   $(".onClickImage4").mouseenter("hover", function () {
     $(".onClickImage4").show();
     $(".project4").toggle();
     $(".project4").show();
   });
   $(".project4").mouseout("hover", function () {
     $(".project4").hide();
     $(".onClickImage4").toggle();
     $(".onClickImage4").show();
   });
   $(".onClickImage5").mouseenter("hover", function () {
     $(".onClickImage5").show();
     $(".project5").toggle();
     $(".project5").show();
   });
   $(".project5").mouseout("hover", function () {
     $(".project5").hide();
     $(".onClickImage5").toggle();
     $(".onClickImage5").show();
   });
   $(".onClickImage6").mouseenter("hover", function () {
     $(".onClickImage6").show();
     $(".project6").toggle();
     $(".project6").show();
   });
   $(".project6").mouseout("hover", function () {
     $(".project6").hide();
     $(".onClickImage6").toggle();
     $(".onClickImage6").show();
   });
   $(".onClickImage7").mouseenter("hover", function () {
     $(".onClickImage7").show();
     $(".project7").toggle();
     $(".project7").show();
   });
   $(".project7").mouseout("hover", function () {
     $(".project7").hide();
     $(".onClickImage7").toggle();
     $(".onClickImage7").show();
   });
   $(".onClickImage8").mouseenter("hover", function () {
     $(".onClickImage8").show();
     $(".project8").toggle();
     $(".project8").show();
   });
   $(".project8").mouseout("hover", function () {
     $(".project8").hide();
     $(".onClickImage8").toggle();
     $(".onClickImage8").show();
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



   