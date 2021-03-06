"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InvalidUserRoleDefaultFallback = function (_a) {
    var routeRequiredRoles = _a.routeRequiredRoles, currentUserRole = _a.currentUserRole;
    return (react_1.default.createElement("p", null,
        "Permission denied!",
        react_1.default.createElement("p", null,
            "Current user role is ",
            react_1.default.createElement("b", null, currentUserRole || "unknown"),
            ", required roles: ",
            react_1.default.createElement("b", null, JSON.stringify(routeRequiredRoles)))));
};
exports.default = InvalidUserRoleDefaultFallback;
