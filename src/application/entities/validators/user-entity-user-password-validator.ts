import { InvalidFieldError } from "../../../shared/errors/invalid-field.error";

export class UserPassword {
  private readonly passwordValue: string;

  get _passwordValue(): string {
    return this.passwordValue;
  }
  private validatePassword(passwordValue: string): boolean {
    return (
      passwordValue !== null &&
      passwordValue.length >= 8 &&
      typeof passwordValue === 'string'
    );
  }

  constructor(passwordValue: string) {
    const passwordValueIsValid = this.validatePassword(passwordValue);
    if (!passwordValueIsValid) {
      throw new InvalidFieldError('Invalid password ');
    }

    this.passwordValue = passwordValue;
  }
}
