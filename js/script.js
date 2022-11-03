
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
    $(document).ready(function () {
      $(".text").hover(
        function () {
          $(this).animate({ opacity: "1" });
        },
        function () {
          $(this).animate({ opacity: "0" });
        }
      );
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


