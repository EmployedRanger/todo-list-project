/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/subDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/creation-segments.js":
/*!**********************************!*\
  !*** ./src/creation-segments.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "createFormProject": () => (/* binding */ createFormProject),
/* harmony export */   "createProjectCreation": () => (/* binding */ createProjectCreation),
/* harmony export */   "createScheduledProject": () => (/* binding */ createScheduledProject)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */





const listProjects = [];
const userProjects = [];

class Task {
  constructor(name, description, timeline = 'No date') {
    this.name = name;
    this.description = description;
    this.timeline = timeline;
  }

  setName(name) {
    console.log('setName in tasks was used');
    this.name = name;
  }

  setDescription(description) {
    console.log('setDescription in tasks was used');
    this.description = description;
  }
}

function createFormProject() {
  console.log('createFormProject ran')
  const addContainer = document.createElement('div')
  addContainer.classList.add('project-form-container')
  const titleContainer = document.createElement('input')
  titleContainer.setAttribute('id', 'project-title-input')
  titleContainer.setAttribute('placeholder', 'Project Title')
  titleContainer.setAttribute('type', 'text')

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('form-container')

  const submitButton = document.createElement('button')
  submitButton.classList.add('submit-new-project')
  submitButton.classList.add('form')
  submitButton.textContent = 'Add Project'
  buttonContainer.appendChild(submitButton)

  const cancelButton = document.createElement('button')
  cancelButton.classList.add('cancel-form')
  cancelButton.classList.add('form')
  cancelButton.textContent = 'Cancel'
  cancelButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.closeProjectFormPopup)();
  })
  buttonContainer.appendChild(cancelButton)

  addContainer.appendChild(titleContainer)
  addContainer.appendChild(buttonContainer)
  return addContainer;
}

function deleteProject(projectElement) {
  projectElement.remove();
  console.log(listProjects[0])
  // switchProject(listProjects[1]);
  setTimeout(() => {
    ;(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.switchProject)(listProjects[0]);
  }, 0);
}


function createScheduledProject(scheduledName, itemTitle, symbolText) {
  const div = document.createElement('button');
  div.classList.add('scheduled-item');
  div.classList.add(scheduledName);
  div.classList.add('selection-option');
  
  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.textContent = symbolText;
  const project = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](scheduledName);
  listProjects.push(project);
  div.addEventListener('click', () => {
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.switchProject)(project);
  });
  
  const itemText = document.createElement('p');
  itemText.textContent = itemTitle;
  
  div.appendChild(iconSpan);
  div.appendChild(itemText);

  if (scheduledName === 'current-list') {
    setTimeout(() => {
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.switchProject)(project);
    }, 0);
  }  
  console.log(listProjects);

  return div;
}
  
function createProjectCreation(projectName, icon, addNew) {
  const projectDiv = document.createElement('button');
  projectDiv.classList.add('project');

  const projectItem = document.createElement('p');
  projectItem.textContent = projectName;

  const projectIcon = document.createElement('span');
  projectIcon.classList.add('material-symbols-outlined');
  projectIcon.textContent = icon;

  const project = new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](projectName);
  userProjects.push(project);

  projectDiv.dataset.project = JSON.stringify(project);

  projectDiv.addEventListener('click', () => {
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.switchProject)(project);
  });

  const doubleContainer = document.createElement('div');
  doubleContainer.classList.add('double-container');
  const deleteButton = document.createElement('span');
  deleteButton.classList.add('material-symbols-outlined');
  deleteButton.classList.add('delete-project-button');
  deleteButton.textContent = 'close';

  deleteButton.addEventListener('click', () => {
    deleteProject(projectDiv);
  })

  doubleContainer.appendChild(projectIcon);
  doubleContainer.appendChild(projectItem);
  projectDiv.appendChild(doubleContainer);
  
  if (addNew !== '') {
    projectDiv.classList.add('add-project');
    projectDiv.addEventListener('click', () => {
      (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.makeProjectFormActive)();
    })
    // const moveIcon = document.createElement('span')
    // moveIcon.classList.add('material-symbols-outlined')
    // moveIcon.classList.add('moveable')
    // moveIcon.textContent = 'dehaze'
    // projectDiv.appendChild(moveIcon)      
  } else {
    projectDiv.appendChild(deleteButton);
  }
  return projectDiv;
}


