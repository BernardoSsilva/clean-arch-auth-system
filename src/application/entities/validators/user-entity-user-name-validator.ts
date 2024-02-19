export class UserName {
  private readonly value: string;

  get _value():string{
    return this.value
  }
  private validateValue(value: string): boolean {
    return value !== null&&value.length > 0 && typeof value === 'string';
  }

  constructor(value: string) {
    const nameValueIsValid = this.validateValue(value);
    if(!nameValueIsValid){
        throw new Error('Invalid user name');
    }
    this.value = value
  }
}
