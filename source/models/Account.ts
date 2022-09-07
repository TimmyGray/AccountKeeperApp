import { Acc } from "./Acc";

import { Currency } from "./Currency";

export class Account extends Acc{
    Id: number;
    Accname: string;
    Accsum: number;
    Accpercent: number;
    Currency: Currency;


}