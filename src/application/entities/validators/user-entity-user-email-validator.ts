export class UserEmail{
    private readonly emailValue: string;

    get _emailValue():string{
        return this.emailValue
    }
    private validateEmail(emailValue:string):boolean{
        return emailValue.length >= 5 && typeof emailValue ==="string" && emailValue !== null
    }

    constructor(emailValue:string){
        const emailValueIsValid = this.validateEmail(emailValue)

        if(!emailValueIsValid){
            throw new Error("invalid email")
        }

        this.emailValue = emailValue
    }
}