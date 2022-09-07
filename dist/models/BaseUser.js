"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const UserValidator_1 = require("../checking/UserValidator");
class User {
    get Name() {
        return this.UserName;
    }
    set Name(name) {
        if (!UserValidator_1.uservalidator.StringValueCheck(name)) {
            throw "Incorrect Login";
        }
        else {
            this.UserName = name;
        }
    }
    get Password() {
        return this.UserPassword;
    }
    SetPassword(password, doublecheck) {
        if (UserValidator_1.uservalidator.StringValueCheck(password)) {
            if (UserValidator_1.uservalidator.DoubleCheck(password, doublecheck)) {
                this.UserPassword = password;
            }
            else {
                throw "Passwords do not match";
            }
        }
        else {
            throw "Incorrect Password";
        }
    }
}
exports.User = User;
//# sourceMappingURL=BaseUser.js.map