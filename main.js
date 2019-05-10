(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ng-playground/src/lib/components/abstract/abstract.component.html":
/*!****************************************************************************!*\
  !*** ../ng-playground/src/lib/components/abstract/abstract.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../ng-playground/src/lib/components/abstract/abstract.component.sass":
/*!****************************************************************************!*\
  !*** ../ng-playground/src/lib/components/abstract/abstract.component.sass ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1wbGF5Z3JvdW5kL3NyYy9saWIvY29tcG9uZW50cy9hYnN0cmFjdC9hYnN0cmFjdC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "../ng-playground/src/lib/components/abstract/abstract.component.ts":
/*!**************************************************************************!*\
  !*** ../ng-playground/src/lib/components/abstract/abstract.component.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
    }
    AbstractComponent.prototype.ngOnInit = function () {
    };
    AbstractComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(/*! ./abstract.component.html */ "../ng-playground/src/lib/components/abstract/abstract.component.html"),
            styles: [__webpack_require__(/*! ./abstract.component.sass */ "../ng-playground/src/lib/components/abstract/abstract.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AbstractComponent);
    return AbstractComponent;
}());
exports.AbstractComponent = AbstractComponent;


/***/ }),

/***/ "../ng-playground/src/lib/components/playground/playground.component.html":
/*!********************************************************************************!*\
  !*** ../ng-playground/src/lib/components/playground/playground.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <iw-tree #treeComponent [tree]=\"tree\" class=\"menu-tree\">\n    <ng-template iwTreeNodeTemplate let-node let-depth=\"depth\">\n      <a [routerLink]=\"node.data.routerLink\"\n        [ngStyle]=\"getLinkStyle(depth)\"\n        [routerLinkActive]=\"'active'\"\n        [routerLinkActiveOptions]=\"{ exact: true }\"\n        [iwTreeItem]=\"node\"\n        (click)=\"treeComponent.expandItem(node)\"\n      >\n      <button\n        [style.visibility]=\"treeComponent.hasChildren(node) ? 'visible' : 'hidden'\"\n        (click)=\"toggleExpand(treeComponent, node, $event)\"\n      >\n        <ng-container *ngIf=\"treeComponent.isExpanded(node)\">&#9660;</ng-container>\n        <ng-container *ngIf=\"!treeComponent.isExpanded(node)\">&#9658;</ng-container>\n      </button>{{node.data.title}}</a>\n    </ng-template>\n  </iw-tree>\n</nav>\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../ng-playground/src/lib/components/playground/playground.component.sass":
/*!********************************************************************************!*\
  !*** ../ng-playground/src/lib/components/playground/playground.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: row;\n  height: 100%; }\n  :host .cleanslate, :host h1, :host h2, :host h3, :host h4, :host h5, :host h6, :host p, :host td, :host dl, :host tr, :host dt, :host ol, :host form, :host select, :host option, :host pre, :host div, :host table, :host th, :host tbody, :host tfoot, :host caption, :host thead, :host ul, :host li, :host address, :host blockquote, :host dd, :host fieldset, :host li, :host iframe, :host strong, :host legend, :host em, :host summary, :host cite, :host span, :host input, :host sup, :host label, :host dfn, :host object, :host big, :host q, :host samp, :host acronym, :host small, :host img, :host strike, :host code, :host sub, :host ins, :host textarea, :host button, :host var, :host a, :host abbr, :host applet, :host del, :host kbd, :host tt, :host b, :host i, :host hr,\n  :host article, :host aside, :host figure, :host figcaption, :host footer, :host header, :host menu, :host nav, :host section, :host time, :host mark, :host audio, :host video, :host abbr, :host address, :host area, :host blockquote, :host canvas, :host caption, :host cite, :host code, :host colgroup, :host col, :host datalist, :host fieldset, :host main, :host map, :host meta, :host optgroup, :host output, :host progress, :host svg {\n    background-attachment: scroll;\n    background-color: transparent;\n    background-image: none;\n    background-position: 0 0;\n    background-repeat: repeat;\n    border-color: black;\n    border-color: currentColor;\n    border-radius: 0;\n    border-style: none;\n    border-width: medium;\n    bottom: auto;\n    clear: none;\n    clip: auto;\n    color: inherit;\n    counter-increment: none;\n    counter-reset: none;\n    cursor: auto;\n    direction: inherit;\n    display: inline;\n    float: none;\n    font-family: inherit;\n    font-size: inherit;\n    font-style: inherit;\n    font-variant: normal;\n    font-weight: inherit;\n    height: auto;\n    left: auto;\n    letter-spacing: normal;\n    line-height: inherit;\n    list-style-type: inherit;\n    list-style-position: outside;\n    list-style-image: none;\n    margin: 0;\n    max-height: none;\n    max-width: none;\n    min-height: 0;\n    min-width: 0;\n    opacity: 1;\n    outline: invert none medium;\n    overflow: visible;\n    padding: 0;\n    position: static;\n    quotes: \"\" \"\";\n    right: auto;\n    table-layout: auto;\n    text-align: inherit;\n    text-decoration: inherit;\n    text-indent: 0;\n    text-transform: none;\n    top: auto;\n    unicode-bidi: normal;\n    vertical-align: baseline;\n    visibility: inherit;\n    white-space: normal;\n    width: auto;\n    word-spacing: normal;\n    z-index: auto;\n    -webkit-background-origin: padding-box;\n      -webkit-background-origin-background-origin: padding-box;\n    -webkit-background-clip: border-box;\n      -webkit-background-clip-background-clip: border-box;\n    -webkit-background-size: auto;\n    -moz-background-size: auto;\n      -moz-background-size-background-size: auto;\n    -webkit-border-image: none;\n    -moz-border-image: none;\n      -moz-border-image--o-border-image: none;\n        -moz-border-image--o-border-image-border-image: none;\n    -webkit-border-radius: 0;\n    -moz-border-radius: 0;\n      -moz-border-radius-border-radius: 0;\n    -webkit-box-shadow: none;\n      -webkit-box-shadow-box-shadow: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n      -moz-box-sizing-box-sizing: content-box;\n    -webkit-column-count: auto;\n    -moz-column-count: auto;\n      -moz-column-count-column-count: auto;\n    -webkit-column-gap: normal;\n    -moz-column-gap: normal;\n      -moz-column-gap-column-gap: normal;\n    -webkit-column-rule: medium none black;\n    -moz-column-rule: medium none black;\n      -moz-column-rule-column-rule: medium none black;\n    -webkit-column-span: 1;\n    -moz-column-span: 1;\n      -moz-column-span-column-span: 1;\n    -webkit-column-width: auto;\n    -moz-column-width: auto;\n      -moz-column-width-column-width: auto;\n    -webkit-font-feature-settings: normal;\n            font-feature-settings: normal;\n    overflow-x: visible;\n    overflow-y: visible;\n    -webkit-hyphens: manual;\n    -moz-hyphens: manual;\n      -moz-hyphens-hyphens: manual;\n    -webkit-perspective: none;\n    -moz-perspective: none;\n      -moz-perspective--ms-perspective: none;\n      -moz-perspective--o-perspective: none;\n        -moz-perspective--o-perspective-perspective: none;\n    -webkit-perspective-origin: 50% 50%;\n    -moz-perspective-origin: 50% 50%;\n      -moz-perspective-origin--ms-perspective-origin: 50% 50%;\n      -moz-perspective-origin--o-perspective-origin: 50% 50%;\n        -moz-perspective-origin--o-perspective-origin-perspective-origin: 50% 50%;\n    -webkit-backface-visibility: visible;\n    -moz-backface-visibility: visible;\n      -moz-backface-visibility--ms-backface-visibility: visible;\n      -moz-backface-visibility--o-backface-visibility: visible;\n        -moz-backface-visibility--o-backface-visibility-backface-visibility: visible;\n    text-shadow: none;\n    -webkit-transition: all 0s ease 0s;\n      -webkit-transition-transition: all 0s ease 0s;\n    -webkit-transform: none;\n    -moz-transform: none;\n      -moz-transform--ms-transform: none;\n      -moz-transform--o-transform: none;\n        -moz-transform--o-transform-transform: none;\n    -webkit-transform-origin: 50% 50%;\n    -moz-transform-origin: 50% 50%;\n      -moz-transform-origin--ms-transform-origin: 50% 50%;\n      -moz-transform-origin--o-transform-origin: 50% 50%;\n        -moz-transform-origin--o-transform-origin-transform-origin: 50% 50%;\n    -webkit-transform-style: flat;\n    -moz-transform-style: flat;\n      -moz-transform-style--ms-transform-style: flat;\n      -moz-transform-style--o-transform-style: flat;\n        -moz-transform-style--o-transform-style-transform-style: flat;\n    word-break: normal; }\n  :host .cleanslate, :host h3, :host h5, :host p, :host h1, :host dl, :host dt, :host h6, :host ol, :host form, :host option, :host pre, :host div, :host h2, :host caption, :host h4, :host ul, :host address, :host blockquote, :host dd, :host fieldset, :host hr,\n  :host article, :host dialog, :host figure, :host footer, :host header, :host hgroup, :host menu, :host nav, :host section, :host audio, :host video, :host address, :host blockquote, :host colgroup, :host main, :host progress, :host summary {\n    display: block; }\n  :host h1, :host h2, :host h3, :host h4, :host h5, :host h6 {\n    font-weight: bold; }\n  :host h1 {\n    font-size: 2em;\n    padding: .67em 0; }\n  :host h2 {\n    font-size: 1.5em;\n    padding: .83em 0; }\n  :host h3 {\n    font-size: 1.17em;\n    padding: .83em 0; }\n  :host h4 {\n    font-size: 1em; }\n  :host h5 {\n    font-size: .83em; }\n  :host p {\n    margin: 1em 0; }\n  :host table {\n    display: table; }\n  :host thead {\n    display: table-header-group; }\n  :host tbody {\n    display: table-row-group; }\n  :host tfoot {\n    display: table-footer-group; }\n  :host tr {\n    display: table-row; }\n  :host th, :host td {\n    display: table-cell;\n    padding: 2px; }\n  :host ol, :host ul {\n    margin: 1em 0; }\n  :host ul li, :host ul ul li, :host ul ul ul li, :host ol li, :host ol ol li, :host ol ol ol li, :host ul ol ol li, :host ul ul ol li, :host ol ul ul li, :host ol ol ul li {\n    list-style-position: inside;\n    margin-top: .08em; }\n  :host ol ol, :host ol ol ol, :host ul ul, :host ul ul ul, :host ol ul, :host ol ul ul, :host ol ol ul, :host ul ol, :host ul ol ol, :host ul ul ol {\n    padding-left: 40px;\n    margin: 0; }\n  :host nav ul, :host nav ol {\n    list-style-type: none; }\n  :host ul, :host menu {\n    list-style-type: disc; }\n  :host ol {\n    list-style-type: decimal; }\n  :host ol ul, :host ul ul, :host menu ul, :host ol menu, :host ul menu, :host menu menu {\n    list-style-type: circle; }\n  :host ol ol ul, :host ol ul ul, :host ol menu ul, :host ol ol menu, :host ol ul menu, :host ol menu menu, :host ul ol ul, :host ul ul ul, :host ul menu ul, :host ul ol menu, :host ul ul menu, :host ul menu menu, :host menu ol ul, :host menu ul ul, :host menu menu ul, :host menu ol menu, :host menu ul menu, :host menu menu menu {\n    list-style-type: square; }\n  :host li {\n    display: list-item;\n    min-height: auto;\n    min-width: auto;\n    padding-left: 20px; }\n  :host strong {\n    font-weight: bold; }\n  :host em {\n    font-style: italic; }\n  :host kbd, :host samp, :host code, :host pre {\n    font-family: monospace; }\n  :host a {\n    color: blue;\n    text-decoration: underline; }\n  :host a:visited {\n    color: #529; }\n  :host a, :host a *, :host input[type=submit], :host input[type=button], :host input[type=radio], :host input[type=checkbox], :host select, :host button {\n    cursor: pointer; }\n  :host button, :host input[type=submit] {\n    text-align: center;\n    padding: 2px 6px 3px;\n    border-radius: 4px;\n    text-decoration: none;\n    font-family: arial, helvetica, sans-serif;\n    font-size: small;\n    background: white;\n    -webkit-appearance: push-button;\n    color: buttontext;\n    border: 1px #a6a6a6 solid;\n    background: lightgrey;\n    background: white;\n    background: linear-gradient(to bottom, white 0%, #dddddd 100%, #d1d1d1 100%, #dddddd 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dddddd',GradientType=0 );\n    -webkit-box-shadow: 1px 1px 0px #eee;\n    -moz-box-shadow: 1px 1px 0px #eee;\n      -moz-box-shadow--o-box-shadow: 1px 1px 0px #eee;\n        -moz-box-shadow--o-box-shadow-box-shadow: 1px 1px 0px #eee;\n    outline: initial; }\n  :host button:active, :host input[type=submit]:active, :host input[type=button]:active, :host button:active {\n    background: #3b679e;\n    background: linear-gradient(to bottom, #3b679e 0%, #2b88d9 50%, #207cca 51%, #7db9e8 100%);\n    border-color: #5259b0; }\n  :host button {\n    padding: 1px 6px 2px 6px;\n    margin-right: 5px; }\n  :host input[type=hidden] {\n    display: none; }\n  :host textarea {\n    -webkit-appearance: textarea;\n    background: white;\n    padding: 2px;\n    margin-left: 4px;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    font-size: 11px;\n    font-family: arial, helvetica, sans-serif;\n    line-height: 13px;\n    resize: both; }\n  :host select, :host textarea, :host input {\n    border: 1px solid #ccc; }\n  :host select {\n    font-size: 11px;\n    font-family: helvetica, arial, sans-serif;\n    display: inline-block; }\n  :host textarea:focus, :host input:focus {\n    outline: auto 5px -webkit-focus-ring-color;\n    outline: initial; }\n  :host input[type=text] {\n    background: white;\n    padding: 1px;\n    font-family: initial;\n    font-size: small; }\n  :host input[type=checkbox], :host input[type=radio] {\n    border: 1px #2b2b2b solid;\n    border-radius: 4px; }\n  :host input[type=checkbox], :host input[type=radio] {\n    outline: initial; }\n  :host input[type=radio] {\n    margin: 2px 2px 3px 2px; }\n  :host abbr[title], :host acronym[title], :host dfn[title] {\n    cursor: help;\n    border-bottom-width: 1px;\n    border-bottom-style: dotted; }\n  :host ins {\n    background-color: #ff9;\n    color: black; }\n  :host del {\n    text-decoration: line-through; }\n  :host blockquote, :host q {\n    quotes: none; }\n  :host blockquote:before, :host blockquote:after, :host q:before, :host q:after, :host li:before, :host li:after {\n    content: \"\"; }\n  :host input, :host select {\n    vertical-align: middle; }\n  :host table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  :host hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0; }\n  :host *[dir=rtl] {\n    direction: rtl; }\n  :host mark {\n    background-color: #ff9;\n    color: black;\n    font-style: italic;\n    font-weight: bold; }\n  :host menu {\n    padding-left: 40px;\n    padding-top: 8px; }\n  :host [hidden],\n  :host template {\n    display: none; }\n  :host abbr[title] {\n    border-bottom: 1px dotted; }\n  :host sub, :host sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline; }\n  :host sup {\n    top: -0.5em; }\n  :host sub {\n    bottom: -0.25em; }\n  :host img {\n    border: 0; }\n  :host figure {\n    margin: 0; }\n  :host textarea {\n    overflow: auto;\n    vertical-align: top; }\n  :host pre {\n    white-space: pre; }\n  :host nav {\n    flex: 0 0 auto;\n    width: 200px;\n    height: 100%;\n    background: black;\n    color: white;\n    overflow: auto; }\n  :host main {\n    flex: 1 1;\n    overflow: auto;\n    height: 100%;\n    border: 2px solid grey;\n    padding: 5px; }\n  :host a {\n    display: flex;\n    flex-direction: row;\n    color: white;\n    text-decoration: none;\n    font-size: 12px;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    transition: border-color 0.3s;\n    outline: none; }\n  :host a:visited {\n    color: white; }\n  :host a:hover, :host a:focus {\n    border-color: orange; }\n  :host a.active {\n    border-color: red; }\n  :host button {\n    background: none;\n    box-shadow: none;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    color: white;\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1wbGF5Z3JvdW5kL3Byb2plY3RzL25nLXBsYXlncm91bmQvc3JjL2xpYi9jb21wb25lbnRzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuc2FzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1wbGF5Z3JvdW5kL3Byb2plY3RzL25nLXBsYXlncm91bmQvc3JjL3N0eWxlcy9fY2xlYW5zbGF0ZS5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVDO0VBR0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7RUFMYjs7SUNnQkssNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsb0JB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RUFBQTtFQWpDZjtJQW9DRyxvQkFBb0IsRUFBQTtFQXBDdkI7SUF1Q0csaUJBQWlCLEVBQUE7RUF2Q3BCO0lBMENHLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0JBQWdCO09BQWhCLHFCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVksRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZy1wbGF5Z3JvdW5kL3NyYy9saWIvY29tcG9uZW50cy9wbGF5Z3JvdW5kL3BsYXlncm91bmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NsZWFuc2xhdGVcIjtcblxuIDpob3N0IHtcbiAgQGluY2x1ZGUgY2xlYW5zbGF0ZSgpO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTAwJTtcblxuICBuYXYge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG5cbiAgbWFpbiB7XG4gICAgZmxleDogMSAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xuICAgIHBhZGRpbmc6IDVweDsgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cblxuICBhOmhvdmVyLCBhOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTsgfVxuXG4gIGEuYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDsgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTsgfSB9XG4iLCIvLyBDbGVhblNsYXRlXG4vLyAgIGdpdGh1Yi5jb20vcHJlbWFzYWdhci9jbGVhbnNsYXRlXG4vLyAgICAgQW4gZXh0cmVtZSBDU1MgcmVzZXQgc3R5bGVzaGVldCwgZm9yIG5vcm1hbGlzaW5nIHRoZSBzdHlsaW5nIG9mIGEgY29udGFpbmVyIGVsZW1lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbi8vICAgICBieSBQcmVtYXNhZ2FyIFJvc2Vcbi8vICAgICAgICAgZGhhcm1hZmx5LmNvbVxuLy8gICAgIGxpY2Vuc2Vcbi8vICAgICAgICAgb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4vLyAgICAgdjAuMTAuMVxuXG5cbi8vID09IEJMQU5LRVQgUkVTRVQgUlVMRVMgPT1cbkBtaXhpbiBjbGVhbnNsYXRlKCkge1xuXG4gIC8vIEhUTUwgNC4wMVxuICAuY2xlYW5zbGF0ZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgdGQsIGRsLCB0ciwgZHQsIG9sLCBmb3JtLCBzZWxlY3QsIG9wdGlvbiwgcHJlLCBkaXYsIHRhYmxlLCAgdGgsIHRib2R5LCB0Zm9vdCwgY2FwdGlvbiwgdGhlYWQsIHVsLCBsaSwgYWRkcmVzcywgYmxvY2txdW90ZSwgZGQsIGZpZWxkc2V0LCBsaSwgaWZyYW1lLCBzdHJvbmcsIGxlZ2VuZCwgZW0sIHN1bW1hcnksIGNpdGUsIHNwYW4sIGlucHV0LCBzdXAsIGxhYmVsLCBkZm4sIG9iamVjdCwgYmlnLCBxLCBzYW1wLCBhY3JvbnltLCBzbWFsbCwgaW1nLCBzdHJpa2UsIGNvZGUsIHN1YiwgaW5zLCB0ZXh0YXJlYSwgYnV0dG9uLCB2YXIsIGEsIGFiYnIsIGFwcGxldCwgZGVsLCBrYmQsIHR0LCBiLCBpLCBocixcblxuICAvLyBIVE1MNSAtIFNlcHQgMjAxMyB0YWtlbiBmcm9tIE1ETiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9IVE1ML0hUTUw1L0hUTUw1X2VsZW1lbnRfbGlzdFxuICBhcnRpY2xlLCBhc2lkZSwgZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgbWVudSwgbmF2LCBzZWN0aW9uLCB0aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGFiYnIsIGFkZHJlc3MsIGFyZWEsIGJsb2NrcXVvdGUsIGNhbnZhcywgY2FwdGlvbiwgY2l0ZSwgY29kZSwgY29sZ3JvdXAsIGNvbCwgZGF0YWxpc3QsIGZpZWxkc2V0LCBtYWluLCBtYXAsIG1ldGEsIG9wdGdyb3VwLCBvdXRwdXQsIHByb2dyZXNzLCBzdmcge1xuICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFRoaXMgcnVsZSBhZmZlY3RzIHRoZSB1c2Ugb2YgcG5nZml4IEphdmFTY3JpcHQgaHR0cDovL2RpbGxlcmRlc2lnbi5jb20vZXhwZXJpbWVudC9ERF9CZWxhdGVkUE5HIGZvciBJRTYsIHdoaWNoIGlzIHVzZWQgdG8gZm9yY2UgdGhlIGJyb3dzZXIgdG8gcmVjb2duaXNlIGFscGhhLXRyYW5zcGFyZW50IFBOR3MgZmlsZXMgdGhhdCByZXBsYWNlIHRoZSBJRTYgbGFjayBvZiBQTkcgdHJhbnNwYXJlbmN5LiAoVGhlIHJ1bGUgb3ZlcnJpZGVzIHRoZSBWTUwgaW1hZ2UgdGhhdCBpcyB1c2VkIHRvIHJlcGxhY2UgdGhlIGdpdmVuIENTUyBiYWNrZ3JvdW5kLWltYWdlKS4gSWYgeW91IGRvbid0IGtub3cgd2hhdCB0aGF0IG1lYW5zLCB0aGVuIHlvdSBwcm9iYWJseSBoYXZlbid0IHVzZWQgdGhlIHBuZ2ZpeCBzY3JpcHQsIGFuZCB0aGlzIGNvbW1lbnQgbWF5IGJlIGlnbm9yZWQgOiApXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yOyAvLyBgYm9yZGVyLWNvbG9yYCBzaG91bGQgbWF0Y2ggZm9udCBjb2xvci4gTW9kZXJuIGJyb3dzZXJzIChpbmNsLiBJRTkpIGFsbG93IHRoZSB1c2Ugb2YgXCJjdXJyZW50Q29sb3JcIiB0byBtYXRjaCB0aGUgY3VycmVudCBmb250ICdjb2xvcicgdmFsdWUgPGh0dHA6IC8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNjdXJyZW50Y29sb3I+LiBGb3Igb2xkZXIgYnJvd3NlcnMsIGEgZGVmYXVsdCBvZiAnYmxhY2snIGlzIGdpdmVuYmVmb3JlIHRoaXMgcnVsZS4gR3VpZGVsaW5lIHRvIHN1cHBvcnQgb2xkZXIgYnJvd3NlcnM6IGlmIHlvdSBoYXZlbid0IGFscmVhZHkgZGVjbGFyZWQgYSBib3JkZXItY29sb3IgZm9yIGFuIGVsZW1lbnQsIGJlIHN1cmUgdG8gZG8gc28sIGUuZy4gd2hlbiB5b3UgZmlyc3QgZGVjbGFyZSB0aGUgYm9yZGVyLXdpZHRoLlxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci13aWR0aDogbWVkaXVtO1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgY2xlYXI6IG5vbmU7XG4gICAgICBjbGlwOiBhdXRvO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBjb3VudGVyLWluY3JlbWVudDogbm9uZTtcbiAgICAgIGNvdW50ZXItcmVzZXQ6IG5vbmU7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBkaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvLyBBcyB3aXRoIG90aGVyIGluaGVyaXQgdmFsdWVzLCB0aGlzIG5lZWRzIHRvIGJlIHNldCBvbiB0aGUgcm9vdCBjb250YWluZXIgZWxlbWVudFxuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBpbmhlcml0OyAvLyBDb3VsZCBzZXQgbGlzdC1zdHlsZS10eXBlIHRvIG5vbmVcbiAgICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGU7XG4gICAgICBsaXN0LXN0eWxlLWltYWdlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgb3V0bGluZTogaW52ZXJ0IG5vbmUgbWVkaXVtO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIHF1b3RlczogXCJcIiBcIlwiO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICB0YWJsZS1sYXlvdXQ6IGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIHVuaWNvZGUtYmlkaTogbm9ybWFsO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgdmlzaWJpbGl0eTogaW5oZXJpdDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgICAgei1pbmRleDogYXV0bztcblxuICAgICAgLy8gQ1NTM1xuICAgICAgLy8gSW5jbHVkaW5nIGFsbCBwcmVmaXhlcyBhY2NvcmRpbmcgdG8gaHR0cDogLy9jYW5pdXNlLmNvbS9cbiAgICAgIC8vIENTUyBBbmltYXRpb25zIGRvbid0IGNhc2NhZGUsIHNvIGRvbid0IHJlcXVpcmUgcmVzZXR0aW5nXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveDsgfVxuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3gge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7IH1cbiAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGF1dG8ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87IH1cbiAgICAgIC13ZWJraXQtYm9yZGVyLWltYWdlOiBub25lO1xuICAgICAgLW1vei1ib3JkZXItaW1hZ2U6IG5vbmUge1xuICAgICAgICAgIC1vLWJvcmRlci1pbWFnZTogbm9uZSB7XG4gICAgICAgICAgICAgIGJvcmRlci1pbWFnZTogbm9uZTsgfSB9XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lOyB9XG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveCB7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XG4gICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogYXV0bztcbiAgICAgIC1tb3otY29sdW1uLWNvdW50OiBhdXRvIHtcbiAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiBhdXRvOyB9XG4gICAgICAtd2Via2l0LWNvbHVtbi1nYXA6IG5vcm1hbDtcbiAgICAgIC1tb3otY29sdW1uLWdhcDogbm9ybWFsIHtcbiAgICAgICAgICAgICAgY29sdW1uLWdhcDogbm9ybWFsOyB9XG4gICAgICAtd2Via2l0LWNvbHVtbi1ydWxlOiBtZWRpdW0gbm9uZSBibGFjaztcbiAgICAgIC1tb3otY29sdW1uLXJ1bGU6IG1lZGl1bSBub25lIGJsYWNrIHtcbiAgICAgICAgICAgICAgY29sdW1uLXJ1bGU6IG1lZGl1bSBub25lIGJsYWNrOyB9XG4gICAgICAtd2Via2l0LWNvbHVtbi1zcGFuOiAxO1xuICAgICAgLW1vei1jb2x1bW4tc3BhbjogMSB7IC8vIGRvZXNuJ3QgZXhpc3QgeWV0IGJ1dCBwcm9iYWJseSB3aWxsXG4gICAgICAgICAgICAgIGNvbHVtbi1zcGFuOiAxOyB9XG4gICAgICAtd2Via2l0LWNvbHVtbi13aWR0aDogYXV0bztcbiAgICAgIC1tb3otY29sdW1uLXdpZHRoOiBhdXRvIHtcbiAgICAgICAgICAgICAgY29sdW1uLXdpZHRoOiBhdXRvOyB9XG4gICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDtcbiAgICAgIG92ZXJmbG93LXg6IHZpc2libGU7XG4gICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgLXdlYmtpdC1oeXBoZW5zOiBtYW51YWw7XG4gICAgICAtbW96LWh5cGhlbnM6IG1hbnVhbCB7XG4gICAgICAgICAgICAgIGh5cGhlbnM6IG1hbnVhbDsgfVxuICAgICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogbm9uZTtcbiAgICAgIC1tb3otcGVyc3BlY3RpdmU6IG5vbmUge1xuICAgICAgICAgIC1tcy1wZXJzcGVjdGl2ZTogbm9uZTtcbiAgICAgICAgICAtby1wZXJzcGVjdGl2ZTogbm9uZSB7XG4gICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiBub25lOyB9IH1cbiAgICAgIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xuICAgICAgLW1vei1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCUge1xuICAgICAgICAgIC1tcy1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAgICAgLW8tcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlIHtcbiAgICAgICAgICAgICAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlOyB9IH1cbiAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSB7XG4gICAgICAgICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgLW8tYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSB7XG4gICAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7IH0gfVxuICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwcyBlYXNlIDBzIHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UgMHM7IH1cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgLW1vei10cmFuc2Zvcm06IG5vbmUge1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiBub25lIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lOyB9IH1cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSB7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgICAgICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7IH0gfVxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7XG4gICAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogZmxhdCB7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybS1zdHlsZTogZmxhdDtcbiAgICAgICAgICAtby10cmFuc2Zvcm0tc3R5bGU6IGZsYXQge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IGZsYXQ7IH0gfVxuICAgICAgd29yZC1icmVhazogbm9ybWFsOyB9XG5cbiAgLy8gPT0gQkxPQ0stTEVWRUwgPT1cbiAgLy8gQWN0dWFsbHksIHNvbWUgb2YgdGhlc2Ugc2hvdWxkIGJlIGlubGluZS1ibG9jayBhbmQgb3RoZXIgdmFsdWVzLCBidXQgYmxvY2sgd29ya3MgZmluZSAoVE9ETzogcmlnb3JvdXNseSB2ZXJpZnkgdGhpcylcbiAgLy8gSFRNTCA0LjAxXG4gIC5jbGVhbnNsYXRlLCBoMywgaDUsIHAsIGgxLCBkbCwgZHQsIGg2LCBvbCwgZm9ybSwgb3B0aW9uLCBwcmUsIGRpdiwgaDIsIGNhcHRpb24sIGg0LCB1bCwgYWRkcmVzcywgYmxvY2txdW90ZSwgZGQsIGZpZWxkc2V0LCBocixcblxuICAvLyBIVE1MNSBuZXcgZWxlbWVudHNcbiAgYXJ0aWNsZSwgZGlhbG9nLCBmaWd1cmUsIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiwgYXVkaW8sIHZpZGVvLCBhZGRyZXNzLCBibG9ja3F1b3RlLCBjb2xncm91cCwgbWFpbiwgcHJvZ3Jlc3MsIHN1bW1hcnkge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxuICBoMSB7XG4gICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgIHBhZGRpbmc6IC42N2VtIDA7IH1cbiAgaDIge1xuICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgIHBhZGRpbmc6IC44M2VtIDA7IH1cbiAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjE3ZW07XG4gICAgICBwYWRkaW5nOiAuODNlbSAwOyB9XG4gIGg0IHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gIGg1IHtcbiAgICAgIGZvbnQtc2l6ZTogLjgzZW07IH1cbiAgcCB7XG4gICAgICBtYXJnaW46IDFlbSAwOyB9XG4gIHRhYmxlIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlOyB9XG4gIHRoZWFkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDsgfVxuICB0Ym9keSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7IH1cbiAgdGZvb3Qge1xuICAgICAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwOyB9XG4gIHRyIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdzsgfVxuICB0aCwgdGQge1xuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgIHBhZGRpbmc6IDJweDsgfVxuXG4gIC8vID09IFNQRUNJRklDIEVMRU1FTlRTID09XG4gIC8vIFNvbWUgb2YgdGhlc2UgYXJlIGJyb3dzZXIgZGVmYXVsdHM7IHNvbWUgYXJlIGp1c3QgdXNlZnVsIHJlc2V0c1xuICBvbCwgdWwge1xuICAgICAgbWFyZ2luOiAxZW0gMDsgfVxuICB1bCBsaSwgdWwgdWwgbGksIHVsIHVsIHVsIGxpLCBvbCBsaSwgb2wgb2wgbGksIG9sIG9sIG9sIGxpLCB1bCBvbCBvbCBsaSwgdWwgdWwgb2wgbGksIG9sIHVsIHVsIGxpLCBvbCBvbCB1bCBsaSB7XG4gICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gICAgICBtYXJnaW4tdG9wOiAuMDhlbTsgfVxuICBvbCBvbCwgb2wgb2wgb2wsIHVsIHVsLCB1bCB1bCB1bCwgb2wgdWwsIG9sIHVsIHVsLCBvbCBvbCB1bCwgdWwgb2wsIHVsIG9sIG9sLCB1bCB1bCBvbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7IH1cbiAgLy8gaGVscGVyIGZvciBnZW5lcmFsIG5hdmlnYXRpb25cbiAgbmF2IHVsLCBuYXYgb2wge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XG5cbiAgdWwsIG1lbnUge1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjOyB9XG4gIG9sIHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDsgfVxuICBvbCB1bCwgdWwgdWwsIG1lbnUgdWwsIG9sIG1lbnUsIHVsIG1lbnUsIG1lbnUgbWVudSB7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTsgfVxuICBvbCBvbCB1bCwgb2wgdWwgdWwsIG9sIG1lbnUgdWwsIG9sIG9sIG1lbnUsIG9sIHVsIG1lbnUsIG9sIG1lbnUgbWVudSwgdWwgb2wgdWwsIHVsIHVsIHVsLCB1bCBtZW51IHVsLCB1bCBvbCBtZW51LCB1bCB1bCBtZW51LCB1bCBtZW51IG1lbnUsIG1lbnUgb2wgdWwsIG1lbnUgdWwgdWwsIG1lbnUgbWVudSB1bCwgbWVudSBvbCBtZW51LCBtZW51IHVsIG1lbnUsIG1lbnUgbWVudSBtZW51IHtcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlOyB9XG4gIGxpIHtcbiAgICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcbiAgICAgIC8vIEZpeGVzIElFNyBpc3N1ZSB3aXRoIHBvc2l0aW9uaW5nIG9mIG5lc3RlZCBidWxsZXRzXG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9IC8vIHJlcGxhY2UgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICBzdHJvbmcge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgZW0ge1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljOyB9XG4gIGtiZCwgc2FtcCwgY29kZSwgcHJlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IH1cbiAgYSB7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gIGE6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogIzUyOTsgfVxuICBhLCBhICosIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF0sIHNlbGVjdCwgYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICBidXR0b24sIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAycHggNnB4IDNweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBwdXNoLWJ1dHRvbjtcbiAgICAgIGNvbG9yOiBidXR0b250ZXh0O1xuICAgICAgYm9yZGVyOiAxcHggI2E2YTZhNiBzb2xpZDtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTsgLy8gT2xkIGJyb3dzZXJzXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpOyAvLyBPbGQgYnJvd3NlcnNcbiAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMjEsMjIxLDIyMSwxKSAxMDAlLCByZ2JhKDIwOSwyMDksMjA5LDEpIDEwMCUsIHJnYmEoMjIxLDIyMSwyMjEsMSkgMTAwJSk7IC8vIEZGMy42K1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjIxLDIyMSwyMjEsMSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgyMDksMjA5LDIwOSwxKSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDIyMSwyMjEsMjIxLDEpKSk7IC8vIENocm9tZSxTYWZhcmk0K1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjIxLDIyMSwyMjEsMSkgMTAwJSxyZ2JhKDIwOSwyMDksMjA5LDEpIDEwMCUscmdiYSgyMjEsMjIxLDIyMSwxKSAxMDAlKTsgLy8gQ2hyb21lMTArLFNhZmFyaTUuMStcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMjEsMjIxLDIyMSwxKSAxMDAlLHJnYmEoMjA5LDIwOSwyMDksMSkgMTAwJSxyZ2JhKDIyMSwyMjEsMjIxLDEpIDEwMCUpOyAvLyBPcGVyYSAxMS4xMCtcbiAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLHJnYmEoMjIxLDIyMSwyMjEsMSkgMTAwJSxyZ2JhKDIwOSwyMDksMjA5LDEpIDEwMCUscmdiYSgyMjEsMjIxLDIyMSwxKSAxMDAlKTsgLy8gSUUxMCtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUscmdiYSgyMjEsMjIxLDIyMSwxKSAxMDAlLHJnYmEoMjA5LDIwOSwyMDksMSkgMTAwJSxyZ2JhKDIyMSwyMjEsMjIxLDEpIDEwMCUpOyAvLyBXM0NcbiAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNkZGRkZGQnLEdyYWRpZW50VHlwZT0wICk7IC8vIElFNi05XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAxcHggMHB4ICNlZWU7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggMHB4ICNlZWUge1xuICAgICAgICAgIC1vLWJveC1zaGFkb3c6IDFweCAxcHggMHB4ICNlZWUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDBweCAjZWVlOyB9IH1cbiAgICAgIG91dGxpbmU6IGluaXRpYWw7IH1cbiAgYnV0dG9uOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoNTksMTAzLDE1OCk7IC8vIE9sZCBicm93c2Vyc1xuICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDU5LDEwMywxNTgsMSkgMCUsIHJnYmEoNDMsMTM2LDIxNywxKSA1MCUsIHJnYmEoMzIsMTI0LDIwMiwxKSA1MSUsIHJnYmEoMTI1LDE4NSwyMzIsMSkgMTAwJSk7IC8vIEZGMy42K1xuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDU5LDEwMywxNTgsMSkpLCBjb2xvci1zdG9wKDUwJSxyZ2JhKDQzLDEzNiwyMTcsMSkpLCBjb2xvci1zdG9wKDUxJSxyZ2JhKDMyLDEyNCwyMDIsMSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgxMjUsMTg1LDIzMiwxKSkpOyAvLyBDaHJvbWUsU2FmYXJpNCtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg1OSwxMDMsMTU4LDEpIDAlLHJnYmEoNDMsMTM2LDIxNywxKSA1MCUscmdiYSgzMiwxMjQsMjAyLDEpIDUxJSxyZ2JhKDEyNSwxODUsMjMyLDEpIDEwMCUpOyAvLyBDaHJvbWUxMCssU2FmYXJpNS4xK1xuICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg1OSwxMDMsMTU4LDEpIDAlLHJnYmEoNDMsMTM2LDIxNywxKSA1MCUscmdiYSgzMiwxMjQsMjAyLDEpIDUxJSxyZ2JhKDEyNSwxODUsMjMyLDEpIDEwMCUpOyAvLyBPcGVyYSAxMS4xMCtcbiAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDU5LDEwMywxNTgsMSkgMCUscmdiYSg0MywxMzYsMjE3LDEpIDUwJSxyZ2JhKDMyLDEyNCwyMDIsMSkgNTElLHJnYmEoMTI1LDE4NSwyMzIsMSkgMTAwJSk7IC8vIElFMTArXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDU5LDEwMywxNTgsMSkgMCUscmdiYSg0MywxMzYsMjE3LDEpIDUwJSxyZ2JhKDMyLDEyNCwyMDIsMSkgNTElLHJnYmEoMTI1LDE4NSwyMzIsMSkgMTAwJSk7IC8vIFczQ1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNTI1OWIwOyB9XG4gIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAxcHggNnB4IDJweCA2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxuICBpbnB1dFt0eXBlPWhpZGRlbl0ge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAvLyByZXN0b3JlIGZvcm0gZGVmYXVsdHNcbiAgdGV4dGFyZWEge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0YXJlYTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgICByZXNpemU6IGJvdGg7IH1cbiAgc2VsZWN0LCB0ZXh0YXJlYSwgaW5wdXQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxuICBzZWxlY3Qge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IGF1dG8gNXB4IC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgICAgIG91dGxpbmU6IGluaXRpYWw7IH1cbiAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbml0aWFsO1xuICAgICAgZm9udC1zaXplOiBzbWFsbDsgfVxuICBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgICAgYm9yZGVyOiAxcHggIzJiMmIyYiBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICBpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICAgICAgb3V0bGluZTogaW5pdGlhbDsgfVxuICBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gICAgICBtYXJnaW46IDJweCAycHggM3B4IDJweDsgfVxuICBhYmJyW3RpdGxlXSwgYWNyb255bVt0aXRsZV0sIGRmblt0aXRsZV0ge1xuICAgICAgY3Vyc29yOiBoZWxwO1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkOyB9XG4gIGlucyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5O1xuICAgICAgY29sb3I6IGJsYWNrOyB9XG4gIGRlbCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxuICBibG9ja3F1b3RlLCBxIHtcbiAgICAgIHF1b3Rlczogbm9uZTsgfSAvLyBIVE1MNVxuICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIsIGxpOmJlZm9yZSwgbGk6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjsgfVxuICBpbnB1dCwgc2VsZWN0IHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuICB0YWJsZSB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cbiAgaHIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgbWFyZ2luOiAxZW0gMDsgfVxuICAqW2Rpcj1ydGxdIHtcbiAgICAgIGRpcmVjdGlvbjogcnRsOyB9XG4gIG1hcmsge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gIG1lbnUge1xuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgcGFkZGluZy10b3A6IDhweDsgfVxuXG4gIC8vIGFkZGl0aW9uYWwgaGVscGVyc1xuICBbaGlkZGVuXSxcbiAgdGVtcGxhdGUge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICBhYmJyW3RpdGxlXSB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkOyB9XG4gIHN1Yiwgc3VwIHtcbiAgICAgIGZvbnQtc2l6ZTogNzUlO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cbiAgc3VwIHtcbiAgICAgIHRvcDogLTAuNWVtOyB9XG4gIHN1YiB7XG4gICAgICBib3R0b206IC0wLjI1ZW07IH1cbiAgaW1nIHtcbiAgICAgIGJvcmRlcjogMDsgfVxuICBmaWd1cmUge1xuICAgICAgbWFyZ2luOiAwOyB9XG4gIHRleHRhcmVhIHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxuXG4gIC8vID09IFJPT1QgQ09OVEFJTkVSIEVMRU1FTlQgPT1cbiAgLy8gVGhpcyBjb250YWlucyBkZWZhdWx0IHZhbHVlcyBmb3IgY2hpbGQgZWxlbWVudHMgdG8gaW5oZXJpdFxuXG4gIC8vICBmb250LXNpemU6IG1lZGl1bVxuICAvLyAgbGluZS1oZWlnaHQ6IDFcbiAgLy8gIGRpcmVjdGlvbjogbHRyXG4gIC8vICB0ZXh0LWFsaWduOiBsZWZ0IC8vIGZvciBJRSwgT3BlcmFcbiAgLy8gIHRleHQtYWxpZ246IHN0YXJ0IC8vIHJlY29tbWVuZGVkIFczQyBTcGVjXG4gIC8vICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmIC8vIE92ZXJyaWRlIHRoaXMgd2l0aCB3aGF0ZXZlciBmb250LWZhbWlseSBpcyByZXF1aXJlZFxuICAvLyAgY29sb3I6IGJsYWNrXG4gIC8vICBmb250LXN0eWxlOiBub3JtYWxcbiAgLy8gIGZvbnQtd2VpZ2h0OiBub3JtYWxcbiAgLy8gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAvLyAgbGlzdC1zdHlsZS10eXBlOiBkaXNjXG5cbiAgcHJlIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmU7IH0gfVxuIl19 */"

