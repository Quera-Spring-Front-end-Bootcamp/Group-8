import {
  require_prop_types
} from "./chunk-IY23UCNA.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __commonJS,
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/lodash.memoize/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.memoize/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var splice = arrayProto.splice;
    var Map2 = getNative(root, "Map");
    var nativeCreate = getNative(Object, "create");
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function memoize2(func, resolver2) {
      if (typeof func != "function" || resolver2 && typeof resolver2 != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver2 ? resolver2.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new (memoize2.Cache || MapCache)();
      return memoized;
    }
    memoize2.Cache = MapCache;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    module.exports = memoize2;
  }
});

// node_modules/react-calendar/dist/esm/Calendar.js
var import_react20 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());

// node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/react-calendar/dist/esm/Calendar/Navigation.js
var import_react = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/get-user-locale/dist/esm/index.js
var import_lodash = __toESM(require_lodash());
function resolver(options) {
  return JSON.stringify(options);
}
function uniqDefined(arr) {
  return arr.filter(function(el, index) {
    return el && arr.indexOf(el) === index;
  });
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function normalizeLocale(el) {
  if (!el || el.indexOf("-") === -1 || !isAllLowerCase(el)) {
    return el;
  }
  var _a2 = el.split("-"), _b = _a2[0], splitEl1 = _b === void 0 ? "" : _b, _c = _a2[1], splitEl2 = _c === void 0 ? "" : _c;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a2) {
  var _b = _a2 === void 0 ? {} : _a2, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? "en-US" : _d;
  var languageList = [];
  if (typeof navigator !== "undefined") {
    languageList = languageList.concat(navigator.languages, navigator.language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return uniqDefined(languageList).map(normalizeLocale);
}
var getUserLocales = (0, import_lodash.default)(getUserLocalesInternal, resolver);
function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, import_lodash.default)(getUserLocaleInternal, resolver);
var esm_default = getUserLocale;

// node_modules/@wojtekmaj/date-utils/dist/esm/index.js
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd2) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd2(date)];
  };
}
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === "number") {
    return date;
  }
  var year = parseInt(date, 10);
  if (typeof date === "string" && !isNaN(year)) {
    return year;
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(date, "."));
}
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = /* @__PURE__ */ new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = /* @__PURE__ */ new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = /* @__PURE__ */ new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = /* @__PURE__ */ new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = /* @__PURE__ */ new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = /* @__PURE__ */ new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

// node_modules/react-calendar/dist/esm/shared/const.js
var _a;
var CALENDAR_TYPES = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
};
var CALENDAR_TYPE_LOCALES = (_a = {}, _a[CALENDAR_TYPES.US] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], _a[CALENDAR_TYPES.ARABIC] = [
  // ar-LB, ar-MA intentionally missing
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], _a[CALENDAR_TYPES.HEBREW] = ["he", "he-IL"], _a);
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

// node_modules/react-calendar/dist/esm/shared/dateFormatter.js
var formatterCache = /* @__PURE__ */ new Map();
function getFormatter(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || esm_default();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || void 0, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
  return function(locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}
var formatDateOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric"
};
var formatDayOptions = { day: "numeric" };
var formatLongDateOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
var formatMonthOptions = { month: "long" };
var formatMonthYearOptions = {
  month: "long",
  year: "numeric"
};
var formatShortWeekdayOptions = { weekday: "short" };
var formatWeekdayOptions = { weekday: "long" };
var formatYearOptions = { year: "numeric" };
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

// node_modules/react-calendar/dist/esm/shared/dates.js
var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ARABIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.US:
      return weekday;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.US ? CALENDAR_TYPES.US : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (864e5 * 7)) + 1;
}
function getBegin(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyStart(date);
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyStart(date);
    case "decade":
      return getPreviousDecadeStart(date);
    case "year":
      return getPreviousYearStart(date);
    case "month":
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getNextCenturyStart(date);
    case "decade":
      return getNextDecadeStart(date);
    case "year":
      return getNextYearStart(date);
    case "month":
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeStart(date, -100);
    case "year":
      return getPreviousYearStart(date, -10);
    case "month":
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getNextDecadeStart(date, 100);
    case "year":
      return getNextYearStart(date, 10);
    case "month":
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyEnd(date);
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyEnd(date);
    case "decade":
      return getPreviousDecadeEnd(date);
    case "year":
      return getPreviousYearEnd(date);
    case "month":
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeEnd(date, -100);
    case "year":
      return getPreviousYearEnd(date, -10);
    case "month":
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getRange(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyRange(date);
    case "decade":
      return getDecadeRange(date);
    case "year":
      return getYearRange(date);
    case "month":
      return getMonthRange(date);
    case "day":
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function(a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear2, dates) {
  if (formatYear2 === void 0) {
    formatYear2 = formatYear;
  }
  return dates.map(function(date) {
    return formatYear2(locale, date);
  }).join(" – ");
}
function getCenturyLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getCenturyRange(date));
}
function getDecadeLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getDecadeRange(date));
}
function isCurrentDayOfWeek(date) {
  return date.getDay() === (/* @__PURE__ */ new Date()).getDay();
}
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ARABIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.US:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error("Unsupported calendar type.");
  }
}

