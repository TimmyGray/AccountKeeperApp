"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uservalidator = void 0;
const Validator_1 = require("../checking/Validator");
class UserValidator extends Validator_1.Validator {
    DoubleCheck(checkstring, doublecheck) {
        if (checkstring != doublecheck) {
            return false;
        }
        return true;
    }
}
exports.uservalidator = new UserValidator();
//# sourceMappingURL=UserValidator.js.map