/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ applyClicksButtons)
/* harmony export */ });
/* harmony import */ var _creation_segments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creation-segments */ "./src/creation-segments.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* eslint-disable no-console */






class UserInterface {
  constructor() {
    this.storage = new _storage__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

  loadProjects() {
    console.log('loadProjects was used in UI');
    this.storage.getTodo().getProjects().forEach((project) => {
      if (
        project.getName() !== 'Current'
        && project.getName() !== 'Today'
        && project.getName() !== 'This week'
      ) {
        this.createProject(project.getName());
      }
    });
  }

  createProject() {
    console.log('createProject ran from inside UI');
    const titleProject = document.querySelector('#project-title-input').value;
    const project = (0,_projects__WEBPACK_IMPORTED_MODULE_3__.createProjectMain)(titleProject);

    const projectName = document.querySelector('.list-container-projects');
    projectName.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_0__.createProjectCreation)(project.getName(), 'task', ''));
    this.storage.addProject(project);

    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.closeProjectFormPopup)();
  }

  switchProject(project) {
    console.log('switchProject was called from UI');
    const projectTasks = project.getTasks();
    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(projectTasks);
  }

  submitNewTask() {
    const titleTask = document.querySelector('#input-title');
    const descriptionTask = document.querySelector('#input-description');
    const titleValue = titleTask.value;
    const descriptionValue = descriptionTask.value;
    const currentProject = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();

    if (currentProject) {
      const newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(titleValue, descriptionValue);
      currentProject.addTask(newTask);
      (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(currentProject);
      this.storage.addTask(currentProject.getName(), newTask);
    }

    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.closePopup)();
    titleTask.value = '';
    descriptionTask.value = '';
  }
}

function applyClicksButtons() {
  const ui = new UserInterface();

  const addTaskButton = document.querySelector('.submit-form');
  addTaskButton.addEventListener('click', () => {
    ui.submitNewTask();
  });

  const addProjectButton = document.querySelector('.submit-new-project');
  addProjectButton.addEventListener('click', () => {
    ui.createProject();
  });

  const projectButtons = document.querySelectorAll('.project');
  projectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const project = JSON.parse(button.dataset.project);
      ui.switchProject(project);
    });
  });
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectMain": () => (/* binding */ createProjectMain),
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/subDays/index.js");
/* eslint-disable no-console */


// const { v4: uuidv4 } = require('uuid');


const projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    projectList.push(name);
  }

  setName(name) {
    console.log('setName was used inside project class');
    this.name = name;
  }

  getName() {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const projectNames = {
      'today-list': `${today} to-do list`,
      'week-list': 'This week to-do list',
      'current-list': 'Current to-do list',
    };
    const formattedName = projectNames[this.name] || this.name;
    return formattedName;
  }

  setID() {
    console.log('setID was used');
    return this.uuidv4();
  }

  // getID() {
  //   console.log('getID was used');
  //   return this.ID;
  // }

  setTasks(tasks) {
    console.log('setTasks was used');
    this.tasks = tasks;
  }

  getTasks() {
    // console.log('getTasks was used');
    return this.tasks;
  }

  getTask(taskName) {
    console.log('getTask(taskName) was used');
    return this.tasks.find((task) => task.getName() === taskName);
  }

  getTaskCount() {
    return this.tasks.length;
  }

  contains(taskName) {
    console.log('contains was used');
    return this.tasks.some((task) => task.getName() === taskName);
  }

  addTask(newTask) {
    console.log('addTask was used inside projects.js');
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    console.log('deleteTask was used');
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  getDailyTasks() {
    console.log('getDailyTasks was used');
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate));
    });
  }

  getWeeklyTasks() {
    console.log('getWeeklyTasks was used');
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.getDateFormatted());
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(taskDate), 1));
    });
  }
}

function createProjectMain(title) {
  console.log('createProject inside projects.js was called');
  const project = new Project(title);
  return project;
}


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable no-console */




