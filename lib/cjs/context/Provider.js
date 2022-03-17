"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouterProvider = void 0;
var react_1 = __importDefault(require("react"));
var Context_1 = require("./Context");
var AppRouterProvider = function (props) {
    var children = props.children, config = props.config, isAuth = props.isAuth, userRole = props.userRole;
    return (react_1.default.createElement(Context_1.AppRouterContext.Provider, { value: { config: config, isAuth: isAuth, userRole: userRole } }, children));
};
exports.AppRouterProvider = AppRouterProvider;
