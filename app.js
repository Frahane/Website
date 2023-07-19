$(function () {
 $(".welcome").waypoint(
  function () {
   $(".welcome").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "90%" }
 );

 $(".code").waypoint(
  function () {
   $(".code").addClass("animate__animated animate__bounceIn");
  },
  { offset: "90%" }
 );

 $(".code-p").waypoint(
  function () {
   $(".code-p").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "90%" }
 );

 $(".skill-p").waypoint(
  function () {
   $(".skill-p").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li1").waypoint(
  function () {
   $(".li1").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li2").waypoint(
  function () {
   $(".li2").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li2").waypoint(
  function () {
   $(".li2").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li3").waypoint(
  function () {
   $(".li3").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li4").waypoint(
  function () {
   $(".li4").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li5").waypoint(
  function () {
   $(".li5").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li6").waypoint(
  function () {
   $(".li6").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li7").waypoint(
  function () {
   $(".li7").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li8").waypoint(
  function () {
   $(".li8").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li9").waypoint(
  function () {
   $(".li9").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".second").waypoint(
  function () {
   $(".second").addClass("animate__animated animate__bounceIn");
  },
  { offset: "70%" }
 );

 $(".second-p").waypoint(
  function () {
   $(".second-p").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "60%" }
 );

 $(".certificate-p").waypoint(
  function () {
   $(".certificate-p").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".li").waypoint(
  function () {
   $(".li").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".name").waypoint(
  function () {
   $(".name").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "60%" }
 );

 $(".bio").waypoint(
  function () {
   $(".bio").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "60%" }
 );

 $(".li").waypoint(
  function () {
   $(".li").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".flower1").waypoint(
  function () {
   $(".flower1").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "70%" }
 );

 $(".flower2").waypoint(
  function () {
   $(".flower2").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "60%" }
 );

 $(".plage").waypoint(
  function () {
   $(".plage").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".skill").waypoint(
  function () {
   $(".skill").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "70%" }
 );

 $(".certificate").waypoint(
  function () {
   $(".certificate").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "70%" }
 );

 $(".section").waypoint(
  function () {
   $(".section").addClass("animate__animated animate__bounceInLeft");
  },
  { offset: "70%" }
 );

 $(".crypto").waypoint(
  function () {
   $(".crypto").addClass("animate__animated animate__backInDown");
  },
  { offset: "70%" }
 );

 $(".right").waypoint(
  function () {
   $(".right").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".cxo").waypoint(
  function () {
   $(".cxo").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".read").waypoint(
  function () {
   $(".read").addClass("animate__animated animate__bounceInRight");
  },
  { offset: "70%" }
 );

 $(".beach").on("click", function () {
  if ($(".beach").hasClass("enlarged")) {
   $(".beach").removeClass("enlarged");
   $(".beach").css("border-radius", "");
  } else {
   $(".beach").addClass("enlarged");
   $(".beach").css("border-radius", "5px");
  }
 });
 $(".code").on("click", function () {
  if ($(".code").hasClass("enlarged")) {
   $(".code").removeClass("enlarged");
   $(".code").css("border-radius", "");
  } else {
   $(".code").addClass("enlarged");
   $(".code").css("border-radius", "5px");
  }
 });
 $(".flower1").on("click", function () {
  if ($(".flower1").hasClass("enlarged")) {
   $(".flower1").removeClass("enlarged");
   $(".flower1").css("border-radius", "");
  } else {
   $(".flower1").addClass("enlarged");
   $(".flower1").css("border-radius", "5px");
  }
 });
 $(".flower2").on("click", function () {
  if ($(".flower2").hasClass("enlarged")) {
   $(".flower2").removeClass("enlarged");
   $(".flower2").css("border-radius", "");
  } else {
   $(".flower2").addClass("enlarged");
   $(".flower2").css("border-radius", "5px");
  }
 });

 var btcPriceUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

 $.getJSON(btcPriceUrl, function (data) {
  var btcPrice = data.bitcoin.usd.toFixed(2);
  $("#btc-price").text(btcPrice);
 });

 var skycoinPriceUrl =
  "https://api.coingecko.com/api/v3/simple/price?ids=skycoin&vs_currencies=usd";

 $.getJSON(skycoinPriceUrl, function (data) {
  var skycoinPrice = data.skycoin.usd;
  $("#skycoin-price").text(skycoinPrice);
 });

 var nessPriceUrl = "https://api.xbts.io/api/market_ticker?base=NESS&quote=BTS";

 $.getJSON(nessPriceUrl, function (data) {
  var nessPrice = data.latest;
  $("#ness-price").text(nessPrice);
 });

 $("#toggle-btn").on("click", function () {
  $(".crypto").toggle();
  var buttonText = $(this).text();
  $(this).text(buttonText == "Hide" ? "Show" : "Hide");
 });

 // Get all images with the class "myImg" and attach a click event listener
 $(".myImg").on("click", function () {
  // Get the clicked image
  var imgSrc = $(this).attr("src");
  var captionText = $(this).attr("alt");
  // Set the source of the image and the caption text in the modal
  $("#img01").attr("src", imgSrc);
  $("#caption").text(captionText);
  // Show the modal
  $("#myModal").show();
 });

 // When the user clicks on <span> (x), close the modal
 $(".close").on("click", function () {
  $("#myModal").hide();
 });

 // Hide the image container initially
 $("#image-container").hide();
 $("#computer").hide();
 $("#ipv4").hide();
 $("#jquery").hide();
 $("#sql").hide();
 $("#sass").hide();
 $("#node").hide();

 // When the "Web developer" p tag is clicked, show the image container
 $("li.web-developer").on("click", function () {
  $("#image-container").fadeIn(2000);
 });
 $("li.computer").on("click", function () {
  $("#computer").fadeIn(2000);
 });
 $("li.ipv4").on("click", function () {
  $("#ipv4").fadeIn(2000);
 });
 $("li.jquery").on("click", function () {
  $("#jquery").fadeIn(2000);
 });
 $("li.sql").on("click", function () {
  $("#sql").fadeIn(2000);
 });
 $("li.sass").on("click", function () {
  $("#sass").fadeIn(2000);
 });
 $("li.NODE").on("click", function () {
  $("#node").fadeIn(2000);
 });

 // When the close button is clicked, hide the image container
 $("#close-button").on("click", function () {
  $("#image-container").fadeOut(1000);
 });

 $("#close-computer").on("click", function () {
  $("#computer").fadeOut(1000);
 });

 $("#close-ipv4").on("click", function () {
  $("#ipv4").fadeOut(1000);
 });

 $("#close-jquery").on("click", function () {
  $("#jquery").fadeOut(1000);
 });

 $("#close-sql").on("click", function () {
  $("#sql").fadeOut(1000);
 });

 $("#close-sass").on("click", function () {
  $("#sass").fadeOut(1000);
 });

 $("#close-node").on("click", function () {
  $("#node").fadeOut(1000);
 });

 //Letter form

 $("#letter-form").on("submit", function (e) {
  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();

  // Send the letter data to a server-side script using AJAX
  $.ajax({
   url: "send_letter.php", // Replace with the URL of your server-side script
   type: "POST",
   data: {
    name: name,
    email: email,
    message: message,
   },
   success: function (response) {
    // Letter was sent successfully
    alert("Your letter has been sent!");
    $("#letter-form")[0].reset(); // Clear the form fields
   },
   error: function () {
    // There was an error sending the letter
    alert("There was an error sending your letter. Please try again.");
   },
  });
 });
});