// node_modules/react-calendar/dist/esm/shared/propTypes.js
var import_prop_types = __toESM(require_prop_types());
var calendarTypes = Object.values(CALENDAR_TYPES);
var allViews = ["century", "decade", "year", "month"];
var isCalendarType = import_prop_types.default.oneOf(calendarTypes);
var isClassName = import_prop_types.default.oneOfType([
  import_prop_types.default.string,
  import_prop_types.default.arrayOf(import_prop_types.default.string)
]);
function isMinDate(props, propName, componentName) {
  var _a2 = props, _b = propName, minDate = _a2[_b];
  if (!minDate) {
    return null;
  }
  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var maxDate = props.maxDate;
  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }
  return null;
}
function isMaxDate(props, propName, componentName) {
  var _a2 = props, _b = propName, maxDate = _a2[_b];
  if (!maxDate) {
    return null;
  }
  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var minDate = props.minDate;
  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }
  return null;
}
var isRef = import_prop_types.default.oneOfType([
  import_prop_types.default.func,
  import_prop_types.default.shape({
    current: import_prop_types.default.any
  })
]);
var isValue = import_prop_types.default.oneOfType([
  import_prop_types.default.instanceOf(Date),
  import_prop_types.default.arrayOf(import_prop_types.default.instanceOf(Date))
]);
var isViews = import_prop_types.default.arrayOf(import_prop_types.default.oneOf(allViews));
function isView(props, propName, componentName) {
  var _a2 = props, _b = propName, view = _a2[_b];
  var views = props.views;
  var allowedViews = views || allViews;
  if (view !== void 0 && (typeof view !== "string" || allowedViews.indexOf(view) === -1)) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allowedViews.map(function(a) {
      return '"'.concat(a, '"');
    }).join(", "), "]."));
  }
  return null;
}
isView.isRequired = function(props, propName, componentName) {
  var _a2 = props, _b = propName, view = _a2[_b];
  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }
  return isView(props, propName, componentName);
};
var tileGroupProps = {
  activeStartDate: import_prop_types.default.instanceOf(Date).isRequired,
  hover: import_prop_types.default.instanceOf(Date),
  locale: import_prop_types.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: import_prop_types.default.func,
  onMouseOver: import_prop_types.default.func,
  tileClassName: import_prop_types.default.oneOfType([import_prop_types.default.func, isClassName]),
  tileContent: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  value: isValue,
  valueType: import_prop_types.default.string
};
var tileProps = {
  activeStartDate: import_prop_types.default.instanceOf(Date).isRequired,
  classes: import_prop_types.default.arrayOf(import_prop_types.default.string).isRequired,
  date: import_prop_types.default.instanceOf(Date).isRequired,
  locale: import_prop_types.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: import_prop_types.default.func,
  onMouseOver: import_prop_types.default.func,
  style: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
  tileClassName: import_prop_types.default.oneOfType([import_prop_types.default.func, isClassName]),
  tileContent: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  tileDisabled: import_prop_types.default.func
};

// node_modules/react-calendar/dist/esm/Calendar/Navigation.js
var className = "react-calendar__navigation";
function Navigation(_a2) {
  var activeStartDate = _a2.activeStartDate, drillUp = _a2.drillUp, _b = _a2.formatMonthYear, formatMonthYear2 = _b === void 0 ? formatMonthYear : _b, _c = _a2.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, locale = _a2.locale, maxDate = _a2.maxDate, minDate = _a2.minDate, _d = _a2.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? "" : _d, navigationAriaLive = _a2.navigationAriaLive, navigationLabel = _a2.navigationLabel, _e = _a2.next2AriaLabel, next2AriaLabel = _e === void 0 ? "" : _e, _f = _a2.next2Label, next2Label = _f === void 0 ? "»" : _f, _g = _a2.nextAriaLabel, nextAriaLabel = _g === void 0 ? "" : _g, _h = _a2.nextLabel, nextLabel = _h === void 0 ? "›" : _h, _j = _a2.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? "" : _j, _k = _a2.prev2Label, prev2Label = _k === void 0 ? "«" : _k, _l = _a2.prevAriaLabel, prevAriaLabel = _l === void 0 ? "" : _l, _m = _a2.prevLabel, prevLabel = _m === void 0 ? "‹" : _m, setActiveStartDate = _a2.setActiveStartDate, showDoubleView = _a2.showDoubleView, view = _a2.view, views = _a2.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== "century";
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : void 0;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : void 0;
  var prevButtonDisabled = function() {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, "prev");
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, "prev2");
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, "next");
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, "next2");
  }
  function renderLabel(date) {
    var label = function() {
      switch (view) {
        case "century":
          return getCenturyLabel(locale, formatYear2, date);
        case "decade":
          return getDecadeLabel(locale, formatYear2, date);
        case "year":
          return formatYear2(locale, date);
        case "month":
          return formatMonthYear2(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date,
      label,
      locale: locale || getUserLocale() || void 0,
      view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className, "__label");
    return import_react.default.createElement(
      "button",
      { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button" },
      import_react.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from") }, renderLabel(activeStartDate)),
      showDoubleView ? import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement("span", { className: "".concat(labelClassName, "__divider") }, " – "),
        import_react.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to") }, renderLabel(nextActiveStartDate))
      ) : null
    );
  }
  return import_react.default.createElement(
    "div",
    { className },
    prev2Label !== null && shouldShowPrevNext2Buttons ? import_react.default.createElement("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button" }, prev2Label) : null,
    prevLabel !== null && import_react.default.createElement("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button" }, prevLabel),
    renderButton(),
    nextLabel !== null && import_react.default.createElement("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button" }, nextLabel),
    next2Label !== null && shouldShowPrevNext2Buttons ? import_react.default.createElement("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button" }, next2Label) : null
  );
}
Navigation.propTypes = {
  activeStartDate: import_prop_types2.default.instanceOf(Date).isRequired,
  drillUp: import_prop_types2.default.func.isRequired,
  formatMonthYear: import_prop_types2.default.func,
  formatYear: import_prop_types2.default.func,
  locale: import_prop_types2.default.string,
  maxDate: import_prop_types2.default.instanceOf(Date),
  minDate: import_prop_types2.default.instanceOf(Date),
  navigationAriaLabel: import_prop_types2.default.string,
  navigationAriaLive: import_prop_types2.default.string,
  navigationLabel: import_prop_types2.default.func,
  next2AriaLabel: import_prop_types2.default.string,
  next2Label: import_prop_types2.default.node,
  nextAriaLabel: import_prop_types2.default.string,
  nextLabel: import_prop_types2.default.node,
  prev2AriaLabel: import_prop_types2.default.string,
  prev2Label: import_prop_types2.default.node,
  prevAriaLabel: import_prop_types2.default.string,
  prevLabel: import_prop_types2.default.node,
  setActiveStartDate: import_prop_types2.default.func.isRequired,
  showDoubleView: import_prop_types2.default.bool,
  view: isView.isRequired,
  views: isViews.isRequired
};

// node_modules/react-calendar/dist/esm/CenturyView.js
var import_react7 = __toESM(require_react());

