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
			slidesPerView: 3,
			spaceBetween:0,
			autoHeight: true,
			speed: 800,
			loop:true,
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
	}
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
/******/ 	__webpack_require__.h = () => ("7f2b7039798a855f4494")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMGQyOGY2ODdlOWIwN2UxZjIxNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDMkM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLE1BQU0sOENBQU0sY0FBYztBQUMxQjtBQUNBO0FBQ0EsYUFBYSw4Q0FBVSxDQUFDLDhDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQSw0QkFBNEIsOENBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUNoSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQv9C+INGA0LDQsdC+0YLQtSDQsiDRiNCw0LHQu9C+0L3QtTogXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDRgdC70LDQudC00LXRgNCwOiBodHRwczovL3N3aXBlcmpzLmNvbS9cclxu0KHQvdC40L/Qv9C10YIoSFRNTCk6IHN3aXBlclxyXG4qL1xyXG5cclxuLy8g0J/QvtC00LrQu9GO0YfQsNC10Lwg0YHQu9Cw0LnQtNC10YAgU3dpcGVyINC40Lcgbm9kZV9tb2R1bGVzXHJcbi8vINCf0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDQv9C+0LTQutC70Y7Rh9Cw0LXQvCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwLCDRg9C60LDQt9GL0LLQsNGPINC40YUg0LIge30g0YfQtdGA0LXQtyDQt9Cw0L/Rj9GC0YPRjlxyXG4vLyDQn9GA0LjQvNC10YA6IHsgTmF2aWdhdGlvbiwgQXV0b3BsYXkgfVxyXG5pbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG4vKlxyXG7QntGB0L3QvtCy0L3QuNGL0LUg0LzQvtC00YPQu9C4INGB0LvQsNC50LTQtdGA0LA6XHJcbk5hdmlnYXRpb24sIFBhZ2luYXRpb24sIEF1dG9wbGF5LCBcclxuRWZmZWN0RmFkZSwgTGF6eSwgTWFuaXB1bGF0aW9uXHJcbtCf0L7QtNGA0L7QsdC90LXQtSDRgdC80L7RgtGA0LggaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbiovXHJcblxyXG4vLyDQodGC0LjQu9C4IFN3aXBlclxyXG4vLyDQkdCw0LfQvtCy0YvQtSDRgdGC0LjQu9C4XHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvYmFzZS9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LvQvdGL0Lkg0L3QsNCx0L7RgCDRgdGC0LjQu9C10Lkg0LjQtyBzY3NzL2xpYnMvc3dpcGVyLnNjc3NcclxuLy8gaW1wb3J0IFwiLi4vLi4vc2Nzcy9saWJzL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7Qu9C90YvQuSDQvdCw0LHQvtGAINGB0YLQuNC70LXQuSDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5cclxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQvtCyXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG5cdC8vINCf0LXRgNC10YfQtdC90Ywg0YHQu9Cw0LnQtNC10YDQvtCyXHJcblx0Ly8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQtdGB0YLRjCDQu9C4INGB0LvQsNC50LTQtdGAINC90LAg0YHRgtGA0L7QvdC40YbQtVxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJykpIHsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcblx0XHQvLyDQodC+0LfQtNCw0LXQvCDRgdC70LDQudC00LXRgFxyXG5cdFx0bmV3IFN3aXBlcignLnN3aXBlcicsIHsgLy8g0KPQutCw0LfRi9Cy0LDQtdC8INGB0LrQu9Cw0YHRgSDQvdGD0LbQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcblx0XHRcdC8vINCf0L7QtNC60LvRjtGH0LDQtdC8INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwXHJcblx0XHRcdC8vINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LvRg9GH0LDRj1xyXG5cdFx0XHRtb2R1bGVzOiBbTmF2aWdhdGlvbixQYWdpbmF0aW9uXSxcclxuXHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46MCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHJcblx0XHRcdC8vdG91Y2hSYXRpbzogMCxcclxuXHRcdFx0Ly9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHQvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHQvL2xhenk6IHRydWUsXHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHQvLyDQrdGE0YTQtdC60YLRi1xyXG5cdFx0XHRlZmZlY3Q6ICdmYWRlJyxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHQvLyDQn9Cw0LPQuNC90LDRhtC40Y9cclxuXHRcdFx0XHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g0KHQutGA0L7Qu9C70LHQsNGAXHJcblx0XHRcdC8qXHJcblx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdC8vINCa0L3QvtC/0LrQuCBcItCy0LvQtdCy0L4v0LLQv9GA0LDQstC+XCJcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdFx0XHRcdG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g0JHRgNC10LnQutC/0L7QuNC90YLRi1xyXG5cdFx0XHQvKlxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblx0XHRcdC8vINCh0L7QsdGL0YLQuNGPXHJcblx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30LUg0YHQu9Cw0LnQtNC10YDQsCAo0L/QviDQutC70LDRgdGB0YMgc3dpcGVyX3Njcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtGH0LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHRsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG5cdGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEJhciA9IHNsaWRlclNjcm9sbEl0ZW0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsID0gbmV3IFN3aXBlcihzbGlkZXJTY3JvbGxJdGVtLCB7XHJcblx0XHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdFx0ZWw6IHNsaWRlclNjcm9sbEJhcixcclxuXHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHNuYXBPblJlbGVhc2U6IGZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtb3VzZXdoZWVsOiB7XHJcblx0XHRcdFx0XHRyZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQu9Cw0LnQtNC10YDQvtCyXHJcblx0aW5pdFNsaWRlcnMoKTtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfQtSDRgdC70LDQudC00LXRgNCwICjQv9C+INC60LvQsNGB0YHRgyBzd2lwZXJfc2Nyb2xsKVxyXG5cdC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2YyYjcwMzk3OThhODU1ZjQ0OTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=