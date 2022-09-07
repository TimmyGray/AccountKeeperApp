import { uservalidator } from "../checking/UserValidator";

export class User {

    Id: number;
    private UserName: string;
    private UserPassword: string;

    get Name(): string {
        return this.UserName;
    }

    set Name(name: string) {
        if (!uservalidator.StringValueCheck(name)) {
            throw "Incorrect Login";
        }
        else {
            this.UserName = name;
        }
    }

    get Password(): string {
        return this.UserPassword;
    }

    SetPassword(password: string, doublecheck: string) {
        if (uservalidator.StringValueCheck(password)) {

            if (uservalidator.DoubleCheck(password, doublecheck)) {
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