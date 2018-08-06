ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.91815363876071,30.30557799999997],
            zoom: 12
        }),

        myPlacemark1 = new ymaps.Placemark([60.033993064043656,30.4205845], {
            hintContent: 'Гражданский пр., 119, ТК "Рубикон"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark2 = new ymaps.Placemark([60.061457063989515,30.47463649999999], {
            hintContent: 'пос. Новое Девяткино,101, ТК "Призма"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark3 = new ymaps.Placemark([59.82884406432647,30.316110499999947], {
            hintContent: 'Пулковское шоссе, 17, Гипермаркет "ОКЕЙ"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark4 = new ymaps.Placemark([59.83220406433512,30.37580349999998], {
            hintContent: 'Балканская пл., 5, ТРК "Балкания NOVA", 1 эт.'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark5 = new ymaps.Placemark([59.82854108955326,30.35754059268185], {
            hintContent: 'ул. Звездная, 1, ТРК "Континент"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark6 = new ymaps.Placemark([59.930592564183165,30.432056499999916], {
            hintContent: 'Заневский пр., 65, Гипермаркет "ОКЕЙ"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark7 = new ymaps.Placemark([59.93019556418214,30.420476999999995], {
            hintContent: 'Заневский пр., 37'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark8 = new ymaps.Placemark([59.87009056427684,30.37938799999999], {
            hintContent: 'ул. Белы Куна, 3, ТК "Международный"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark9 = new ymaps.Placemark([59.85121356429057,30.350138999999984], {
            hintContent: 'пр. Космонавтов, 45, Гипермаркет "ОКЕЙ"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark10 = new ymaps.Placemark([60.033733064042984,30.367700999999986], {
            hintContent: 'пр. Культуры, 1, ТРК "Родео Драйв"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark11 = new ymaps.Placemark([60.00028556411295,30.271949499999987], {
            hintContent: 'Богатырский пр., 13, Гипермаркет "ОКЕЙ"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark12 = new ymaps.Placemark([59.99076406411968,30.257764999999967], {
            hintContent: 'Торфяная дорога, 7/1, ТРК "Гулливер"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark13 = new ymaps.Placemark([59.99089906411999,30.20577950000002], {
            hintContent: 'ул. Савушкина, 141, ТРК "Меркурий"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark14 = new ymaps.Placemark([59.881434564243705,30.315382999999958], {
            hintContent: 'Московский пр., 137, Гипермаркет "ОКЕЙ"'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark15 = new ymaps.Placemark([59.873342064254075,29.9744005], {
            hintContent: 'ул. Нахимова, 5, («Азбука вкуса»)'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });
        
        myPlacemark16 = new ymaps.Placemark([59.85868806427866,30.247937499999974], {
            hintContent: 'пр. Стачек, 99, (ТРК «Континент»)'
        }, {
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [29, 39],
            iconImageOffset: [-3, -42]
        });

    // Добавляем все метки на карту.
    myMap.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8)
        .add(myPlacemark9)
        .add(myPlacemark10)
        .add(myPlacemark11)
        .add(myPlacemark12)
        .add(myPlacemark13)
        .add(myPlacemark14)
        .add(myPlacemark15)
        .add(myPlacemark16);
}
