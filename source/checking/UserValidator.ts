import { Validator } from "../checking/Validator";

class UserValidator extends Validator {

  
    DoubleCheck(checkstring: string, doublecheck: string): boolean {
        if (checkstring != doublecheck) {
            return false;
        }
        return true;
    }

}

export let uservalidator: UserValidator = new UserValidator();