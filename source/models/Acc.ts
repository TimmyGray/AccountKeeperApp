import { Currency } from "./Currency";

export abstract class Acc {
    abstract Id: number;
    abstract Accname: string;
    abstract Accsum: number;
    abstract Accpercent: number;
    abstract Currency: Currency;
}