// node_modules/react-calendar/dist/esm/CenturyView/Decades.js
var import_react6 = __toESM(require_react());

// node_modules/react-calendar/dist/esm/TileGroup.js
var import_react3 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/react-calendar/dist/esm/Flex.js
var import_react2 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a2) {
  var children = _a2.children, className8 = _a2.className, count = _a2.count, direction = _a2.direction, offset = _a2.offset, style = _a2.style, wrap = _a2.wrap, otherProps = __rest(_a2, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return import_react2.default.createElement("div", __assign({ className: className8, style: __assign({ display: "flex", flexDirection: direction, flexWrap: wrap ? "wrap" : "nowrap" }, style) }, otherProps), import_react2.default.Children.map(children, function(child, index) {
    return import_react2.default.cloneElement(child, __assign(__assign({}, child.props), { style: {
      flexBasis: toPercent(100 / count),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
    } }));
  }));
}
Flex.propTypes = {
  children: import_prop_types3.default.node,
  className: import_prop_types3.default.string,
  count: import_prop_types3.default.number.isRequired,
  direction: import_prop_types3.default.string,
  offset: import_prop_types3.default.number,
  style: import_prop_types3.default.objectOf(import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.number])),
  wrap: import_prop_types3.default.bool
};

// node_modules/react-calendar/dist/esm/shared/utils.js
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName2) {
  var isRange = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange) {
    classes.push(baseClassName2);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName2, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName2, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName2, "BothEnds"));
    }
  }
  return classes;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error("args is required");
  }
  var value = args.value, date = args.date, hover = args.hover;
  var className8 = "react-calendar__tile";
  var classes = [className8];
  if (!date) {
    return classes;
  }
  var now = /* @__PURE__ */ new Date();
  var dateRange = function() {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error("dateType is required when date is not an array of two dates");
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className8, "--now"));
  }
  if (!value) {
    return classes;
  }
  var valueRange = function() {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error("valueType is required when value is not an array of two dates");
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className8, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className8, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className8, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className8, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}

// node_modules/react-calendar/dist/esm/TileGroup.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function TileGroup(_a2) {
  var className8 = _a2.className, _b = _a2.count, count = _b === void 0 ? 3 : _b, dateTransform = _a2.dateTransform, dateType = _a2.dateType, end = _a2.end, hover = _a2.hover, offset = _a2.offset, start = _a2.start, _c = _a2.step, step = _c === void 0 ? 1 : _c, Tile2 = _a2.tile, value = _a2.value, valueType = _a2.valueType, tileProps2 = __rest2(_a2, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(import_react3.default.createElement(Tile2, __assign2({ key: date.getTime(), classes: getTileClasses({
      value,
      valueType,
      date,
      dateType,
      hover
    }), date, point }, tileProps2)));
  }
  return import_react3.default.createElement(Flex, { className: className8, count, offset, wrap: true }, tiles);
}
TileGroup.propTypes = __assign2(__assign2({}, tileGroupProps), { className: import_prop_types4.default.string, count: import_prop_types4.default.number, dateTransform: import_prop_types4.default.func.isRequired, dateType: import_prop_types4.default.string, end: import_prop_types4.default.number.isRequired, offset: import_prop_types4.default.number, step: import_prop_types4.default.number, start: import_prop_types4.default.number.isRequired, tile: import_prop_types4.default.func.isRequired });

// node_modules/react-calendar/dist/esm/CenturyView/Decade.js
var import_react5 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/react-calendar/dist/esm/Tile.js
var import_react4 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
function datesAreDifferent(date1, date2) {
  return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
}
var Tile = (
  /** @class */
  function(_super) {
    __extends(Tile2, _super);
    function Tile2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {};
      return _this;
    }
    Tile2.getDerivedStateFromProps = function(nextProps, prevState) {
      var activeStartDate = nextProps.activeStartDate, date = nextProps.date, tileClassName = nextProps.tileClassName, tileContent = nextProps.tileContent, view = nextProps.view;
      var nextState = {};
      var args = { activeStartDate, date, view };
      if (tileClassName !== prevState.tileClassNameProps || datesAreDifferent(activeStartDate, prevState.activeStartDateProps)) {
        nextState.tileClassName = typeof tileClassName === "function" ? tileClassName(args) : tileClassName;
        nextState.tileClassNameProps = tileClassName;
      }
      if (tileContent !== prevState.tileContentProps || datesAreDifferent(activeStartDate, prevState.activeStartDateProps)) {
        nextState.tileContent = typeof tileContent === "function" ? tileContent(args) : tileContent;
        nextState.tileContentProps = tileContent;
      }
      nextState.activeStartDateProps = activeStartDate;
      return nextState;
    };
    Tile2.prototype.render = function() {
      var _a2 = this.props, activeStartDate = _a2.activeStartDate, children = _a2.children, classes = _a2.classes, date = _a2.date, formatAbbr = _a2.formatAbbr, locale = _a2.locale, maxDate = _a2.maxDate, maxDateTransform = _a2.maxDateTransform, minDate = _a2.minDate, minDateTransform = _a2.minDateTransform, onClick = _a2.onClick, onMouseOver = _a2.onMouseOver, style = _a2.style, tileDisabled = _a2.tileDisabled, view = _a2.view;
      var _b = this.state, tileClassName = _b.tileClassName, tileContent = _b.tileContent;
      return import_react4.default.createElement(
        "button",
        { className: clsx_m_default(classes, tileClassName), disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({ activeStartDate, date, view }), onClick: onClick ? function(event) {
          return onClick(date, event);
        } : void 0, onFocus: onMouseOver ? function() {
          return onMouseOver(date);
        } : void 0, onMouseOver: onMouseOver ? function() {
          return onMouseOver(date);
        } : void 0, style, type: "button" },
        formatAbbr ? import_react4.default.createElement("abbr", { "aria-label": formatAbbr(locale, date) }, children) : children,
        tileContent
      );
    };
    Tile2.propTypes = __assign3(__assign3({}, tileProps), { children: import_prop_types5.default.node.isRequired, formatAbbr: import_prop_types5.default.func, maxDateTransform: import_prop_types5.default.func.isRequired, minDateTransform: import_prop_types5.default.func.isRequired });
    return Tile2;
  }(import_react4.Component)
);
var Tile_default = Tile;

