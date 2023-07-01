ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../../assets/images/icons/map-pin.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
});

// ------------------------------------------------
// function init() {
//     var map = new ymaps.Map("map", {
//             center: [55.76, 37.64],
//             zoom: 1
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),

//     // Создаем геообъект с типом геометрии "Точка".
//         myGeoObject = new ymaps.GeoObject({
//             // Описание геометрии.
//             geometry: {
//                 type: "Point",
//                 coordinates: [55.8, 37.8]
//             },
//             // Свойства.
//             properties: {
//                 // Контент метки.
//                 iconContent: 'Я тащусь',
//                 hintContent: 'Ну давай уже тащи'
//             }
//         }, {
//             // Опции.
//             // Иконка метки будет растягиваться под размер ее содержимого.
//             preset: 'islands#blackStretchyIcon',
//             // Метку можно перемещать.
//             draggable: true
//         }),
//         myPieChart = new ymaps.Placemark([
//             55.847, 37.6
//         ], {
//             // Данные для построения диаграммы.
//             data: [
//                 {weight: 8, color: '#0E4779'},
//                 {weight: 6, color: '#1E98FF'},
//                 {weight: 4, color: '#82CDFF'}
//             ],
//             iconCaption: "Диаграмма"
//         }, {
//             // Зададим произвольный макет метки.
//             iconLayout: 'default#pieChart',
//             // Радиус диаграммы в пикселях.
//             iconPieChartRadius: 30,
//             // Радиус центральной части макета.
//             iconPieChartCoreRadius: 10,
//             // Стиль заливки центральной части.
//             iconPieChartCoreFillStyle: '#ffffff',
//             // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
//             iconPieChartStrokeStyle: '#ffffff',
//             // Ширина линий-разделителей секторов и внешней обводки диаграммы.
//             iconPieChartStrokeWidth: 3,
//             // Максимальная ширина подписи метки.
//             iconPieChartCaptionMaxWidth: 200
//         });

//     map.geoObjects
//         .add(myGeoObject)
//         .add(myPieChart)
//         .add(new ymaps.Placemark([55.684758, 37.738521], {
//             balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
//         }, {
//             preset: 'islands#icon',
//             iconColor: '#0095b6'
//         }))
//         .add(new ymaps.Placemark([55.833436, 37.715175], {
//             balloonContent: '<strong>серобуромалиновый</strong> цвет'
//         }, {
//             preset: 'islands#dotIcon',
//             iconColor: '#735184'
//         }))
//         .add(new ymaps.Placemark([55.687086, 37.529789], {
//             balloonContent: 'цвет <strong>влюбленной жабы</strong>'
//         }, {
//             preset: 'islands#circleIcon',
//             iconColor: '#3caa3c'
//         }))
//         .add(new ymaps.Placemark([55.782392, 37.614924], {
//             balloonContent: 'цвет <strong>детской неожиданности</strong>'
//         }, {
//             preset: 'islands#circleDotIcon',
//             iconColor: 'yellow'
//         }))
//         .add(new ymaps.Placemark([55.642063, 37.656123], {
//             balloonContent: 'цвет <strong>красный</strong>'
//         }, {
//             preset: 'islands#redSportIcon'
//         }))
//         .add(new ymaps.Placemark([55.826479, 37.487208], {
//             balloonContent: 'цвет <strong>фэйсбука</strong>'
//         }, {
//             preset: 'islands#governmentCircleIcon',
//             iconColor: '#3b5998'
//         }))
//         .add(new ymaps.Placemark([55.694843, 37.435023], {
//             balloonContent: 'цвет <strong>носика Гены</strong>',
//             iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//             preset: 'islands#greenDotIconWithCaption'
//         }))
//         .add(new ymaps.Placemark([77.47783435676875,-42.433340580449816], {
//             balloonContent: 'цвет <strong>голубой</strong>',
//             iconCaption: 'Очень длиннный, но невероятно интересный текст'
//         }, {
//             preset: 'islands#blueCircleDotIconWithCaption',
//             iconCaptionMaxWidth: '50'
//         }));
//     console.log()


// }