/***/ }),

/***/ "../ng-playground/src/lib/components/playground/playground.component.ts":
/*!******************************************************************************!*\
  !*** ../ng-playground/src/lib/components/playground/playground.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ng_playground_tokens_1 = __webpack_require__(/*! ../../ng-playground.tokens */ "../ng-playground/src/lib/ng-playground.tokens.ts");
var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(routes) {
        this.routes = routes;
        var transform = function (rs) {
            return rs.map(function (r) { return ({
                data: r,
                children: transform(r.children || [])
            }); }).filter(function (r) { return r.data.routerLink; });
        };
        this.tree = transform(this.routes);
    }
    PlaygroundComponent.prototype.getLinkStyle = function (depth) {
        return { padding: "10px " + depth * 20 + "px" };
    };
    PlaygroundComponent.prototype.toggleExpand = function (tree, item, $event) {
        $event.stopPropagation();
        $event.preventDefault();
        $event.stopImmediatePropagation();
        tree.toggleExpand(item);
    };
    PlaygroundComponent = __decorate([
        core_1.Component({
            selector: 'pg-playground',
            template: __webpack_require__(/*! ./playground.component.html */ "../ng-playground/src/lib/components/playground/playground.component.html"),
            styles: [__webpack_require__(/*! ./playground.component.sass */ "../ng-playground/src/lib/components/playground/playground.component.sass")]
        }),
        __param(0, core_1.Inject(ng_playground_tokens_1.PLAYGROUND_ROUTES)),
        __metadata("design:paramtypes", [Array])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());
exports.PlaygroundComponent = PlaygroundComponent;


/***/ }),