// node_modules/react-calendar/dist/esm/CenturyView/Decade.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className2 = "react-calendar__century-view__decades__decade";
function Decade(_a2) {
  var _b = _a2.classes, classes = _b === void 0 ? [] : _b, _c = _a2.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, otherProps = __rest3(_a2, ["classes", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return import_react5.default.createElement(Tile_default, __assign4({}, otherProps, { classes: __spreadArray(__spreadArray([], classes, true), [className2], false), maxDateTransform: getDecadeEnd, minDateTransform: getDecadeStart, view: "century" }), getDecadeLabel(locale, formatYear2, date));
}
Decade.propTypes = __assign4(__assign4({}, tileProps), { formatYear: import_prop_types6.default.func });

// node_modules/react-calendar/dist/esm/CenturyView/Decades.js
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + 99;
  return import_react6.default.createElement(TileGroup, __assign5({}, props, { className: "react-calendar__century-view__decades", dateTransform: getDecadeStart, dateType: "decade", end, start, step: 10, tile: Decade }));
}
Decades.propTypes = __assign5({}, tileGroupProps);

// node_modules/react-calendar/dist/esm/CenturyView.js
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
function CenturyView(props) {
  function renderDecades() {
    return import_react7.default.createElement(Decades, __assign6({}, props));
  }
  return import_react7.default.createElement("div", { className: "react-calendar__century-view" }, renderDecades());
}

// node_modules/react-calendar/dist/esm/DecadeView.js
var import_react10 = __toESM(require_react());

// node_modules/react-calendar/dist/esm/DecadeView/Years.js
var import_react9 = __toESM(require_react());

// node_modules/react-calendar/dist/esm/DecadeView/Year.js
var import_react8 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className3 = "react-calendar__decade-view__years__year";
function Year(_a2) {
  var _b = _a2.classes, classes = _b === void 0 ? [] : _b, _c = _a2.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, otherProps = __rest4(_a2, ["classes", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return import_react8.default.createElement(Tile_default, __assign7({}, otherProps, { classes: __spreadArray2(__spreadArray2([], classes, true), [className3], false), maxDateTransform: getYearEnd, minDateTransform: getYearStart, view: "decade" }), formatYear2(locale, date));
}
Year.propTypes = __assign7(__assign7({}, tileProps), { formatYear: import_prop_types7.default.func });

// node_modules/react-calendar/dist/esm/DecadeView/Years.js
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + 9;
  return import_react9.default.createElement(TileGroup, __assign8({}, props, { className: "react-calendar__decade-view__years", dateTransform: function(year) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }, dateType: "year", end, start, tile: Year }));
}
Years.propTypes = __assign8({}, tileGroupProps);

// node_modules/react-calendar/dist/esm/DecadeView.js
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
function DecadeView(props) {
  function renderYears() {
    return import_react10.default.createElement(Years, __assign9({}, props));
  }
  return import_react10.default.createElement("div", { className: "react-calendar__decade-view" }, renderYears());
}

// node_modules/react-calendar/dist/esm/YearView.js
var import_react13 = __toESM(require_react());

// node_modules/react-calendar/dist/esm/YearView/Months.js
var import_react12 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/react-calendar/dist/esm/YearView/Month.js
var import_react11 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var __rest5 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className4 = "react-calendar__year-view__months__month";
function Month(_a2) {
  var _b = _a2.classes, classes = _b === void 0 ? [] : _b, _c = _a2.formatMonth, formatMonth2 = _c === void 0 ? formatMonth : _c, _d = _a2.formatMonthYear, formatMonthYear2 = _d === void 0 ? formatMonthYear : _d, otherProps = __rest5(_a2, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return import_react11.default.createElement(Tile_default, __assign10({}, otherProps, { classes: __spreadArray3(__spreadArray3([], classes, true), [className4], false), formatAbbr: formatMonthYear2, maxDateTransform: getMonthEnd, minDateTransform: getMonthStart, view: "year" }), formatMonth2(locale, date));
}
Month.propTypes = __assign10(__assign10({}, tileProps), { formatMonth: import_prop_types8.default.func, formatMonthYear: import_prop_types8.default.func });

// node_modules/react-calendar/dist/esm/YearView/Months.js
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return import_react12.default.createElement(TileGroup, __assign11({}, props, { className: "react-calendar__year-view__months", dateTransform: function(monthIndex) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }, dateType: "month", end, start, tile: Month }));
}
Months.propTypes = __assign11(__assign11({}, tileGroupProps), { locale: import_prop_types9.default.string });

// node_modules/react-calendar/dist/esm/YearView.js
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
function YearView(props) {
  function renderMonths() {
    return import_react13.default.createElement(Months, __assign12({}, props));
  }
  return import_react13.default.createElement("div", { className: "react-calendar__year-view" }, renderMonths());
}

// node_modules/react-calendar/dist/esm/MonthView.js
var import_react19 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/react-calendar/dist/esm/MonthView/Days.js
var import_react15 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/react-calendar/dist/esm/MonthView/Day.js
var import_react14 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var __rest6 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className5 = "react-calendar__month-view__days__day";
function Day(_a2) {
  var calendarType = _a2.calendarType, _b = _a2.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a2.currentMonthIndex, _c = _a2.formatDay, formatDay2 = _c === void 0 ? formatDay : _c, _d = _a2.formatLongDate, formatLongDate2 = _d === void 0 ? formatLongDate : _d, otherProps = __rest6(_a2, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className5) {
    classesProps.push(className5);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className5, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className5, "--neighboringMonth"));
  }
  return import_react14.default.createElement(Tile_default, __assign13({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate2, maxDateTransform: getDayEnd, minDateTransform: getDayStart, view: "month" }), formatDay2(locale, date));
}
Day.propTypes = __assign13(__assign13({}, tileProps), { currentMonthIndex: import_prop_types10.default.number.isRequired, formatDay: import_prop_types10.default.func, formatLongDate: import_prop_types10.default.func });

