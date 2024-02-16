import { Entity } from 'src/shared/entities/entity';

export type UserProps = {
  userName: string;
  userLogin: string;
  userEmail: string;
  userPassword: string;
  createdAt?: Date | null;
};
export class UserEntity extends Entity<UserProps> {
  set _userName(content) {
    this.props.userName = content;
  }

  get _useName(): string {
    return this.props.userName;
  }

  set _userLogin(content) {
    this.props.userLogin = content;
  }

  get _userLogin(): string {
    return this.props.userLogin;
  }

  set _userEmail(content) {
    this.props.userEmail = content;
  }

  get _userEmail(): string {
    return this.props.userEmail;
  }

  set _userPassword(content) {
    this.props.userPassword = content;
  }

  get _userPassword(): string {
    return this.props.userPassword;
  }

  set _createdAt(content) {
    this.props.createdAt = content;
  }

  get _createdAt(): Date {
    return this.props.createdAt;
  }
}
