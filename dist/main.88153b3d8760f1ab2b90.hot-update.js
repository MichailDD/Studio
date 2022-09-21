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
			slidesPerView: 4,
			spaceBetween: 48,
			autoHeight: true,
			speed: 800,
			loop:true,

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
/******/ 	__webpack_require__.h = () => ("1c7e911204085da979ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ODE1M2IzZDg3NjBmMWFiMmI5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDMkM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLE1BQU0sOENBQU0sY0FBYztBQUMxQjtBQUNBO0FBQ0EsYUFBYSw4Q0FBVSxDQUFDLDhDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RDtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDL0lEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2ZpbGVzL3NsaWRlcnMuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0L/QviDRgNCw0LHQvtGC0LUg0LIg0YjQsNCx0LvQvtC90LU6IFxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3QuNC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuXHJcbi8vINCf0L7QtNC60LvRjtGH0LDQtdC8INGB0LvQsNC50LTQtdGAIFN3aXBlciDQuNC3IG5vZGVfbW9kdWxlc1xyXG4vLyDQn9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L/QvtC00LrQu9GO0YfQsNC10Lwg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsCwg0YPQutCw0LfRi9Cy0LDRjyDQuNGFINCyIHt9INGH0LXRgNC10Lcg0LfQsNC/0Y/RgtGD0Y5cclxuLy8g0J/RgNC40LzQtdGAOiB7IE5hdmlnYXRpb24sIEF1dG9wbGF5IH1cclxuaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuLypcclxu0J7RgdC90L7QstC90LjRi9C1INC80L7QtNGD0LvQuCDRgdC70LDQudC00LXRgNCwOlxyXG5OYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheSwgXHJcbkVmZmVjdEZhZGUsIExhenksIE1hbmlwdWxhdGlvblxyXG7Qn9C+0LTRgNC+0LHQvdC10LUg0YHQvNC+0YLRgNC4IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG4qL1xyXG5cclxuLy8g0KHRgtC40LvQuCBTd2lwZXJcclxuLy8g0JHQsNC30L7QstGL0LUg0YHRgtC40LvQuFxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2Jhc2Uvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtC70L3Ri9C5INC90LDQsdC+0YAg0YHRgtC40LvQtdC5INC40Lcgc2Nzcy9saWJzL3N3aXBlci5zY3NzXHJcbi8vIGltcG9ydCBcIi4uLy4uL3Njc3MvbGlicy9zd2lwZXIuc2Nzc1wiO1xyXG4vLyDQn9C+0LvQvdGL0Lkg0L3QsNCx0L7RgCDRgdGC0LjQu9C10Lkg0LjQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuXHJcbi8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0LvQsNC50LTQtdGA0L7QslxyXG5mdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuXHQvLyDQn9C10YDQtdGH0LXQvdGMINGB0LvQsNC50LTQtdGA0L7QslxyXG5cdC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0LXRgdGC0Ywg0LvQuCDRgdC70LDQudC00LXRgCDQvdCwINGB0YLRgNC+0L3QuNGG0LVcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpKSB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0Ly8g0KHQvtC30LTQsNC10Lwg0YHQu9Cw0LnQtNC10YBcclxuXHRcdG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7IC8vINCj0LrQsNC30YvQstCw0LXQvCDRgdC60LvQsNGB0YEg0L3Rg9C20L3QvtCz0L4g0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQn9C+0LTQutC70Y7Rh9Cw0LXQvCDQvNC+0LTRg9C70Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC70YPRh9Cw0Y9cclxuXHRcdFx0bW9kdWxlczogW05hdmlnYXRpb24sUGFnaW5hdGlvbl0sXHJcblx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiA0OCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cclxuXHRcdFx0Ly90b3VjaFJhdGlvOiAwLFxyXG5cdFx0XHQvL3NpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG5cdFx0XHQvL2xvb3A6IHRydWUsXHJcblx0XHRcdC8vcHJlbG9hZEltYWdlczogZmFsc2UsXHJcblx0XHRcdC8vbGF6eTogdHJ1ZSxcclxuXHJcblx0XHRcdC8qXHJcblx0XHRcdC8vINCt0YTRhNC10LrRgtGLXHJcblx0XHRcdGVmZmVjdDogJ2ZhZGUnLFxyXG5cdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ki9cclxuXHJcblx0XHRcdC8vINCf0LDQs9C40L3QsNGG0LjRj1xyXG5cdFx0XHRcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDQodC60YDQvtC70LvQsdCw0YBcclxuXHRcdFx0LypcclxuXHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0ZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcblx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0Ly8g0JrQvdC+0L/QutC4IFwi0LLQu9C10LLQvi/QstC/0YDQsNCy0L5cIlxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0cHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcblx0XHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDQkdGA0LXQudC60L/QvtC40L3RgtGLXHJcblx0XHRcdC8qXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTI2ODoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ki9cclxuXHRcdFx0Ly8g0KHQvtCx0YvRgtC40Y9cclxuXHRcdFx0b246IHtcclxuXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG4vLyDQodC60YDQvtC70Lsg0L3QsCDQsdCw0LfQtSDRgdC70LDQudC00LXRgNCwICjQv9C+INC60LvQsNGB0YHRgyBzd2lwZXJfc2Nyb2xsINC00LvRjyDQvtCx0L7Qu9C+0YfQutC4INGB0LvQsNC50LTQtdGA0LApXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzU2Nyb2xsKCkge1xyXG5cdGxldCBzbGlkZXJTY3JvbGxJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXJfc2Nyb2xsJyk7XHJcblx0aWYgKHNsaWRlclNjcm9sbEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsSXRlbSA9IHNsaWRlclNjcm9sbEl0ZW1zW2luZGV4XTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsQmFyID0gc2xpZGVyU2Nyb2xsSXRlbS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLXNjcm9sbGJhcicpO1xyXG5cdFx0XHRjb25zdCBzbGlkZXJTY3JvbGwgPSBuZXcgU3dpcGVyKHNsaWRlclNjcm9sbEl0ZW0sIHtcclxuXHRcdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdGZyZWVNb2RlOiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2Nyb2xsYmFyOiB7XHJcblx0XHRcdFx0XHRlbDogc2xpZGVyU2Nyb2xsQmFyLFxyXG5cdFx0XHRcdFx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdFx0c25hcE9uUmVsZWFzZTogZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1vdXNld2hlZWw6IHtcclxuXHRcdFx0XHRcdHJlbGVhc2VPbkVkZ2VzOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzbGlkZXJTY3JvbGwuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC70LDQudC00LXRgNC+0LJcclxuXHRpbml0U2xpZGVycygpO1xyXG5cdC8vINCX0LDQv9GD0YHQuiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDRgdC60YDQvtC70LvQsCDQvdCwINCx0LDQt9C1INGB0LvQsNC50LTQtdGA0LAgKNC/0L4g0LrQu9Cw0YHRgdGDIHN3aXBlcl9zY3JvbGwpXHJcblx0Ly9pbml0U2xpZGVyc1Njcm9sbCgpO1xyXG59KTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYzdlOTExMjA0MDg1ZGE5NzliYVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==