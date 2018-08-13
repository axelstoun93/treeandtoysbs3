(function () {    categorySwipe();    modalLogic();    function categorySwipe() {        var divImages = $('.images-round');        var images;        divImages.mouseover(function(e) {             images = $(this).find('img')[0];             $(images).attr("src",$(images).attr("data-img-hover"));            }).mouseout(function() {            images = $(this).find('img')[0];            $(images).attr("src",$(images).attr("data-img-out"));        });    }    function modalLogic() {        $(document).ready(function () {            var loginModla = $('#loginModel');            var registerModal = $('#registerModel');            var restoringModal = $('#fagotPassword');            $(".registerButton").click(function(e){                e.preventDefault();                loginModla.modal('hide');                registerModal.modal('show');            });            $(".loginButton").click(function(e){                e.preventDefault();                registerModal.modal('hide');                restoringModal.modal('hide');                loginModla.modal('show');            });            $(".forgot-password").click(function(e){                e.preventDefault();                loginModla.modal('hide');                restoringModal.modal('show');            });        });    }    resetFormCatalog();    function  resetFormCatalog() {        $('#reset-filter').click(function (e) {            e.preventDefault();            $('.form-filter').trigger('reset');        })    }    TwoBlockSwipe();    function TwoBlockSwipe() {        let blockOneButton = $('.icon-block-one');        let blockTwoButton = $('.icon-block-two');        let imagesOne = $('.icon-one');        let imagesTwo = $('.icon-two');        let rowOne = $('.row-one');        let rowTwo = $('.row-two');        let images = '';        blockOneButton.click(function(e) {            images = $(this).find('img')[0];            rowTwo.hide();            rowOne.show();            imagesOne.attr("src",$(imagesOne).attr("data-img-hover"));            imagesTwo.attr("src",$(imagesTwo).attr("data-img-out"));        });        blockTwoButton.click(function(e) {            rowOne.hide();            rowTwo.show();            imagesTwo.attr("src",$(imagesTwo).attr("data-img-hover"));            imagesOne.attr("src",$(imagesOne).attr("data-img-out"));        });    }})();