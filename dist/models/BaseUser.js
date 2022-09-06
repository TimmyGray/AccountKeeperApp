"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUser = void 0;
class BaseUser {
    get Name() {
        return this.UserName;
    }
    set Name(name) {
        if (name.length > 20) {
            throw "Name must be less then 20 characters";
        }
        else {
            this.UserName = name;
        }
    }
    get Password() {
        return this.UserPassword;
    }
    set Password(password) {
        if ()
            ;
    }
}
exports.BaseUser = BaseUser;
//# sourceMappingURL=BaseUser.js.map