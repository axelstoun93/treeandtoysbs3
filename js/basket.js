(function () {


    addBasket();

    function addBasket() {
        var clickStyle = 'dropdown-add';
        var basketCount = $('.cart-count');
        var click  = 0;
        $('.product-dropdown').click(function (e) {
           ++click;
            basketCount.each(function (e) {
               $(this).html(click);
            });
           $(this).addClass(clickStyle);
        })
    }
})();