const Storage = {
  saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  },

  getTodo() {
    const todoList = Object.assign(
      new _todo_list__WEBPACK_IMPORTED_MODULE_0__["default"](),
      JSON.parse(localStorage.getItem('todoList')),
    );

    todoList.setProjects(
      todoList.getProjects().map((project) => Object.assign(new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](), project)),
    );

    todoList.getProjects().forEach((project) => {
      project.setTasks(
        project.getTasks().map((task) => Object.assign(new _tasks__WEBPACK_IMPORTED_MODULE_2__["default"](), task)),
      );
    });

    return todoList;
  },

  addProject(project) {
    const todoList = Storage.getTodo();
    todoList.addProject(project);
    Storage.saveList(todoList);
  },

  deleteProject(projectName) {
    const todoList = Storage.getTodo();
    todoList.deleteProject(projectName);
    Storage.saveList(todoList);
  },

  addTask(projectName, task) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).addTask(task);
    Storage.saveList(todoList);
  },

  deleteTask(projectName, taskName) {
    const todoList = Storage.getTodo();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveList(todoList);
  },

  renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodo();
    todoList
      .getProject(projectName)
      .getTask(taskName)
      .setName(newTaskName);
    Storage.saveList(todoList);
  },

  updateTodayProject() {
    console.log('updateTodayProject in Storage ran');
    const todoList = Storage.getTodo();
    todoList.updateTodayProject();
    Storage.saveList(todoList);
  },

  updateWeekProject() {
    console.log('updateWeekProject in Storage ran');
    const todoList = Storage.getTodo();
    todoList.updateWeekProject();
    Storage.saveList(todoList);
  },
};

const storage = Object.create(Storage);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToCurrentProject": () => (/* binding */ addTaskToCurrentProject),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "switchProject": () => (/* binding */ switchProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* eslint-disable no-plusplus */
// import { createTodoItem } from './creation-segments';
// import { closePopup } from './utilities';



/* eslint-disable no-console */
class Task {
  constructor(name, description, timeline = 'No date') {
    this.name = name;
    this.description = description;
    this.timeline = timeline;
  }

  setName(name) {
    console.log('setName in tasks was used');
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDescription(description) {
    console.log('setDescription in tasks was used');
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setTimeline(timeline) {
    console.log('setTimeline in tasks was used');
    this.timeline = timeline;
  }

  // getDate() {
  //   console.log('getDate in tasks was used');
  //   return this.timeline;
  // }

  // getDateFormatted() {
  //   console.log('getDateFormatted in tasks was used');
  //   const day = this.timeline.split('/')[0];
  //   const month = this.timeline.split('/')[1];
  //   const year = this.timeline.split('/')[2];
  //   return `${month}/${day}/${year}`;
  // }
}

function deleteTask(project, taskName) {
  const tasks = project.getTasks();
  const updatedTasks = tasks.filter((task) => task.getName() !== taskName);
  Storage.deleteTask(taskName);
  project.setTasks(updatedTasks);
}

function createTaskInProject(taskName, description, project) {
  const todoSection = document.querySelector('.Todo-section');

  console.log('createTaskInProject was called');
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task-name');
  taskTitle.textContent = taskName;
  taskItem.appendChild(taskTitle);

  const taskDescription = document.createElement('div');
  taskDescription.classList.add('task-description');
  taskDescription.textContent = description;

  const taskIcon = document.createElement('span');
  taskIcon.classList.add('material-symbols-outlined');
  taskIcon.classList.add('icon-button');
  taskIcon.textContent = 'check_circle';
  taskIcon.addEventListener('click', () => {
    deleteTask(project, taskName);
    taskItem.remove();
  });

  Storage.addTask(project, taskName);
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskIcon);
  todoSection.appendChild(taskItem);
}

function createTask(title, description) {
  const newTask = new Task(title, description);
  return newTask;
}

let currentProject = null;

function getCurrentProject() {
  return currentProject;
}

function displayTasks(project) {
  const contentArea = document.getElementsByClassName('Todo-section')[0];
  contentArea.innerHTML = '';

  const taskList = project.getTasks();

  // Creates and adds task elements
  taskList.forEach((task) => {
    const taskName = task.getName();
    const taskDescription = task.getDescription();
    createTaskInProject(taskName, taskDescription, project);
  });
}

function switchProject(project) {
  console.log('switchProject was called in tasks.js');
  console.log(project);
  const newTitleName = document.getElementsByClassName('list-title')[0];
  newTitleName.textContent = '';
  newTitleName.textContent = project.getName();

  currentProject = project;
  displayTasks(currentProject);
}

function addTaskToCurrentProject(title, description) {
  const project = getCurrentProject();
  if (project) {
    const newTask = createTask(title, description);
    currentProject.addTask(newTask);
    displayTasks(currentProject.getTasks);
  }
}


/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* eslint-disable no-console */




class TodoList {
  constructor() {
    console.log('Constructor in TodoList ran');
    this.projects = [];
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('Current'));
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]('This week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.getProjects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.name === newProject.name)) return;
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    const projectDeleted = this.projects.find(
      (project) => project.getName() === projectName,
    );
    this.projects.splice(this.projects.indexOf(projectDeleted), 1);
  }