/***/ "../ng-playground/src/lib/components/value-editor/value-editor.component.html":
/*!************************************************************************************!*\
  !*** ../ng-playground/src/lib/components/value-editor/value-editor.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <ng-content></ng-content>\n</main>\n\n<aside>\n  <form (submit)=\"onSubmit()\">\n    <ng-template ngFor [ngForOf]=\"values\" let-value [ngForTrackBy]=\"trackBy\">\n      <label>{{value.key}}\n          <ng-container [ngSwitch]=\"getType(value)\">\n            <input *ngSwitchCase=\"'string'\"\n              type=\"text\"\n              [id]=\"value.key\"\n              [ngModel]=\"value.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              (ngModelChange)=\"onChange(value, $event)\"\n            />\n            <input *ngSwitchCase=\"'number'\"\n              type=\"number\"\n              [id]=\"value.key\"\n              [ngModel]=\"value.value\"\n              [ngModelOptions]=\"{standalone: true}\"\n              (ngModelChange)=\"onChange(value, $event)\"\n            />\n          </ng-container>\n      </label>\n    </ng-template>\n    <button type=\"submit\">Apply Values</button>\n  </form>\n</aside>\n\n"

/***/ }),

/***/ "../ng-playground/src/lib/components/value-editor/value-editor.component.sass":
/*!************************************************************************************!*\
  !*** ../ng-playground/src/lib/components/value-editor/value-editor.component.sass ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n\nmain {\n  flex: 1 1;\n  overflow: auto; }\n\naside {\n  padding: 10px 5px;\n  border-top: 1px solid grey;\n  flex: 0 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1wbGF5Z3JvdW5kL3Byb2plY3RzL25nLXBsYXlncm91bmQvc3JjL2xpYi9jb21wb25lbnRzL3ZhbHVlLWVkaXRvci92YWx1ZS1lZGl0b3IuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFNBQVM7RUFDVCxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixjQUFjLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvbmctcGxheWdyb3VuZC9zcmMvbGliL2NvbXBvbmVudHMvdmFsdWUtZWRpdG9yL3ZhbHVlLWVkaXRvci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiA6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTsgfVxuXG5tYWluIHtcbiAgZmxleDogMSAxO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG5hc2lkZSB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcbiAgZmxleDogMCAwIGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "../ng-playground/src/lib/components/value-editor/value-editor.component.ts":
/*!**********************************************************************************!*\
  !*** ../ng-playground/src/lib/components/value-editor/value-editor.component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var values_service_1 = __webpack_require__(/*! ../../services/values.service */ "../ng-playground/src/lib/services/values.service.ts");
