"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accvalidator = void 0;
const Validator_1 = require("../checking/Validator");
class AccValidator extends Validator_1.Validator {
    NumberValueCheck(checknumber) {
        if (checknumber < 0) {
            return false;
        }
        return true;
    }
}
exports.accvalidator = new AccValidator();
//# sourceMappingURL=AccValidator.js.map