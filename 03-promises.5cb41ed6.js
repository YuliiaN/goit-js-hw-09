!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var r=t("iU1Pc").Notify,i={form:document.querySelector("form"),delay:document.querySelector(".js-delay"),step:document.querySelector(".js-step"),amount:document.querySelector(".js-amount")};function u(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=0;n<i.amount.value;n++){var o=i.step.value*n;u(n+1,+i.delay.value+o).then((function(e){var n=e.position,o=e.delay;return r.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;return r.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.5cb41ed6.js.map
