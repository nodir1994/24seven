$(document).ready(function () {
  $('.slider-media').slick({
    draggable: true,
    accessibility: false,
    centerMode: true,
    variableWidth: true,
    // slidesToShow: 4.8,
    // slidesToScroll: 4.8,
    arrows: true,
    // dots: true,
    swipeToSlide: true,
    infinite: true,
    prevArrow: `<button type="button" class="slick-prev">
                   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_1488_31462)">
                      <rect x="40" y="40" width="40" height="40" rx="20" transform="rotate(-180 40 40)" fill="#101011" fill-opacity="0.7"/>
                      <rect x="39.5" y="39.5" width="39" height="39" rx="19.5" transform="rotate(-180 39.5 39.5)" stroke="white" stroke-opacity="0.2"/>
                      <path d="M22.3334 15.3334L17.6667 20L22.3334 24.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <filter id="filter0_b_1488_31462" x="-24" y="-24" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1488_31462"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1488_31462" result="shape"/>
                      </filter>
                      </defs>
                    </svg>

                </button>`,
    nextArrow: `<button type="button" class="slick-next">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_1488_31461)">
                        <rect width="40" height="40" rx="20" fill="#101011" fill-opacity="0.7"/>
                        <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white" stroke-opacity="0.2"/>
                        <path d="M17.6667 24.6666L22.3334 20L17.6667 15.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_b_1488_31461" x="-24" y="-24" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1488_31461"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1488_31461" result="shape"/>
                        </filter>
                        </defs>
                      </svg>

                </button>`,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
        }
      }

    ]
  });

});