/**
 * Provides a container for a playground page that displays a form to edit values. Those values are then available in the component.
 */
var ValueEditorComponent = /** @class */ (function () {
    function ValueEditorComponent(valuesService) {
        this.valuesService = valuesService;
        this.trackBy = function (_index, item) {
            return item.key;
        };
    }
    /**
     * @ignore
     */
    ValueEditorComponent.prototype.ngOnChanges = function () {
        var valuesMap = new Map();
        ((this.config || { values: [] }).values || []).forEach(function (c) {
            valuesMap.set(c.name, c.initialValue);
        });
        this.valuesService.set(valuesMap);
        this.values = this.valuesService.getValues();
    };
    /**
     * @ignore
     */
    ValueEditorComponent.prototype.getType = function (value) {
        return this.config.values.find(function (v) { return v.name === value.key; }).type;
    };
    /**
     * @ignore
     */
    ValueEditorComponent.prototype.onSubmit = function () {
        var valuesMap = new Map();
        this.values.forEach(function (c) {
            valuesMap.set(c.key, c.value);
        });
        this.valuesService.set(valuesMap);
    };
    /**
     * @ignore
     */
    ValueEditorComponent.prototype.onChange = function (value, $event) {
        this.values = this.values.map(function (v) { return v.key === value.key ? __assign({}, v, { value: $event }) : v; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ValueEditorComponent.prototype, "config", void 0);
    ValueEditorComponent = __decorate([
        core_1.Component({
            selector: 'pg-value-editor',
            template: __webpack_require__(/*! ./value-editor.component.html */ "../ng-playground/src/lib/components/value-editor/value-editor.component.html"),
            styles: [__webpack_require__(/*! ./value-editor.component.sass */ "../ng-playground/src/lib/components/value-editor/value-editor.component.sass")]
        }),
        __metadata("design:paramtypes", [values_service_1.ValuesService])
    ], ValueEditorComponent);
    return ValueEditorComponent;
}());
exports.ValueEditorComponent = ValueEditorComponent;


/***/ }),

