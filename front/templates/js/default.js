$(document).ready(function () {
  $(window).scroll(function () {
    $(this).scrollTop() > 200
      ? $(".backtop").addClass("show")
      : $(".backtop").removeClass("show");
  });
  /*** back to top ***/
  $(".backtop").click(function () {
    return (
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      ),
      !1
    );
  });
  /*** btn support left ***/
  $("a.btn-support").click(function (e) {
    e.stopPropagation();
    $(".support-content").slideToggle();
  });

  /*** Footer mobile ***/
  var ww = $(window).width();
  if (ww < 768) {
    $(".foo-title").on("click", function () {
      $(this).next(".foo-content").slideToggle("fast");
    });
  } else {
    $(".foo-content").show();
  }

  /** menu mobile */
  $(".menubutton").click(function (e) {
    e.stopPropagation();
    $(".wrapmenu_right").toggleClass("open_sidebar_menu");
    $(".opacity_menu").toggleClass("open_opacity");
    $("body").toggleClass("open_menu");
  });
  $(".opacity_menu").click(function (e) {
    $(".wrapmenu_right").removeClass("open_sidebar_menu");
    $(".opacity_menu").removeClass("open_opacity");
    $("body").toggleClass("open_menu");
  });
  $(".menubar_pc").click(function () {
    $(".wrapmenu_full").slideToggle("fast");
    $(".wrapmenu_full, .cloed").toggleClass("open_menu");
    $(".dqdt-sidebar, .open-filters").removeClass("openf");
  });
  $(".cloed").click(function () {
    $(this).toggleClass("open_menu");
    $(".wrapmenu_full").slideToggle("fast");
  });
  $(".opacity_menu").click(function () {
    $(".opacity_menu").removeClass("open_opacity");
  });
  if ($(".dqdt-sidebar").hasClass("openf")) {
    $(".wrapmenu_full").removeClass("open_menu");
  }
  $(".ul_collections li > .fa").click(function () {
    $(this).parent().toggleClass("current");
    $(this).toggleClass("fa-plus fa-minus");
    $(this).next("ul").slideToggle("fast");
    $(this).next("div").slideToggle("fast");
  });
});

if ($("#index").length > 0) {
  $(".owl-partner").owlCarousel({
		loop: true,
		autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".owl-news").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
} else {
  // stepForm
  var currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab

  function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
      document.getElementById("nextBtn").innerHTML = "Hoàn Thành";
    } else {
      document.getElementById("nextBtn").innerHTML = "Tiếp theo";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n);
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
      // ... the form gets submitted:
      document.getElementById("regForm").submit();
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  function validateForm() {
    // This function deals with validation of the form fields
    var x,
      y,
      i,
      valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className +=
        " finish";
    }
    return valid; // return the valid status
  }

  function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i,
      x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
  }
}
