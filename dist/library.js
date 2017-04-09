(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.library = factory());
}(this, (function () { 'use strict';

var title = (function (document) {
  return document.title;
});

var index = (function (document) {
  return title(document);
});

return index;

})));
