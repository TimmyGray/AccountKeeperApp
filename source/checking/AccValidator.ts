import { Validator } from "../checking/Validator";

class AccValidator extends Validator {

	NumberValueCheck(checknumber: number): boolean {
		if (checknumber < 0) {
			return false;
		}
		return true;
    }

}

export let accvalidator: AccValidator = new AccValidator(); 