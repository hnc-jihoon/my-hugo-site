(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // ns-hugo:/home/runner/work/my-hugo-site/my-hugo-site/assets/js/shims/react.js
  var require_react = __commonJS({
    "ns-hugo:/home/runner/work/my-hugo-site/my-hugo-site/assets/js/shims/react.js"(exports, module) {
      module.exports = window.React;
    }
  });

  // ns-hugo:/home/runner/work/my-hugo-site/my-hugo-site/assets/js/shims/react-dom.js
  var require_react_dom = __commonJS({
    "ns-hugo:/home/runner/work/my-hugo-site/my-hugo-site/assets/js/shims/react-dom.js"(exports, module) {
      module.exports = window.ReactDOM;
    }
  });

  // <stdin>
  var React = __toESM(require_react());
  var ReactDOM = __toESM(require_react_dom());
  var LikeButton = class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render() {
      if (this.state.liked) {
        return "You liked this!";
      }
      return /* @__PURE__ */ React.createElement("button", {
        onClick: () => this.setState({ liked: true })
      }, "Like?");
    }
  };
  var domContainer = document.querySelector("#like_button_container");
  ReactDOM.render(/* @__PURE__ */ React.createElement(LikeButton, null), domContainer);
})();