  updateTodayProject() {
    this.getProject('Today').tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === 'Today' || project.getName() === 'This week') return;

      const todayTasks = project.getDailyTasks();
      todayTasks.forEach((task) => {
        const taskName = `${task.getName()} ${project.getName()}`;
        const taskDescription = `${task.getDescription()} ${project.getDescription()}`;

        this.getProject('Today').addTask(new _tasks__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, taskDescription, task.getDate()));
      });
    });
  }

  updateWeekProject() {
    this.getProject('This week').tasks = [];

    this.projects.forEach((project) => {
      if (project.getName() === 'This week' || project.getName() === 'Today') return;

      const weekTasks = project.getWeeklyTasks();
      weekTasks.forEach((task) => {
        const taskName = `${task.getName()} {$(project.getName()})`;
        const taskDescription = `${task.getDescription()} {$(project.getDescription()})`;
        this.getProject('Today').addTask(new _tasks__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, taskDescription, task.getDate()));
      });
    });

    this.getProject('This week').setTasks(
      this.getProject('This week').getTasks().sort((task1, task2) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(
        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(task1.getDateFormatted())),
        (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(task2.getDateFormatted())),
      )),
    );
  }
}


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopup": () => (/* binding */ closePopup),
/* harmony export */   "closeProjectFormPopup": () => (/* binding */ closeProjectFormPopup),
/* harmony export */   "makeItemActive": () => (/* binding */ makeItemActive),
/* harmony export */   "makeProjectFormActive": () => (/* binding */ makeProjectFormActive)
/* harmony export */ });
/* eslint-disable no-console */
function makeItemActive() {
//   console.log('makeItemActive ran');
  const item = document.querySelector('.add-container');
  //  console.log(item);
  item.style.display = 'flex';
}

function closePopup() {
  const cancelForm = document.querySelector('.add-container');
  //  console.log(closePopup);
  //  cancelForm.classlist.remove('active');
  cancelForm.style.display = 'none';
}

function makeProjectFormActive() {
  const projectAdd = document.querySelector('.project-form-container');
  projectAdd.style.display = 'flex';
}

function closeProjectFormPopup() {
  const cancelForm = document.querySelector('.project-form-container');
  cancelForm.style.display = 'none';
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _creation_segments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creation-segments */ "./src/creation-segments.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* eslint-disable semi */
/* eslint-disable no-console */
// import createParagraph from './creation-segments'
// import { sub } from 'date-fns';






function createHeader() {
  const pageBody = document.querySelector('#content')

  const headerDiv = document.createElement('div')
  headerDiv.classList.add('header')
  pageBody.appendChild(headerDiv)

  const iconSpan = document.createElement('span');
  iconSpan.classList.add('material-symbols-outlined');
  iconSpan.classList.add('make-bigger')
  iconSpan.textContent = 'checklist'
  headerDiv.appendChild(iconSpan)

  const headerTitle = document.createElement('div')
  headerTitle.classList.add('page-title')
  headerTitle.innerHTML = 'To-do List'
  headerDiv.appendChild(headerTitle)

  return headerDiv;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyrightThing = document.createElement('p')
  copyrightThing.textContent = `Copyright © ${new Date().getFullYear()} Employed Ranger`;

  footer.appendChild(copyrightThing);
  return footer;
}

function createForm() {
  const addContainer = document.createElement('div')
  addContainer.classList.add('add-container')
  const titleContainer = document.createElement('input')
  titleContainer.setAttribute('id', 'input-title')
  titleContainer.setAttribute('placeholder', 'Task Title')
  titleContainer.setAttribute('maxlength', '25')
  titleContainer.setAttribute('type', 'text')

  const descriptionContainer = document.createElement('input')
  descriptionContainer.setAttribute('id', 'input-description')
  descriptionContainer.setAttribute('placeholder', 'Task description')
  descriptionContainer.setAttribute('maxlength', '50')
  descriptionContainer.setAttribute('type', 'text')

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('form-container')

  const submitButton = document.createElement('button')
  submitButton.classList.add('submit-form')
  submitButton.classList.add('form')
  submitButton.textContent = 'Add Task'
  buttonContainer.appendChild(submitButton)

  const cancelButton = document.createElement('button')
  cancelButton.classList.add('cancel-form')
  cancelButton.classList.add('form')
  cancelButton.textContent = 'Cancel'
  cancelButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_2__.closePopup)();
  })
  buttonContainer.appendChild(cancelButton)

  addContainer.appendChild(titleContainer)
  addContainer.appendChild(descriptionContainer)
  addContainer.appendChild(buttonContainer)
  return addContainer;
}