/***/ "../ng-playground/src/lib/ng-playground.module.ts":
/*!********************************************************!*\
  !*** ../ng-playground/src/lib/ng-playground.module.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var iwerk_angular_ui_1 = __webpack_require__(/*! iwerk-angular-ui */ "../../node_modules/iwerk-angular-ui/fesm5/iwerk-angular-ui.js");
var abstract_component_1 = __webpack_require__(/*! ./components/abstract/abstract.component */ "../ng-playground/src/lib/components/abstract/abstract.component.ts");
var playground_component_1 = __webpack_require__(/*! ./components/playground/playground.component */ "../ng-playground/src/lib/components/playground/playground.component.ts");
var value_editor_component_1 = __webpack_require__(/*! ./components/value-editor/value-editor.component */ "../ng-playground/src/lib/components/value-editor/value-editor.component.ts");
var ng_playground_tokens_1 = __webpack_require__(/*! ./ng-playground.tokens */ "../ng-playground/src/lib/ng-playground.tokens.ts");
var value_pipe_1 = __webpack_require__(/*! ./pipes/value.pipe */ "../ng-playground/src/lib/pipes/value.pipe.ts");
var PlaygroundModule = /** @class */ (function () {
    function PlaygroundModule() {
    }
    PlaygroundModule_1 = PlaygroundModule;
    PlaygroundModule.configure = function (config) {
        var transform = function (routes, current) {
            if (current === void 0) { current = []; }
            return routes.map(function (r) {
                var path = r.title.replace(/ /g, '');
                var newCurrent = current.concat([path]);
                var component = r.component || abstract_component_1.AbstractComponent;
                var result = __assign({}, r, { component: component,
                    path: path, routerLink: newCurrent, resolve: r.resolve, children: transform(r.children || [], newCurrent) });
                if (component === abstract_component_1.AbstractComponent) {
                    result.children.unshift({
                        path: '',
                        pathMatch: 'full',
                        redirectTo: result.children[0].path,
                        title: '',
                        routerLink: undefined,
                        children: undefined
                    });
                }
                return result;
            });
        };
        var routesWithLink = transform(config.routes);
        return {
            ngModule: PlaygroundModule_1,
            providers: [
                { provide: ng_playground_tokens_1.PLAYGROUND_ROUTES, useValue: routesWithLink },
                router_1.provideRoutes(routesWithLink)
            ]
        };
    };
    var PlaygroundModule_1;
    PlaygroundModule = PlaygroundModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                playground_component_1.PlaygroundComponent,
                abstract_component_1.AbstractComponent,
                value_editor_component_1.ValueEditorComponent,
                value_pipe_1.ValuePipe
            ],
            imports: [
                iwerk_angular_ui_1.TreeModule,
                router_1.RouterModule.forRoot([]),
                common_1.CommonModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            exports: [
                playground_component_1.PlaygroundComponent,
                router_1.RouterModule,
                value_pipe_1.ValuePipe,
                value_editor_component_1.ValueEditorComponent
            ]
        })
    ], PlaygroundModule);
    return PlaygroundModule;
}());
exports.PlaygroundModule = PlaygroundModule;


