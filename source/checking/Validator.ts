export abstract class Validator {
    abstract ValueCheck(checkstring: string| number): boolean;
}