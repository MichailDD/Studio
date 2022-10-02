"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/sliders.js":
/*!*********************************!*\
  !*** ./src/js/files/sliders.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _scss_base_swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/base/swiper.scss */ "./src/scss/base/swiper.scss");
/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }

/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили

// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
			observer: true,
			observeParents: true,
			slidesPerView:1,
			spaceBetween:0,
			autoHeight: true,
			speed: 800,
			// loop:true,
			centeredSlides: false,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		
	};
	if (document.querySelector('.swiper__one-news')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper__one-news', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
			observer: true,
			observeParents: true,
			slidesPerView:4,
			spaceBetween:0,
			autoHeight: true,
			speed: 800,
			//  loop:true,
			centeredSlides: false,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		
	};
	if (document.querySelector('.swiper-aboute')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper-aboute', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
			observer: true,
			observeParents: true,
			slidesPerView:2,
			spaceBetween:0,
			autoHeight: true,
			speed: 800,
			//  loop:true,
			centeredSlides: true,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
		
	};

	

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b1a617a06fb98be27b19")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjQ0N2RlOGU3ZTAwNzc1Y2Y4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDMkM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLE1BQU0sOENBQU0sY0FBYztBQUMxQjtBQUNBO0FBQ0EsYUFBYSw4Q0FBVSxDQUFDLDhDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsTUFBTSw4Q0FBTSx3QkFBd0I7QUFDcEM7QUFDQTtBQUNBLGFBQWEsOENBQVUsQ0FBQyw4Q0FBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLE1BQU0sOENBQU0scUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQSxhQUFhLDhDQUFVLENBQUMsOENBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDdFREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0LvQsNC50LTQtdGAIFN3aXBlciDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyDQn9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L/QvtC00LrQu9GO0YfQsNC10Lwg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsCwg0YPQutCw0LfRi9Cy0LDRjyDQuNGFINCyIHt9INGH0LXRgNC10Lcg0LfQsNC/0Y/RgtGD0Y5cclxuLy8g0J/RgNC40LzQtdGAOiB7IE5hdmlnYXRpb24sIEF1dG9wbGF5IH1cclxuaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuLypcclxu0J7RgdC90L7QstC90LjRi9C1INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwOlxyXG5OYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheSwgXHJcbkVmZmVjdEZhZGUsIExhenksIE1hbmlwdWxhdGlvblxyXG7Qn9C+0LTRgNC+0LHQvdC10LUg0YHQvNC+0YLRgNC4IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG4qL1xyXG5cclxuLy8g0KHRgtC40LvQuCBTd2lwZXJcclxuLy8g0JHQsNC30L7QstGL0LUg0YHRgtC40LvQuFxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2Jhc2Uvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtC70L3Ri9C5INC90LDQsdC+0YAg0YHRgtC40LvQtdC5INC40Lcgc2Nzcy9saWJzL3N3aXBlci5zY3NzXHJcbi8vIGltcG9ydCBcIi4uLy4uL3Njc3MvbGlicy9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LvQvdGL0Lkg0L3QsNCx0L7RgCDRgdGC0LjQu9C10Lkg0LjQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuXHJcbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LvQsNC50LTQtdGA0L7QslxyXG5mdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuXHQvLyDQn9C10YDQtdGH0LXQvdGMINGB0LvQsNC50LTQtdGA0L7QslxyXG5cdC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0LXRgdGC0Ywg0LvQuCDRgdC70LDQudC00LXRgCDQvdCwINGB0YLRgNC+0L3QuNGG0LVcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpKSB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0Ly8g0KHQvtC30LTQsNC10Lwg0YHQu9Cw0LnQtNC10YBcclxuXHRcdG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHRcdFx0bW9kdWxlczogW05hdmlnYXRpb24sUGFnaW5hdGlvbl0sXHJcblx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzoxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46MCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHRcdFx0Ly8gbG9vcDp0cnVlLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblxyXG5cdFx0XHQvL3RvdWNoUmF0aW86IDAsXHJcblx0XHRcdC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcblx0XHRcdC8vbG9vcDogdHJ1ZSxcclxuXHRcdFx0Ly9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0Ly9sYXp5OiB0cnVlLFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0Ly8g0K3RhNGE0LXQutGC0YtcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDMwMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0Ly8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcblx0XHRcdFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG5cdFx0XHQvKlxyXG5cdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHRcdFx0XHRkcmFnZ2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHQvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuXHRcdFx0LypcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjY4OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cdFx0XHQvLyDQodC+0LHRi9GC0LjRj1xyXG5cdFx0XHRvbjoge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9O1xyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyX19vbmUtbmV3cycpKSB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0Ly8g0KHQvtC30LTQsNC10Lwg0YHQu9Cw0LnQtNC10YBcclxuXHRcdG5ldyBTd2lwZXIoJy5zd2lwZXJfX29uZS1uZXdzJywgeyAvLyDQo9C60LDQt9GL0LLQsNC10Lwg0YHQutC70LDRgdGBINC90YPQttC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0YHQu9GD0YfQsNGPXHJcblx0XHRcdG1vZHVsZXM6IFtOYXZpZ2F0aW9uLFBhZ2luYXRpb25dLFxyXG5cdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6NCxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOjAsXHJcblx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdHNwZWVkOiA4MDAsXHJcblx0XHRcdC8vICBsb29wOnRydWUsXHJcblx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHJcblx0XHRcdC8vdG91Y2hSYXRpbzogMCxcclxuXHRcdFx0Ly9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHQvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHQvL2xhenk6IHRydWUsXHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHQvLyDQrdGE0YTQtdC60YLRi1xyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHQvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuXHRcdFx0XHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g0KHQutGA0L7Qu9C70LHQsNGAXHJcblx0XHRcdC8qXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG5cdFx0XHQvKlxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblx0XHRcdC8vINCh0L7QsdGL0YLQuNGPXHJcblx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH07XHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItYWJvdXRlJykpIHsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcblx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdC70LDQudC00LXRgFxyXG5cdFx0bmV3IFN3aXBlcignLnN3aXBlci1hYm91dGUnLCB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHRcdFx0bW9kdWxlczogW05hdmlnYXRpb24sUGFnaW5hdGlvbl0sXHJcblx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzoyLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46MCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHRcdFx0Ly8gIGxvb3A6dHJ1ZSxcclxuXHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblxyXG5cdFx0XHQvL3RvdWNoUmF0aW86IDAsXHJcblx0XHRcdC8vc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcblx0XHRcdC8vbG9vcDogdHJ1ZSxcclxuXHRcdFx0Ly9wcmVsb2FkSW1hZ2VzOiBmYWxzZSxcclxuXHRcdFx0Ly9sYXp5OiB0cnVlLFxyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0Ly8g0K3RhNGE0LXQutGC0YtcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDMwMDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0Ly8g0J/QsNCz0LjQvdCw0YbQuNGPXHJcblx0XHRcdFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vINCh0LrRgNC+0LvQu9Cx0LDRgFxyXG5cdFx0XHQvKlxyXG5cdFx0XHRzY3JvbGxiYXI6IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuXHRcdFx0XHRkcmFnZ2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHQvLyDQmtC90L7Qv9C60LggXCLQstC70LXQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vINCR0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuXHRcdFx0LypcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjY4OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cdFx0XHQvLyDQodC+0LHRi9GC0LjRj1xyXG5cdFx0XHRvbjoge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9O1xyXG5cclxuXHRcclxuXHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtGH0LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHRsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG5cdGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEJhciA9IHNsaWRlclNjcm9sbEl0ZW0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsID0gbmV3IFN3aXBlcihzbGlkZXJTY3JvbGxJdGVtLCB7XHJcblx0XHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdFx0ZWw6IHNsaWRlclNjcm9sbEJhcixcclxuXHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHNuYXBPblJlbGVhc2U6IGZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtb3VzZXdoZWVsOiB7XHJcblx0XHRcdFx0XHRyZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQu9Cw0LnQtNC10YDQvtCyXHJcblx0aW5pdFNsaWRlcnMoKTtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfQtSDRgdC70LDQudC00LXRgNCwICjQv9C+INC60LvQsNGB0YHRgyBzd2lwZXJfc2Nyb2xsKVxyXG5cdC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjFhNjE3YTA2ZmI5OGJlMjdiMTlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=