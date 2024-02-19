import { InvalidFieldError } from "../../../shared/errors/invalid-field.error";

export class UserLogin{
    private readonly loginValue: string;

    get _loginValue():string{
        return this.loginValue
    }
    private validateValue(loginValue:string):boolean{
        return loginValue !== null&&loginValue.length >= 5 &&typeof loginValue ==="string"
    }

    constructor(loginValue){
        const loginValueIsValid = this.validateValue(loginValue)
        if(!loginValueIsValid){
            throw new InvalidFieldError("Invalid login value")
        }

        this.loginValue = loginValue
    }

    
}