export abstract class Validator {

    StringValueCheck(checkstring: string): boolean {
        if (checkstring.length > 20 || checkstring.length < 1) {
            return false;
        }
        return true;
    }
}