function createSidebar() {
  const sidebarSection = document.createElement('div')
  sidebarSection.classList.add('sidebar')
  const scheduledContainer = document.createElement('div')
  scheduledContainer.classList.add('scheduled-container')
  sidebarSection.appendChild(scheduledContainer)

  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createScheduledProject)('current-list', 'Current', 'event_upcoming'));
  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createScheduledProject)('today-list', 'Today', 'today'));
  scheduledContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createScheduledProject)('week-list', 'This week', 'date_range'));

  const projectContainer = document.createElement('div')
  projectContainer.classList.add('project-container')
  sidebarSection.appendChild(projectContainer)

  const projectHeading = document.createElement('p')
  projectHeading.classList.add('project-heading')
  projectHeading.textContent = 'Projects'
  projectContainer.appendChild(projectHeading)

  const listContainer = document.createElement('div')
  listContainer.classList.add('list-container-projects')
  projectContainer.appendChild(listContainer)

  const addProject = document.createElement('div')
  addProject.classList.add('add-project')

  listContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createProjectCreation)('Mow the lawn', 'task', ''))
  listContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createProjectCreation)('Count chips', 'task', ''))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createProjectCreation)('Add Project', 'add', 'yes'))
  projectContainer.appendChild((0,_creation_segments__WEBPACK_IMPORTED_MODULE_1__.createFormProject)())

  return sidebarSection;
}

function createTodo() {
  const boxContainer = document.createElement('div')
  boxContainer.classList.add('box-container')

  const listContainer = document.createElement('div')
  listContainer.classList.add('list-container')
  boxContainer.appendChild(listContainer)

  const listTitle = document.createElement('h1')
  listTitle.classList.add('list-title')
  listTitle.textContent = 'Current to-do list'
  listContainer.appendChild(listTitle)

  const todoSection = document.createElement('div')
  todoSection.classList.add('Todo-section')
  listContainer.appendChild(todoSection)

  const addTaskButton = document.createElement('button')
  addTaskButton.classList.add('add-task')

  const buttonText = document.createElement('div')
  buttonText.classList.add('button-text')
  buttonText.textContent = 'Add Task'

  const iconSpan = document.createElement('span')
  iconSpan.classList.add('material-symbols-outlined')
  iconSpan.textContent = 'add'
  addTaskButton.appendChild(iconSpan)
  addTaskButton.appendChild(buttonText)
  addTaskButton.addEventListener('click', () => {
    ;(0,_utilities__WEBPACK_IMPORTED_MODULE_2__.makeItemActive)();
  })
  listContainer.appendChild(addTaskButton)
  listContainer.appendChild(createForm());

  return boxContainer;
}

function createMainSection() {
  const content = document.querySelector('#content');
  const mainSection = document.createElement('div');
  mainSection.classList.add('main-section-container');

  mainSection.appendChild(createSidebar());
  mainSection.appendChild(createTodo());
  content.appendChild(mainSection);
}

function startup() {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  createMainSection();
  content.appendChild(createFooter());
  (0,_interface__WEBPACK_IMPORTED_MODULE_3__["default"])();
  // switchProject('current-list')
}

window.addEventListener('DOMContentLoaded', () => {
  startup();
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map