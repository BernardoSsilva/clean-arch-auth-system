export class UserPassword{
    private readonly passwordValue: string;
    
    get _passwordValue():string{
        return this.passwordValue
    }
    private validatePassword(passwordValue:string):boolean{
        return passwordValue.length >= 8 && typeof passwordValue ==="string" && passwordValue !== null
    }

    constructor(passwordValue:string){
        const passwordValueIsValid = this.validatePassword(passwordValue)
        if(!passwordValueIsValid){
            throw new Error("Invalid password ")
        }

        this.passwordValue = passwordValue
    }
}