/***/ }),

/***/ "../ng-playground/src/lib/ng-playground.tokens.ts":
/*!********************************************************!*\
  !*** ../ng-playground/src/lib/ng-playground.tokens.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
exports.PLAYGROUND_ROUTES = new core_1.InjectionToken('PLAYGROUND_ROUTES');


/***/ }),

/***/ "../ng-playground/src/lib/pipes/value.pipe.ts":
/*!****************************************************!*\
  !*** ../ng-playground/src/lib/pipes/value.pipe.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var values_service_1 = __webpack_require__(/*! ../services/values.service */ "../ng-playground/src/lib/services/values.service.ts");
var ValuePipe = /** @class */ (function () {
    function ValuePipe(values, changeDetector) {
        this.values = values;
        this.changeDetector = changeDetector;
    }
    ValuePipe.prototype.transform = function (key) {
        var _this = this;
        if (this.key === key) {
            return this.currentValue;
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription = this.values.getValueAsObservable(key).subscribe(function (value) {
            _this.currentValue = value;
            _this.changeDetector.markForCheck();
        });
        return this.currentValue;
    };
    ValuePipe = __decorate([
        core_1.Pipe({
            name: 'pgValue',
            pure: false
        }),
        __metadata("design:paramtypes", [values_service_1.ValuesService,
            core_1.ChangeDetectorRef])
    ], ValuePipe);
    return ValuePipe;
}());
exports.ValuePipe = ValuePipe;


/***/ }),

