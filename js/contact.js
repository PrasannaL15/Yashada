$(document).ready(function () {
  (function ($) {
    "use strict";

    $("#bookingModal").on("show.bs.modal", function (e) {
      //get data-id attribute of the clicked element
      let roomType = $(e.relatedTarget).data("room-type");
      console.log(roomType);
      //populate the textbox
      if (roomType) {
        $("#roomType").val(roomType);
        $(".nice-select .current").html(roomType);
      }
    });

    // validate contactForm form

    $(".whatsappDiv").click(() => {
      $("html, body").animate(
        {
          scrollTop:
            $(".booking-part").offset().top - ($(".navbar ").height() + 50),
        },
        1000
      );
    });

    $("#bookingSubmitbtn").click(function (e) {
      whatsAppBooking();
    });

    function whatsAppBooking() {
      //Preventing page refresh

      console.log($("#dateSelect").val());

      let adults = $("#adults").val();
      let kids = $("#kids").val();
      // let rooms = $("#rooms").val();
      let roomType = $("#roomType").val();
      console.log(adults, kids, roomType);

      if (
        $("#dateSelect").val() == "" ||
        adults == "" ||
        kids == "" ||
        roomType == ""
      ) {
        alert("Please Enter All The Details To Enquire");
      } else if (isNaN(adults)) {
        alert("Adults should be a number. Please enter correct values");
      } else {
        const messagetext =
          `Hey...
      
      I am Intrested in booking *@ Yashadha Vishram Dham*!
      
      *Dates* - ` +
          $("#dateSelect").val() +
          `
      *Room Type* - ` +
          roomType +
          `
      *Adults* - ` +
          adults +
          `
      *Kids* - ` +
          kids +
          ``;
        let target = "_blank";
        // isFormCompleted = true;
        const htmlLink =
          "https://wa.me/919834069861?text=" + encodeURI(messagetext) + "";
        window.open(htmlLink, (target = "_blank"));
      }
    }
  })(jQuery);
});
