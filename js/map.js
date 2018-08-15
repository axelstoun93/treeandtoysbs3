(function () {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.835634670559415,30.426841619049007],
                zoom: 12
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.


            myPlacemark = new ymaps.Placemark([59.83555636707388,30.426884534393068], {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Олеко Дундича д.40 <br> Пн-Пт с 10 до 21 <br> + 7(981)-149-66-92'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/icon/icon-32x32-grey.png',
                // Размеры метки.
                iconImageSize: [32, 32],


            }),

            myPlacemarkWithContent = new ymaps.Placemark([59.82775137111326,30.327023271163846], {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Пулковское шоссе д.20 кор.4 <br> Пн-Пт с 10 до 21 <br> + 7(981)-149-66-92'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/icon/icon-32x32-grey.png',
                // Размеры метки.
                iconImageSize: [32, 32],
       

            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });
})();