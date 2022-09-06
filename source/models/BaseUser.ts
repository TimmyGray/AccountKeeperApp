export abstract class BaseUser {
    Id: number;
    private UserName: string;
    private UserPassword: string;
    

    get Name(): string {
        return this.UserName;
    }

    set Name(name: string) {
        if (name.length > 20) {
            throw "Name must be less then 20 characters";
        }
        else {
            this.UserName = name;
        }
    }

    get Password(): string {
        return this.UserPassword;
    }

    set Password(password: string) {
        if()
    }
}