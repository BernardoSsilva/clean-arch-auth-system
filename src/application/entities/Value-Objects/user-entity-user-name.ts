import { InvalidFieldError } from "../../../shared/errors/invalid-field.error";

export class UserName {
  private readonly nameValue: string;

  get _nameValue():string{
    return this.nameValue
  }
  private validateValue(value: string): boolean {
    return value !== null&&value.length > 0 && typeof value === 'string';
  }

  constructor(value: string) {
    const nameValueIsValid = this.validateValue(value);
    if(!nameValueIsValid){
        throw new InvalidFieldError('Invalid user name');
    }
    this.nameValue = value
  }
}
