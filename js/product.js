(function () {
productCarousel();
function productCarousel() {


    $(".product-zoom").elevateZoom({tint:true, tintColour:'#F90', tintOpacity:0.4});
    $('.block a img').mouseover(function (e) {
        let fullImagesBlock = $('.product-images img');
        $(this).attr('src');
        fullImagesBlock.attr('src',$(this).attr('src'));
        fullImagesBlock.data('zoom-image',$(this).attr('src'));
        $(".product-zoom").elevateZoom({tint:true, tintColour:'#F90', tintOpacity:0.4});
    });



    $('.product-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });




    $(".images-modal").on("click", function(e) {
        e.preventDefault();
        let image = $(this).children()[0].src;
        $('#image-preview').attr('src', image);
        $('.images-full').attr('href',image);
        $('#image').modal('show');

    });




























}
startReviews();
function startReviews() {
    $('#reviews-select').barrating({
        theme: 'fontawesome-stars'
    });
}

reviewsLogic();
function reviewsLogic() {

    let blockBottom = $('.review-bottom');
    let bottomShow = $('#show-review-form');
    let formReviews = $('.review-form');
    let bottomClose =  $('#close-review-form');
    let bottomSend =  $('#send-review-form');

    bottomShow.click(function (e) {
        e.preventDefault();
        blockBottom.hide();
        formReviews.show();
    });

    bottomClose.click(function (e) {
        e.preventDefault();
        formReviews.hide();
        blockBottom.show();
    });
    /*
    bottomSend.click(function (e) {
        e.preventDefault();
        formReviews.trigger('reset');
        formReviews.hide();
        blockBottom.show();
    });
    */


    $("#review-form").validate({
        rules: {
            name: {
                required: true,
                maxlength: 120
            },
            email: {
                email: true
            },
            rating:
                {
                    required: true
                },
            text:{
                required: true,
                minlength:30}
        },
        messages: {
            name: {
                required: "Укажите никнейм",
                minlength: "Ваш никнейм должен содержать не более 120 символов"
            },
            email: "Укажите корректный email адрес",
            rating: "Поставьте оценку товару",
            text: {
                required: "Заполните поле комментарий",
                minlength: "Ваш комментарий должен содержать минимум 30 символов"
            }

        },

        submitHandler: function (form) {
            form.submit();
        }
    });

}




buyOneClick();
function buyOneClick() {
    $(document).ready(function ()
    {
        let buyModel = $('#buyOneClick');
        let branchBlock = $('.branch-block');

        let branch = $('#branch');

        $("#buyButtonOne").click(function(e)
        {
            buyModel.modal('show')
        });


        $('#optionsRadios2').click(function () {
            branchBlock.hide();
            branch.attr('name', '')
        });

        $('#optionsRadios1').click(function () {
            branchBlock.show();
            branch.attr('name', 'branch')
        });

        $("#phone").mask("+ 0 (000) 000-00-00");

        $("#buy-one-form").validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {
                phone: {
                    required: "укажете ваш номер телефона",
                }
            },

            submitHandler: function (form) {
                form.submit();
            }
        });

    });




}

})();



