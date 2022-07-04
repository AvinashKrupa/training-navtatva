$(document).on("click", ".upload-field", function () {
  var file = $(this).parent().parent().parent().find(".input-file");
  file.trigger("click");
});
$(document).on("change", ".input-file", function () {
  $(this)
    .parent()
    .find(".form-control")
    .val(
      $(this)
        .val()
        .replace(/C:\\fakepath\\/i, "")
    );
});
$(document).ready(function () {
  var ckbox = $(".cateory-checkbox input");
  $(".category-area").on("click", function () {
    if (ckbox.is(":checked")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  var ckbox2 = $(".radio-area input");
  $(".radio-item").on("click", function () {
    if (ckbox2.is(":checked")) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  $(".cateory-checkbox input").on("click", function () {
    if (mycheckbox.checked) {
      alert("Checkbox is checked.");
    } else {
      alert("Checkbox is unchecked.");
    }
  });
  $(".switch label").on("click", function () {
    $(".otp-box").toggle();
  });

  $("input.form-control").on("click", function () {
    $(this).addClass("active");
  });

  $(".nav-tabs > li a[title]").tooltip();

  //Wizard
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    var target = $(e.target);

    if (target.parent().hasClass("disabled")) {
      return false;
    }
  });
  $(".next-step").click(function (e) {
    var active = $(".wizard .nav-tabs li.active");
    active.next().removeClass("disabled");
    nextTab(active);
  });
  $(".prev-step").click(function (e) {
    var active = $(".wizard .nav-tabs li.active");
    prevTab(active);
  });
});

function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}

$(".nav-tabs").on("click", "li", function () {
  $(".nav-tabs li.active").removeClass("active");
  $(this).addClass("active");
});