/***/ "../ng-playground/src/lib/services/values.service.ts":
/*!***********************************************************!*\
  !*** ../ng-playground/src/lib/services/values.service.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var ValuesService = /** @class */ (function () {
    function ValuesService() {
        this.valuesSubject = new rxjs_1.BehaviorSubject(new Map());
    }
    Object.defineProperty(ValuesService.prototype, "values$", {
        get: function () {
            return this.valuesSubject.pipe(operators_1.map(function (values) {
                var result = [];
                values.forEach(function (value, key) {
                    result.push({
                        value: value, key: key
                    });
                });
                return result;
            }));
        },
        enumerable: true,
        configurable: true
    });
    ValuesService.prototype.getValues = function () {
        var result = [];
        this.valuesSubject.value.forEach(function (value, key) {
            result.push({
                value: value, key: key
            });
        });
        return result;
    };
    ValuesService.prototype.set = function (value) {
        this.valuesSubject.next(value);
    };
    ValuesService.prototype.setValue = function (key, value) {
        var newMap = new Map(this.valuesSubject.value);
        newMap.set(key, value);
        this.valuesSubject.next(newMap);
    };
    ValuesService.prototype.getValue = function (key) {
        return this.valuesSubject.value.get(key);
    };
    ValuesService.prototype.getValueAsObservable = function (key) {
        return this.valuesSubject.pipe(operators_1.map(function (s) { return s.get(key); }));
    };
    ValuesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ValuesService);
    return ValuesService;
}());
exports.ValuesService = ValuesService;


/***/ }),

/***/ "../ng-playground/src/public_api.ts":
/*!******************************************!*\
  !*** ../ng-playground/src/public_api.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Public API Surface of ng-playground
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./lib/ng-playground.module */ "../ng-playground/src/lib/ng-playground.module.ts"));
var playground_component_1 = __webpack_require__(/*! ./lib/components/playground/playground.component */ "../ng-playground/src/lib/components/playground/playground.component.ts");
exports.PlaygroundComponent = playground_component_1.PlaygroundComponent;


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <docs-app>\n    <ng-template docsBrandHeader>\n      <h3 class=\"brand-area\">NG Playground</h3>\n    </ng-template>\n    <li><a href=\"https://github.com/kevinmerckx/ng-playground\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i> Github</a></li>\n  </docs-app>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var ng_documentation_1 = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
var usage_component_1 = __webpack_require__(/*! ./features/usage/usage/usage.component */ "./src/app/features/usage/usage/usage.component.ts");
var usage_module_1 = __webpack_require__(/*! ./features/usage/usage.module */ "./src/app/features/usage/usage.module.ts");
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var welcome_component_1 = __webpack_require__(/*! ./features/welcome/welcome.component */ "./src/app/features/welcome/welcome.component.ts");
var public_api_1 = __webpack_require__(/*! ../../../ng-playground/src/public_api */ "../ng-playground/src/public_api.ts");
var Case1Component = /** @class */ (function () {
    function Case1Component() {
    }
    Case1Component = __decorate([
        core_1.Component({
            template: '<h1>Case #1</h1>'
        })
    ], Case1Component);
    return Case1Component;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                Case1Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                usage_module_1.UsageModule,
                shared_module_1.SharedModule,
                ng_documentation_1.DocsModule.configure({
                    welcomePage: welcome_component_1.WelcomeComponent,
                    componentPages: {
                        usage: {
                            title: 'Value Editor',
                            component: usage_component_1.UsageComponent
                        }
                    }
                }),
                public_api_1.PlaygroundModule.configure({
                    routes: [
                        { title: 'Case #1', component: Case1Component }
                    ]
                })
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/features/usage/example1/example1.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/usage/example1/example1.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<pg-value-editor [config]=\"config\">\n  <table>\n    <tr>\n      <th>Value #1</th><td>{{'value1' | pgValue}}</td>\n    </tr>\n    <tr>\n      <th>Value #2</th><td>{{'value2' | pgValue}}</td>\n    </tr>\n  </table>\n</pg-value-editor>"

/***/ }),

