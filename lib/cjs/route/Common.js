"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Common = void 0;
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var Context_1 = require("../context/Context");
var Common = function (props) {
    var component = props.component, fallback = props.fallback;
    var ctx = (0, react_2.useContext)(Context_1.AppRouterContext);
    var defaultFallback = ctx.config.defaultFallback;
    var SuspenseFallbackComponent = fallback || defaultFallback || null;
    return react_1.default.createElement(react_2.Suspense, { fallback: SuspenseFallbackComponent }, component);
};
exports.Common = Common;