// node_modules/react-calendar/dist/esm/MonthView/Days.js
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var __rest7 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Days(props) {
  var activeStartDate = props.activeStartDate, calendarType = props.calendarType;
  var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, otherProps = __rest7(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  var end = function() {
    if (showFixedNumberOfWeeks) {
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = /* @__PURE__ */ new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return import_react15.default.createElement(TileGroup, __assign14({}, otherProps, { className: "react-calendar__month-view__days", count: 7, currentMonthIndex: monthIndex, dateTransform: function(day) {
    var date = /* @__PURE__ */ new Date();
    date.setFullYear(year, monthIndex, day);
    date.setHours(0, 0, 0, 0);
    return date;
  }, dateType: "day", end, offset, start, tile: Day }));
}
Days.propTypes = __assign14({ calendarType: isCalendarType, showFixedNumberOfWeeks: import_prop_types11.default.bool, showNeighboringMonth: import_prop_types11.default.bool }, tileGroupProps);

// node_modules/react-calendar/dist/esm/MonthView/Weekdays.js
var import_react16 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
var className6 = "react-calendar__month-view__weekdays";
var weekdayClassName = "".concat(className6, "__weekday");
function Weekdays(props) {
  var calendarType = props.calendarType, _a2 = props.formatShortWeekday, formatShortWeekday2 = _a2 === void 0 ? formatShortWeekday : _a2, _b = props.formatWeekday, formatWeekday2 = _b === void 0 ? formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
  var anyDate = /* @__PURE__ */ new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday2(locale, weekdayDate);
    weekdays.push(import_react16.default.createElement(
      "div",
      { key: weekday, className: clsx_m_default(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")) },
      import_react16.default.createElement("abbr", { "aria-label": abbr, title: abbr }, formatShortWeekday2(locale, weekdayDate).replace(".", ""))
    ));
  }
  return import_react16.default.createElement(Flex, { className: className6, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave }, weekdays);
}
Weekdays.propTypes = {
  calendarType: isCalendarType,
  formatShortWeekday: import_prop_types12.default.func,
  formatWeekday: import_prop_types12.default.func,
  locale: import_prop_types12.default.string,
  onMouseLeave: import_prop_types12.default.func
};

// node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js
var import_react18 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js
var import_react17 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var __rest8 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className7 = "react-calendar__tile";
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
  var children = import_react17.default.createElement("span", null, weekNumber);
  if (onClickWeekNumber) {
    var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest8(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return import_react17.default.createElement("button", __assign15({}, otherProps, { className: className7, onClick: function(event) {
      return onClickWeekNumber_1(weekNumber_1, date_1, event);
    }, type: "button" }), children);
  } else {
    var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest8(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return import_react17.default.createElement("div", __assign15({}, otherProps, { className: className7 }), children);
  }
}
WeekNumber.propTypes = {
  date: import_prop_types13.default.instanceOf(Date).isRequired,
  onClickWeekNumber: import_prop_types13.default.func,
  weekNumber: import_prop_types13.default.node.isRequired
};

// node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js
function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate, calendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var numberOfWeeks = function() {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function() {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function(date) {
    return getWeekNumber(date, calendarType);
  });
  return import_react18.default.createElement(Flex, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, weekNumbers.map(function(weekNumber, weekIndex) {
    var date = dates[weekIndex];
    if (!date) {
      throw new Error("date is not defined");
    }
    return import_react18.default.createElement(WeekNumber, { key: weekNumber, date, onClickWeekNumber, weekNumber });
  }));
}
WeekNumbers.propTypes = {
  activeStartDate: import_prop_types14.default.instanceOf(Date).isRequired,
  calendarType: isCalendarType,
  onClickWeekNumber: import_prop_types14.default.func,
  onMouseLeave: import_prop_types14.default.func,
  showFixedNumberOfWeeks: import_prop_types14.default.bool
};

// node_modules/react-calendar/dist/esm/MonthView.js
var __assign16 = function() {
  __assign16 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign16.apply(this, arguments);
};
var __rest9 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function getCalendarTypeFromLocale(locale) {
  for (var _i = 0, _a2 = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a2.length; _i++) {
    var _b = _a2[_i], calendarType = _b[0], locales = _b[1];
    if (locales.includes(locale)) {
      return calendarType;
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
function MonthView(props) {
  var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a2 = props.calendarType, calendarType = _a2 === void 0 ? getCalendarTypeFromLocale(locale) : _a2, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest9(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return import_react19.default.createElement(Weekdays, { calendarType, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, locale, onMouseLeave });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return import_react19.default.createElement(WeekNumbers, { activeStartDate, calendarType, onClickWeekNumber, onMouseLeave, showFixedNumberOfWeeks });
  }
  function renderDays() {
    return import_react19.default.createElement(Days, __assign16({ calendarType }, childProps));
  }
  var className8 = "react-calendar__month-view";
  return import_react19.default.createElement(
    "div",
    { className: clsx_m_default(className8, showWeekNumbers ? "".concat(className8, "--weekNumbers") : "") },
    import_react19.default.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      renderWeekNumbers(),
      import_react19.default.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        renderWeekdays(),
        renderDays()
      )
    )
  );
}
MonthView.propTypes = __assign16(__assign16({}, tileGroupProps), { calendarType: isCalendarType, formatDay: import_prop_types15.default.func, formatLongDate: import_prop_types15.default.func, formatShortWeekday: import_prop_types15.default.func, formatWeekday: import_prop_types15.default.func, onClickWeekNumber: import_prop_types15.default.func, onMouseLeave: import_prop_types15.default.func, showFixedNumberOfWeeks: import_prop_types15.default.bool, showNeighboringMonth: import_prop_types15.default.bool, showWeekNumbers: import_prop_types15.default.bool });

// node_modules/react-calendar/dist/esm/Calendar.js
var __extends2 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign17 = function() {
  __assign17 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign17.apply(this, arguments);
};
var __rest10 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var baseClassName = "react-calendar";
var allViews2 = ["century", "decade", "year", "month"];
var allValueTypes = ["decade", "year", "month", "day"];
var defaultMinDate = /* @__PURE__ */ new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = /* @__PURE__ */ new Date(864e13);
var defaultProps = {
  goToRangeStartOnSelect: true,
  maxDate: defaultMaxDate,
  maxDetail: "month",
  minDate: defaultMinDate,
  minDetail: "century",
  returnValue: "start",
  showNavigation: true,
  showNeighboringMonth: true
};
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getLimitedViews(minDetail, maxDetail) {
  return allViews2.slice(allViews2.indexOf(minDetail), allViews2.indexOf(maxDetail) + 1);
}
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
function getValueType(view) {
  var index = allViews2.indexOf(view);
  return allValueTypes[index];
}
function getValue(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a2, index) {
  var value = _a2.value, minDate = _a2.minDate, maxDate = _a2.maxDate, maxDetail = _a2.maxDetail;
  var valuePiece = getValue(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function() {
    switch (index) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
  return [getDetailValueFrom, getDetailValueTo].map(function(fn) {
    return fn(args);
  });
};
function getActiveStartDate(props) {
  var maxDate = props.maxDate, maxDetail = props.maxDetail, minDate = props.minDate, minDetail = props.minDetail, value = props.value, view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value,
    minDate,
    maxDate,
    maxDetail
  }) || /* @__PURE__ */ new Date();
  return getBegin(rangeType, valueFrom);
}
function getInitialActiveStartDate(props) {
  var activeStartDate = props.activeStartDate, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, maxDetail = props.maxDetail, minDetail = props.minDetail, value = props.value, view = props.view, otherProps = __rest10(props, ["activeStartDate", "defaultActiveStartDate", "defaultValue", "defaultView", "maxDetail", "minDetail", "value", "view"]);
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }
  return getActiveStartDate(__assign17({ maxDetail, minDetail, value: value || defaultValue, view: view || defaultView }, otherProps));
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
var isActiveStartDate = import_prop_types16.default.instanceOf(Date);
var isValue2 = import_prop_types16.default.oneOfType([import_prop_types16.default.string, import_prop_types16.default.instanceOf(Date)]);
var isValueOrValueArray = import_prop_types16.default.oneOfType([isValue2, import_prop_types16.default.arrayOf(isValue2)]);
var Calendar = (
  /** @class */
  function(_super) {
    __extends2(Calendar2, _super);
    function Calendar2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        activeStartDate: _this.props.defaultActiveStartDate,
        hover: null,
        value: Array.isArray(_this.props.defaultValue) ? _this.props.defaultValue.map(function(el) {
          return el !== null ? toDate(el) : el;
        }) : _this.props.defaultValue !== null && _this.props.defaultValue !== void 0 ? toDate(_this.props.defaultValue) : _this.props.defaultValue,
        view: _this.props.defaultView
      };
      _this.setStateAndCallCallbacks = function(nextState, event, callback) {
        var _a2 = _this, previousActiveStartDate = _a2.activeStartDate, previousView = _a2.view;
        var _b = _this.props, allowPartialRange = _b.allowPartialRange, onActiveStartDateChange = _b.onActiveStartDateChange, onChange = _b.onChange, onViewChange = _b.onViewChange, selectRange = _b.selectRange;
        var prevArgs = {
          action: void 0,
          activeStartDate: previousActiveStartDate,
          value: void 0,
          view: previousView
        };
        _this.setState(nextState, function() {
          var args = {
            action: nextState.action,
            activeStartDate: nextState.activeStartDate || _this.activeStartDate,
            value: "value" in nextState && nextState.value || _this.value,
            view: "view" in nextState && nextState.view || _this.view
          };
          function shouldUpdate(key) {
            if (!(key in nextState)) {
              return false;
            }
            var nextValue = nextState[key];
            var prevValue = prevArgs[key];
            if (typeof nextValue !== typeof prevValue) {
              return true;
            }
            if (nextValue instanceof Date && prevValue instanceof Date) {
              return nextValue.getTime() !== prevValue.getTime();
            } else {
              return nextValue !== prevValue;
            }
          }
          if (shouldUpdate("activeStartDate")) {
            if (onActiveStartDateChange)
              onActiveStartDateChange(args);
          }
          if (shouldUpdate("view")) {
            if (onViewChange)
              onViewChange(args);
          }
          if (shouldUpdate("value")) {
            if (onChange) {
              if (!event) {
                throw new Error("event is required");
              }
              if (selectRange) {
                var isSingleValue = getIsSingleValue(nextState.value);
                if (!isSingleValue) {
                  onChange(nextState.value || null, event);
                } else if (allowPartialRange) {
                  if (Array.isArray(nextState.value)) {
                    throw new Error("value must not be an array");
                  }
                  onChange([nextState.value || null, null], event);
                }
              } else {
                onChange(nextState.value || null, event);
              }
            }
          }
          if (callback)
            callback(args);
        });
      };
      _this.setActiveStartDate = function(nextActiveStartDate, action) {
        _this.setStateAndCallCallbacks({
          action,
          activeStartDate: nextActiveStartDate
        });
      };
      _this.drillDown = function(nextActiveStartDate, event) {
        if (!_this.drillDownAvailable) {
          return;
        }
        _this.onClickTile(nextActiveStartDate, event);
        var _a2 = _this, view = _a2.view, views = _a2.views;
        var onDrillDown = _this.props.onDrillDown;
        var nextView = views[views.indexOf(view) + 1];
        if (!nextView) {
          throw new Error("Attempted to drill down from the lowest view.");
        }
        _this.setStateAndCallCallbacks({
          action: "drillDown",
          activeStartDate: nextActiveStartDate,
          view: nextView
        }, void 0, onDrillDown);
      };
      _this.drillUp = function() {
        if (!_this.drillUpAvailable) {
          return;
        }
        var _a2 = _this, activeStartDate = _a2.activeStartDate, view = _a2.view, views = _a2.views;
        var onDrillUp = _this.props.onDrillUp;
        var nextView = views[views.indexOf(view) - 1];
        if (!nextView) {
          throw new Error("Attempted to drill up from the highest view.");
        }
        var nextActiveStartDate = getBegin(nextView, activeStartDate);
        _this.setStateAndCallCallbacks({
          action: "drillUp",
          activeStartDate: nextActiveStartDate,
          view: nextView
        }, void 0, onDrillUp);
      };
      _this.onChange = function(value, event) {
        var previousValue = _this.value;
        var _a2 = _this.props, goToRangeStartOnSelect = _a2.goToRangeStartOnSelect, selectRange = _a2.selectRange;
        _this.onClickTile(value, event);
        var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
        var nextValue;
        if (selectRange) {
          var valueType = _this.valueType;
          if (isFirstValueInRange) {
            nextValue = getBegin(valueType, value);
          } else {
            if (!previousValue) {
              throw new Error("previousValue is required");
            }
            if (Array.isArray(previousValue)) {
              throw new Error("previousValue must not be an array");
            }
            nextValue = getValueRange(valueType, previousValue, value);
          }
        } else {
          nextValue = _this.getProcessedValue(value);
        }
        var nextActiveStartDate = (
          // Range selection turned off
          !selectRange || // Range selection turned on, first value
          isFirstValueInRange || // Range selection turned on, second value, goToRangeStartOnSelect toggled on
          goToRangeStartOnSelect ? getActiveStartDate(__assign17(__assign17({}, _this.props), { value: nextValue })) : null
        );
        event.persist();
        _this.setStateAndCallCallbacks({
          action: "onChange",
          activeStartDate: nextActiveStartDate,
          value: nextValue
        }, event);
      };
      _this.onClickTile = function(value, event) {
        var view = _this.view;
        var _a2 = _this.props, onClickDay = _a2.onClickDay, onClickDecade = _a2.onClickDecade, onClickMonth = _a2.onClickMonth, onClickYear = _a2.onClickYear;
        var callback = function() {
          switch (view) {
            case "century":
              return onClickDecade;
            case "decade":
              return onClickYear;
            case "year":
              return onClickMonth;
            case "month":
              return onClickDay;
            default:
              throw new Error("Invalid view: ".concat(view, "."));
          }
        }();
        if (callback)
          callback(value, event);
      };
      _this.onMouseOver = function(value) {
        _this.setState(function(prevState) {
          if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
            return null;
          }
          return { hover: value };
        });
      };
      _this.onMouseLeave = function() {
        _this.setState({ hover: null });
      };
      return _this;
    }
    Object.defineProperty(Calendar2.prototype, "activeStartDate", {
      get: function() {
        var activeStartDateProps = this.props.activeStartDate;
        var activeStartDateState = this.state.activeStartDate;
        return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "value", {
      get: function() {
        var _a2 = this.props, selectRange = _a2.selectRange, valueProps = _a2.value;
        var valueState = this.state.value;
        var rawValue = function() {
          if (selectRange && getIsSingleValue(valueState)) {
            return valueState;
          }
          return valueProps !== void 0 ? valueProps : valueState;
        }();
        if (!rawValue) {
          return null;
        }
        return Array.isArray(rawValue) ? rawValue.map(function(el) {
          return el !== null ? toDate(el) : el;
        }) : rawValue !== null ? toDate(rawValue) : rawValue;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "valueType", {
      get: function() {
        var maxDetail = this.props.maxDetail;
        return getValueType(maxDetail);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "view", {
      get: function() {
        var _a2 = this.props, minDetail = _a2.minDetail, maxDetail = _a2.maxDetail, viewProps = _a2.view;
        var viewState = this.state.view;
        return getView(viewProps || viewState, minDetail, maxDetail);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "views", {
      get: function() {
        var _a2 = this.props, minDetail = _a2.minDetail, maxDetail = _a2.maxDetail;
        return getLimitedViews(minDetail, maxDetail);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "hover", {
      get: function() {
        var selectRange = this.props.selectRange;
        var hover = this.state.hover;
        return selectRange ? hover : null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "drillDownAvailable", {
      get: function() {
        var _a2 = this, view = _a2.view, views = _a2.views;
        return views.indexOf(view) < views.length - 1;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Calendar2.prototype, "drillUpAvailable", {
      get: function() {
        var _a2 = this, view = _a2.view, views = _a2.views;
        return views.indexOf(view) > 0;
      },
      enumerable: false,
      configurable: true
    });
    Calendar2.prototype.getProcessedValue = function(value) {
      var _a2 = this.props, minDate = _a2.minDate, maxDate = _a2.maxDate, maxDetail = _a2.maxDetail, returnValue = _a2.returnValue;
      var processFunction = function() {
        switch (returnValue) {
          case "start":
            return getDetailValueFrom;
          case "end":
            return getDetailValueTo;
          case "range":
            return getDetailValueArray;
          default:
            throw new Error("Invalid returnValue.");
        }
      }();
      return processFunction({
        value,
        minDate,
        maxDate,
        maxDetail
      });
    };
    Calendar2.prototype.renderContent = function(next) {
      var _a2 = this, currentActiveStartDate = _a2.activeStartDate, onMouseOver = _a2.onMouseOver, valueType = _a2.valueType, value = _a2.value, view = _a2.view;
      var _b = this.props, calendarType = _b.calendarType, locale = _b.locale, maxDate = _b.maxDate, minDate = _b.minDate, selectRange = _b.selectRange, tileClassName = _b.tileClassName, tileContent = _b.tileContent, tileDisabled = _b.tileDisabled;
      var hover = this.hover;
      var activeStartDate = next ? getBeginNext(view, currentActiveStartDate) : getBegin(view, currentActiveStartDate);
      var onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
      var commonProps = {
        activeStartDate,
        hover,
        locale,
        maxDate,
        minDate,
        onClick,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName,
        tileContent,
        tileDisabled,
        value,
        valueType
      };
      switch (view) {
        case "century": {
          var formatYear2 = this.props.formatYear;
          return import_react20.default.createElement(CenturyView, __assign17({ formatYear: formatYear2 }, commonProps));
        }
        case "decade": {
          var formatYear2 = this.props.formatYear;
          return import_react20.default.createElement(DecadeView, __assign17({ formatYear: formatYear2 }, commonProps));
        }
        case "year": {
          var _c = this.props, formatMonth2 = _c.formatMonth, formatMonthYear2 = _c.formatMonthYear;
          return import_react20.default.createElement(YearView, __assign17({ formatMonth: formatMonth2, formatMonthYear: formatMonthYear2 }, commonProps));
        }
        case "month": {
          var _d = this.props, formatDay2 = _d.formatDay, formatLongDate2 = _d.formatLongDate, formatShortWeekday2 = _d.formatShortWeekday, formatWeekday2 = _d.formatWeekday, onClickWeekNumber = _d.onClickWeekNumber, showDoubleView = _d.showDoubleView, showFixedNumberOfWeeks = _d.showFixedNumberOfWeeks, showNeighboringMonth = _d.showNeighboringMonth, showWeekNumbers = _d.showWeekNumbers;
          var onMouseLeave = this.onMouseLeave;
          return import_react20.default.createElement(MonthView, __assign17({ calendarType, formatDay: formatDay2, formatLongDate: formatLongDate2, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : null, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== "undefined" ? showFixedNumberOfWeeks : showDoubleView, showNeighboringMonth, showWeekNumbers }, commonProps));
        }
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    };
    Calendar2.prototype.renderNavigation = function() {
      var showNavigation = this.props.showNavigation;
      if (!showNavigation) {
        return null;
      }
      var _a2 = this, activeStartDate = _a2.activeStartDate, view = _a2.view, views = _a2.views;
      var _b = this.props, formatMonthYear2 = _b.formatMonthYear, formatYear2 = _b.formatYear, locale = _b.locale, maxDate = _b.maxDate, minDate = _b.minDate, navigationAriaLabel = _b.navigationAriaLabel, navigationAriaLive = _b.navigationAriaLive, navigationLabel = _b.navigationLabel, next2AriaLabel = _b.next2AriaLabel, next2Label = _b.next2Label, nextAriaLabel = _b.nextAriaLabel, nextLabel = _b.nextLabel, prev2AriaLabel = _b.prev2AriaLabel, prev2Label = _b.prev2Label, prevAriaLabel = _b.prevAriaLabel, prevLabel = _b.prevLabel, showDoubleView = _b.showDoubleView;
      return import_react20.default.createElement(Navigation, { activeStartDate, drillUp: this.drillUp, formatMonthYear: formatMonthYear2, formatYear: formatYear2, locale, maxDate, minDate, navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, setActiveStartDate: this.setActiveStartDate, showDoubleView, view, views });
    };
    Calendar2.prototype.render = function() {
      var _a2 = this.props, className8 = _a2.className, inputRef = _a2.inputRef, selectRange = _a2.selectRange, showDoubleView = _a2.showDoubleView;
      var _b = this, onMouseLeave = _b.onMouseLeave, value = _b.value;
      var valueArray = Array.isArray(value) ? value : [value];
      return import_react20.default.createElement(
        "div",
        { className: clsx_m_default(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className8), ref: inputRef },
        this.renderNavigation(),
        import_react20.default.createElement(
          "div",
          { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : void 0, onMouseLeave: selectRange ? onMouseLeave : void 0 },
          this.renderContent(),
          showDoubleView ? this.renderContent(true) : null
        )
      );
    };
    Calendar2.defaultProps = defaultProps;
    Calendar2.propTypes = {
      activeStartDate: isActiveStartDate,
      allowPartialRange: import_prop_types16.default.bool,
      calendarType: isCalendarType,
      className: isClassName,
      defaultActiveStartDate: isActiveStartDate,
      defaultValue: isValueOrValueArray,
      defaultView: isView,
      formatDay: import_prop_types16.default.func,
      formatLongDate: import_prop_types16.default.func,
      formatMonth: import_prop_types16.default.func,
      formatMonthYear: import_prop_types16.default.func,
      formatShortWeekday: import_prop_types16.default.func,
      formatWeekday: import_prop_types16.default.func,
      formatYear: import_prop_types16.default.func,
      goToRangeStartOnSelect: import_prop_types16.default.bool,
      inputRef: isRef,
      locale: import_prop_types16.default.string,
      maxDate: isMaxDate,
      maxDetail: import_prop_types16.default.oneOf(allViews2),
      minDate: isMinDate,
      minDetail: import_prop_types16.default.oneOf(allViews2),
      navigationAriaLabel: import_prop_types16.default.string,
      navigationAriaLive: import_prop_types16.default.oneOf(["off", "polite", "assertive"]),
      navigationLabel: import_prop_types16.default.func,
      next2AriaLabel: import_prop_types16.default.string,
      next2Label: import_prop_types16.default.node,
      nextAriaLabel: import_prop_types16.default.string,
      nextLabel: import_prop_types16.default.node,
      onActiveStartDateChange: import_prop_types16.default.func,
      onChange: import_prop_types16.default.func,
      onClickDay: import_prop_types16.default.func,
      onClickDecade: import_prop_types16.default.func,
      onClickMonth: import_prop_types16.default.func,
      onClickWeekNumber: import_prop_types16.default.func,
      onClickYear: import_prop_types16.default.func,
      onDrillDown: import_prop_types16.default.func,
      onDrillUp: import_prop_types16.default.func,
      onViewChange: import_prop_types16.default.func,
      prev2AriaLabel: import_prop_types16.default.string,
      prev2Label: import_prop_types16.default.node,
      prevAriaLabel: import_prop_types16.default.string,
      prevLabel: import_prop_types16.default.node,
      returnValue: import_prop_types16.default.oneOf(["start", "end", "range"]),
      selectRange: import_prop_types16.default.bool,
      showDoubleView: import_prop_types16.default.bool,
      showFixedNumberOfWeeks: import_prop_types16.default.bool,
      showNavigation: import_prop_types16.default.bool,
      showNeighboringMonth: import_prop_types16.default.bool,
      showWeekNumbers: import_prop_types16.default.bool,
      tileClassName: import_prop_types16.default.oneOfType([import_prop_types16.default.func, isClassName]),
      tileContent: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.node]),
      tileDisabled: import_prop_types16.default.func,
      value: isValueOrValueArray,
      view: isView
    };
    return Calendar2;
  }(import_react20.Component)
);
var Calendar_default = Calendar;

// node_modules/react-calendar/dist/esm/index.js
var esm_default2 = Calendar_default;
export {
  Calendar_default as Calendar,
  CenturyView,
  DecadeView,
  MonthView,
  Navigation,
  YearView,
  esm_default2 as default
};
//# sourceMappingURL=react-calendar.js.map