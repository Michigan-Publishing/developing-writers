/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		29: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		29: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"3":"component---cache-gatsby-mdx-mdx-wrappers-dir-3-f-626850903-c-353-a-16818-b-6-c-0-f-9-c-6-f-30-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js","4":"component---node-modules-gatsby-plugin-offline-app-shell-js","5":"component---src-pages-2018-11-26-writing-involves-choices-mdx","6":"component---src-pages-2018-11-27-how-can-teachers-help-students-make-the-most-of-writing-instruction-mdx","7":"component---src-pages-2018-11-27-how-do-phrases-and-sentences-create-a-reader-experience-mdx","8":"component---src-pages-2018-11-27-how-do-we-choose-our-words-phrases-sentences-and-why-does-it-matter-mdx","9":"component---src-pages-2018-11-27-how-do-we-write-in-the-digital-age-mdx","10":"component---src-pages-2018-11-27-how-do-writers-compose-in-the-digital-age-mdx","11":"component---src-pages-2018-11-27-what-is-multimodal-composition-and-where-do-people-encounter-it-mdx","12":"component---src-pages-2018-11-27-what-is-word-choice-and-why-does-it-matter-mdx","13":"component---src-pages-2018-11-27-when-would-writers-use-multimodal-composition-mdx","14":"component---src-pages-2018-11-27-why-do-choices-in-writing-matter-mdx","15":"component---src-pages-2018-11-28-how-do-writers-respond-to-audience-expectations-mdx","16":"component---src-pages-2018-11-28-how-does-making-choices-help-developing-writers-mdx","17":"component---src-pages-2018-11-28-what-does-it-mean-to-write-for-an-audience-mdx","18":"component---src-pages-2018-12-19-about-the-authors-mdx","19":"component---src-pages-2018-12-20-about-the-study-mdx","20":"component---src-pages-2018-12-28-about-mdx","21":"component---src-pages-how-does-feedback-from-others-help-mdx","22":"component---src-pages-how-does-feedback-work-mdx","23":"component---src-pages-how-is-writing-a-social-activity-mdx","24":"component---src-pages-index-js","25":"component---src-pages-what-can-feedback-do-mdx","26":"component---src-pages-what-can-writers-do-to-make-feedback-productive-mdx","27":"component---src-pages-what-is-feedback-mdx","28":"component---src-pages-writing-is-social-mdx"}[chunkId]||chunkId) + "-" + {"0":"7d004f24f5e7b1a39e8f","1":"4679c7e81680d77a5866","3":"473d6a8ee2d59ba5a196","4":"fdc070447b0795ac035b","5":"52eef2f2e59869b400a9","6":"ae099dd26a9faf67a3af","7":"c4840f101e78dce7304b","8":"86d5cde82f23c090f4aa","9":"d106f4ec5068df8547bc","10":"0927e9e7ff6b4f8ee882","11":"7dd070fb07bafb48f00f","12":"54e6f929102d1efeea21","13":"709d6760de3daae9ca12","14":"43b0cc46ba683d0d9532","15":"bfd77d1f15b89cb985ef","16":"78a1a6fe65b515b77ec0","17":"520d53ec7741781cb4c5","18":"bba515118ef904707041","19":"a7396d1f2695121f8782","20":"522c39f6986c60091705","21":"b09e1235ca633f4e0fa3","22":"2e4d0f18af0e9b8c4ffb","23":"7af31e66633047faef73","24":"2dac29c330106e379990","25":"6626f9f9f9a6fd01059f","26":"5462864d60770a9d4117","27":"f525b652f441b0c5bb78","28":"c6bc347490af2ef57119","30":"0dafd9c0e13f5afb39d1","31":"91a937ca88c3359f8129"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"30":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"3":"component---cache-gatsby-mdx-mdx-wrappers-dir-3-f-626850903-c-353-a-16818-b-6-c-0-f-9-c-6-f-30-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js","4":"component---node-modules-gatsby-plugin-offline-app-shell-js","5":"component---src-pages-2018-11-26-writing-involves-choices-mdx","6":"component---src-pages-2018-11-27-how-can-teachers-help-students-make-the-most-of-writing-instruction-mdx","7":"component---src-pages-2018-11-27-how-do-phrases-and-sentences-create-a-reader-experience-mdx","8":"component---src-pages-2018-11-27-how-do-we-choose-our-words-phrases-sentences-and-why-does-it-matter-mdx","9":"component---src-pages-2018-11-27-how-do-we-write-in-the-digital-age-mdx","10":"component---src-pages-2018-11-27-how-do-writers-compose-in-the-digital-age-mdx","11":"component---src-pages-2018-11-27-what-is-multimodal-composition-and-where-do-people-encounter-it-mdx","12":"component---src-pages-2018-11-27-what-is-word-choice-and-why-does-it-matter-mdx","13":"component---src-pages-2018-11-27-when-would-writers-use-multimodal-composition-mdx","14":"component---src-pages-2018-11-27-why-do-choices-in-writing-matter-mdx","15":"component---src-pages-2018-11-28-how-do-writers-respond-to-audience-expectations-mdx","16":"component---src-pages-2018-11-28-how-does-making-choices-help-developing-writers-mdx","17":"component---src-pages-2018-11-28-what-does-it-mean-to-write-for-an-audience-mdx","18":"component---src-pages-2018-12-19-about-the-authors-mdx","19":"component---src-pages-2018-12-20-about-the-study-mdx","20":"component---src-pages-2018-12-28-about-mdx","21":"component---src-pages-how-does-feedback-from-others-help-mdx","22":"component---src-pages-how-does-feedback-work-mdx","23":"component---src-pages-how-is-writing-a-social-activity-mdx","24":"component---src-pages-index-js","25":"component---src-pages-what-can-feedback-do-mdx","26":"component---src-pages-what-can-writers-do-to-make-feedback-productive-mdx","27":"component---src-pages-what-is-feedback-mdx","28":"component---src-pages-writing-is-social-mdx"}[chunkId]||chunkId) + "." + {"0":"31d6cfe0d16ae931b73c","1":"c7dc8abd01dda0fa2848","3":"31d6cfe0d16ae931b73c","4":"31d6cfe0d16ae931b73c","5":"31d6cfe0d16ae931b73c","6":"31d6cfe0d16ae931b73c","7":"31d6cfe0d16ae931b73c","8":"31d6cfe0d16ae931b73c","9":"31d6cfe0d16ae931b73c","10":"31d6cfe0d16ae931b73c","11":"31d6cfe0d16ae931b73c","12":"31d6cfe0d16ae931b73c","13":"31d6cfe0d16ae931b73c","14":"31d6cfe0d16ae931b73c","15":"31d6cfe0d16ae931b73c","16":"31d6cfe0d16ae931b73c","17":"31d6cfe0d16ae931b73c","18":"31d6cfe0d16ae931b73c","19":"31d6cfe0d16ae931b73c","20":"31d6cfe0d16ae931b73c","21":"31d6cfe0d16ae931b73c","22":"31d6cfe0d16ae931b73c","23":"31d6cfe0d16ae931b73c","24":"31d6cfe0d16ae931b73c","25":"31d6cfe0d16ae931b73c","26":"31d6cfe0d16ae931b73c","27":"31d6cfe0d16ae931b73c","28":"31d6cfe0d16ae931b73c","30":"3c09133930ce096487b3","31":"31d6cfe0d16ae931b73c"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=webpack-runtime-872df9e81ad0afb38fec.js.map