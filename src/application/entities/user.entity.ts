import { Entity } from '../../shared/entities/entity';

export type UserProps = {
  userName: string;
  userLogin: string;
  userEmail: string;
  userPassword: string;
  createdAt?: Date | null;
};
export class UserEntity extends Entity<UserProps> {
  set userName(content) {
    this.props.userName = content;
  }

  get userName(): string {
    return this.props.userName;
  }

  set userLogin(content) {
    this.props.userLogin = content;
  }

  get userLogin(): string {
    return this.props.userLogin;
  }

  set userEmail(content) {
    this.props.userEmail = content;
  }

  get userEmail(): string {
    return this.props.userEmail;
  }

  set userPassword(content) {
    this.props.userPassword = content;
  }

  get userPassword(): string {
    return this.props.userPassword;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
  validate();

  async validate(): Promise<string[] | null> {
    const errors: string[] = [];

    const userNameError = await this.validateName(this.userName);
    const userEmailError = await this.validateEmail(this.userEmail);
    const userLoginError = await this.validateLogin(this.userLogin);
    const userPasswordError = await this.validatePassword(this.userPassword);

    if (userNameError) errors.push(userNameError);
    if (userPasswordError) errors.push(userPasswordError);
    if (userEmailError) errors.push(userEmailError);
    if (userLoginError) errors.push(userLoginError);

    return errors;
  }

  validateName(name: string): string {
    if (name == null || undefined) return 'name is required';
    if (name.length == 0) return 'name is empty';
  }
  validateLogin(login: string): string {
    if (login == null || undefined) return 'login is required';
    if (login.length == 0) return 'login is empty';
  }
  validateEmail(email: string): string {
    if (email == null || undefined) return 'email is required';
    if (email.length == 0) return 'email is empty';
  }
  validatePassword(password: string): string {
    if (password == null || undefined) return 'password is required';
    if (password.length == 0) return 'password is empty';
    if (password.length < 8) return 'password is too short';
  }
}