/***/ "./src/app/features/usage/example1/example1.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/features/usage/example1/example1.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  border: 1px solid lightgrey;\n  box-shadow: 1px 1px 1px 1px lightgrey;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9rZXZpbm1lcmNreC9uZy1wbGF5Z3JvdW5kL3Byb2plY3RzL2RvY3Mvc3JjL2FwcC9mZWF0dXJlcy91c2FnZS9leGFtcGxlMS9leGFtcGxlMS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNDLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLFlBQVksRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvdXNhZ2UvZXhhbXBsZTEvZXhhbXBsZTEuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggbGlnaHRncmV5O1xuICBoZWlnaHQ6IDEwMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/features/usage/example1/example1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/usage/example1/example1.component.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var Example1Component = /** @class */ (function () {
    function Example1Component() {
        this.config = {
            values: [
                { type: 'string', initialValue: 'Here is #1', name: 'value1' },
                { type: 'number', initialValue: 667, name: 'value2' }
            ]
        };
    }
    Example1Component = __decorate([
        core_1.Component({
            selector: 'app-example1',
            template: __webpack_require__(/*! ./example1.component.html */ "./src/app/features/usage/example1/example1.component.html"),
            styles: [__webpack_require__(/*! ./example1.component.sass */ "./src/app/features/usage/example1/example1.component.sass")]
        })
    ], Example1Component);
    return Example1Component;
}());
exports.Example1Component = Example1Component;


/***/ }),

/***/ "./src/app/features/usage/usage.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/usage/usage.module.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var shared_module_1 = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
var usage_component_1 = __webpack_require__(/*! ./usage/usage.component */ "./src/app/features/usage/usage/usage.component.ts");
var example1_component_1 = __webpack_require__(/*! ./example1/example1.component */ "./src/app/features/usage/example1/example1.component.ts");
var UsageModule = /** @class */ (function () {
    function UsageModule() {
    }
    UsageModule = __decorate([
        core_1.NgModule({
            declarations: [usage_component_1.UsageComponent, example1_component_1.Example1Component],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule
            ],
            exports: [usage_component_1.UsageComponent]
        })
    ], UsageModule);
    return UsageModule;
}());
exports.UsageModule = UsageModule;


/***/ }),

/***/ "./src/app/features/usage/usage/usage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/usage/usage/usage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-component-documentation\n  [componentTitle]=\"'Value Editor'\"\n  [componentId]=\"'ValueEditorComponent'\"\n  [componentType]=\"'components'\"\n  [disableRoutedNavigation]=\"true\"\n>\n  <ng-template docsComponentExample=\"Value Editor\">\n    \n    <docs-tabs>\n      <app-example1 *docsTab=\"'Example'\"></app-example1>\n      <docs-code *docsTab=\"'HTML'\" path=\"example1.component.html\"></docs-code>\n      <docs-code *docsTab=\"'TS'\" path=\"example1.component.ts\"></docs-code>\n    </docs-tabs>\n  </ng-template>\n</docs-component-documentation>\n"

/***/ }),

/***/ "./src/app/features/usage/usage/usage.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/features/usage/usage/usage.component.sass ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvdXNhZ2UvdXNhZ2UvdXNhZ2UuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/features/usage/usage/usage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/usage/usage/usage.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var UsageComponent = /** @class */ (function () {
    function UsageComponent() {
    }
    UsageComponent.prototype.ngOnInit = function () {
    };
    UsageComponent = __decorate([
        core_1.Component({
            selector: 'app-usage',
            template: __webpack_require__(/*! ./usage.component.html */ "./src/app/features/usage/usage/usage.component.html"),
            styles: [__webpack_require__(/*! ./usage.component.sass */ "./src/app/features/usage/usage/usage.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], UsageComponent);
    return UsageComponent;
}());
exports.UsageComponent = UsageComponent;


/***/ }),

/***/ "./src/app/features/welcome/welcome.component.html":
/*!*********************************************************!*\
  !*** ./src/app/features/welcome/welcome.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<docs-page [title]=\"'NG Playground'\">\n  <ng-template docsPageSection=\"What and why\">\n    <p>\n      NG Playground enables developers to have a playground: easy setup to rapidly develop components/directives/pipes etc.\n    </p>\n  </ng-template>  \n\n  <ng-template docsPageSection=\"Get Started\">\n    <ol>\n      <li>Install dependency</li>\n      <docs-code-line>\n        npm install --save-dev ng-playground\n      </docs-code-line>\n\n      <li>Setup the playground</li>\n      <docs-code-line>\n        ng generate application playground\n      </docs-code-line>\n      <docs-tabs>\n        <docs-code *docsTab=\"'app.module.ts'\">{{codeModule}}</docs-code>\n        <docs-code *docsTab=\"'index.html'\">{{codeIndex}}</docs-code>\n      </docs-tabs>\n    </ol>\n  </ng-template>\n\n</docs-page>\n\n\n<!-- In `angular.json`, add the styles:\n\n```json\n\"styles\": [\n  \"node_modules/ng-playground/ng-playground.css\"\n]\n``` -->\n"

/***/ }),

/***/ "./src/app/features/welcome/welcome.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/features/welcome/welcome.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kb2NzL3NyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/features/welcome/welcome.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/welcome/welcome.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var CODE_INDEX = "\u2026\n<body>\n  <pg-playground></pg-playground>\n</body>\n\u2026";
var CODE_MODULE = "import { NgModule, Injectable } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { PlaygroundComponent, PlaygroundModule } from 'ng-playground';\n\u2026\n\n@NgModule({\n  declarations: [\n    CaseAComponent,\n    CaseBComponent,\n    CaseCComponent,\n    CaseDComponent\n  ],\n  imports: [\n    BrowserModule,\n    PlaygroundModule.configure({\n      routes: [\n        { component: CaseAComponent, title: 'Case A' },\n        { title: 'Case B', children: [\n          { component: CaseAComponent, title: 'Case A' },\n          { component: CaseBComponent, title: 'Case B' },\n          { component: CaseCComponent, title: 'Case C' }\n        ]},\n        { component: CaseCComponent, title: 'Case C' },\n        { component: CaseDComponent, title: 'Case D', resolve: {\n          someResolve: SomeResolver\n        }}\n      ]\n    }),\n    PlaygroundModule\n  ],\n  bootstrap: [PlaygroundComponent],\n  providers: [SomeResolver]\n})\nexport class AppModule { }";
var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.codeModule = CODE_MODULE;
        this.codeIndex = CODE_INDEX;
    }
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/features/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.sass */ "./src/app/features/welcome/welcome.component.sass")]
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ng_documentation_1 = __webpack_require__(/*! ng-documentation */ "../../node_modules/ng-documentation/fesm5/ng-documentation.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var public_api_1 = __webpack_require__(/*! ../../../../ng-playground/src/public_api */ "../ng-playground/src/public_api.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                ng_documentation_1.DocsModule,
                public_api_1.PlaygroundModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/kevinmerckx/ng-playground/projects/docs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map