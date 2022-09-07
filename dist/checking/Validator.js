"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    StringValueCheck(checkstring) {
        if (checkstring.length > 20 || checkstring.length < 1) {
            return false;
        }
        return true;
    }
}
exports.Validator = Validator;
//# sourceMappingURL=Validator.js.map