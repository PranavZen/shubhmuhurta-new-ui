window.addEventListener("scroll", () => {
  myFunction();
});

let prevScrollPos = window.pageYOffset; // Initialize prevScrollPos here

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("headerSection");

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else if (prevScrollPos > 500) {
    navbar.style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};

window.addEventListener("scroll", handleScroll);

function myFunction() {
  const navbar = document.getElementById("headerSection");

  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggle() {
  var element = document.getElementById("sidenav");
  element.classList.toggle("is-collapsed");
  var element = document.getElementById("dashboardBody");
  element.classList.toggle("fullWidthBox");
}

function notificationDisplay() {
  var notifyBox = document.getElementById("notification");
  var bckDrop = document.getElementById("backdrop");
  var bodyAdd = document.body;
  notifyBox.classList.toggle("show");
  bckDrop.classList.toggle("show");
  bodyAdd.classList.toggle("overflow-hidden");
}
function logBoxDisplay() {
  var LogBox = document.getElementById("loginNotify");
  var bckDrop = document.getElementById("backdrop");
  bckDrop.classList.toggle("show");
  var bodyAddw = document.body;
  LogBox.classList.toggle("show");
  bodyAddw.classList.toggle("overflow-hidden");
}
function closeBackdrop() {
  var notifyBox = document.getElementById("notification");
  var LogBox = document.getElementById("loginNotify");
  var bckDrop = document.getElementById("backdrop");
  var bodyAddw = document.body;
  LogBox.classList.remove("show");
  notifyBox.classList.remove("show");
  bckDrop.classList.remove("show");
  bodyAddw.classList.remove("overflow-hidden");
}
$(document).ready(function () {
  $(".servicesSlider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    loop: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#sliderFive").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    loop: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#sliderSix").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    // centerMode: true,
    loop: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $("#sliderSeven").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    // centerMode: true,
    loop: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // $("#sliderOnlineWrap").slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   prevArrow:
  //     '<button type="button" class="slick-prev"><span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M0.856182 7.81687L5.33538 11.7508C5.51822 11.9104 5.76555 12 6.02336 12C6.28117 12 6.5285 11.9104 6.71134 11.7508C6.80281 11.6711 6.87541 11.5763 6.92495 11.4719C6.97449 11.3674 7 11.2554 7 11.1423C7 11.0291 6.97449 10.9171 6.92495 10.8127C6.87541 10.7082 6.80281 10.6134 6.71134 10.5337L2.22238 6.60842C2.13092 6.52874 2.05832 6.43395 2.00878 6.32951C1.95923 6.22507 1.93373 6.11304 1.93373 5.9999C1.93373 5.88676 1.95923 5.77474 2.00878 5.6703C2.05832 5.56586 2.13092 5.47106 2.22238 5.39139L6.71134 1.46605C6.8951 1.3058 6.99885 1.08801 6.99976 0.860574C7.00068 0.633141 6.89868 0.414703 6.71622 0.253316C6.53376 0.0919285 6.28577 0.000809732 6.02681 5.80712e-06C5.76785 -0.000798118 5.51914 0.0887805 5.33538 0.249031L0.856181 4.18294C0.307941 4.66503 -5.84112e-07 5.31854 -5.24545e-07 5.9999C-4.64978e-07 6.68127 0.307942 7.33477 0.856182 7.81687Z" fill="#D9D9D9"/></svg></span></button>',
  //   nextArrow:
  //     '<button type="button" class="slick-next"><span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6.14382 4.18313L1.66462 0.249227C1.48178 0.0895983 1.23445 0 0.976639 0C0.718831 0 0.471497 0.0895983 0.288658 0.249227C0.197192 0.328901 0.124594 0.423693 0.0750506 0.528134C0.0255075 0.632574 0 0.744597 0 0.857739C0 0.970881 0.0255075 1.0829 0.0750506 1.18734C0.124594 1.29179 0.197192 1.38658 0.288658 1.46625L4.77761 5.39159C4.86908 5.47126 4.94168 5.56605 4.99122 5.67049C5.04076 5.77493 5.06627 5.88696 5.06627 6.0001C5.06627 6.11324 5.04076 6.22526 4.99122 6.3297C4.94168 6.43414 4.86908 6.52894 4.77761 6.60861L0.288658 10.5339C0.1049 10.6942 0.00115143 10.912 0.000236386 11.1394C-0.000678661 11.3669 0.101315 11.5853 0.283779 11.7467C0.466243 11.9081 0.714231 11.9992 0.973189 12C1.23215 12.0008 1.48086 11.9112 1.66462 11.751L6.14382 7.81706C6.69206 7.33497 7 6.68146 7 6.0001C7 5.31873 6.69206 4.66523 6.14382 4.18313Z" fill="#989898"/></svg></span></button>',
  //   dots: false,
  //   // centerMode: true,
  //   loop: false,
  //   responsive: [
  //     {
  //       breakpoint: 1025,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 835,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });
});

$(document).ready(function () {
  $("#sliderOnlineWrap").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M0.856182 7.81687L5.33538 11.7508C5.51822 11.9104 5.76555 12 6.02336 12C6.28117 12 6.5285 11.9104 6.71134 11.7508C6.80281 11.6711 6.87541 11.5763 6.92495 11.4719C6.97449 11.3674 7 11.2554 7 11.1423C7 11.0291 6.97449 10.9171 6.92495 10.8127C6.87541 10.7082 6.80281 10.6134 6.71134 10.5337L2.22238 6.60842C2.13092 6.52874 2.05832 6.43395 2.00878 6.32951C1.95923 6.22507 1.93373 6.11304 1.93373 5.9999C1.93373 5.88676 1.95923 5.77474 2.00878 5.6703C2.05832 5.56586 2.13092 5.47106 2.22238 5.39139L6.71134 1.46605C6.8951 1.3058 6.99885 1.08801 6.99976 0.860574C7.00068 0.633141 6.89868 0.414703 6.71622 0.253316C6.53376 0.0919285 6.28577 0.000809732 6.02681 5.80712e-06C5.76785 -0.000798118 5.51914 0.0887805 5.33538 0.249031L0.856181 4.18294C0.307941 4.66503 -5.84112e-07 5.31854 -5.24545e-07 5.9999C-4.64978e-07 6.68127 0.307942 7.33477 0.856182 7.81687Z" fill="#D9D9D9"/></svg></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span><svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6.14382 4.18313L1.66462 0.249227C1.48178 0.0895983 1.23445 0 0.976639 0C0.718831 0 0.471497 0.0895983 0.288658 0.249227C0.197192 0.328901 0.124594 0.423693 0.0750506 0.528134C0.0255075 0.632574 0 0.744597 0 0.857739C0 0.970881 0.0255075 1.0829 0.0750506 1.18734C0.124594 1.29179 0.197192 1.38658 0.288658 1.46625L4.77761 5.39159C4.86908 5.47126 4.94168 5.56605 4.99122 5.67049C5.04076 5.77493 5.06627 5.88696 5.06627 6.0001C5.06627 6.11324 5.04076 6.22526 4.99122 6.3297C4.94168 6.43414 4.86908 6.52894 4.77761 6.60861L0.288658 10.5339C0.1049 10.6942 0.00115143 10.912 0.000236386 11.1394C-0.000678661 11.3669 0.101315 11.5853 0.283779 11.7467C0.466243 11.9081 0.714231 11.9992 0.973189 12C1.23215 12.0008 1.48086 11.9112 1.66462 11.751L6.14382 7.81706C6.69206 7.33497 7 6.68146 7 6.0001C7 5.31873 6.69206 4.66523 6.14382 4.18313Z" fill="#989898"/></svg></span></button>',
    dots: false,
    loop: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#sliderOnlineWrap").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var prevArrow = $(".slick-prev");
      var nextArrow = $(".slick-next");

      // Check if it's the first slide
      if (nextSlide === 0) {
        prevArrow.addClass("disabled");
      } else {
        prevArrow.removeClass("disabled");
      }

      // Check if it's the last slide
      if (nextSlide === slick.slideCount - 1) {
        nextArrow.addClass("disabled");
      } else {
        nextArrow.removeClass("disabled");
      }
    }
  );
});

$(document).ready(function () {
  $(".sliders").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "15%",
    speed: 1500,
    autoplay: false,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

// Profile LightBox Start
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
  showLightBox((index += n));
}
function prevImage() {
  slideImage(-1);
}
function nextImage() {
  slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);
// Profile LightBox End

$(document).ready(function () {
  $(".editInputButton").click(function () {
    $(".form-control").prop("disabled", function (i, val) {
      return !val;
    });
    $(".form-select").prop("disabled", function (i, val) {
      return !val;
    });
    // $(".chosen-container-multi").removeClass("chosen-disabled");
  });

  // Photo Upload Input Field
  $(".upPhoto").click(function () {
    $("#fileInput1").click();
  });
});

// Multi Select Options
$(".multi-select").chosen({
  // placeholder_text_multiple: "Your New Placeholder Text"
});

// Emoji Button
const button = document.querySelector("#emoji-button");

const picker = new EmojiButton();

button.addEventListener("click", () => {
  picker.togglePicker(button);
});

picker.on("emoji", (emoji) => {
  document.querySelector("#msg-input").value += emoji;
});

