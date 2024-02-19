import { Entity } from 'src/shared/entities/entity';
import { UserName } from './validators/user-entity-user-name-validator';
import { UserLogin } from './validators/user-entity-user-login-validator';
import { UserEmail } from './validators/user-entity-user-email-validator';
import { UserPassword } from './validators/user-entity-user-password-validator';

export type UserProps = {
  userName: UserName;
  userLogin: UserLogin;
  userEmail: UserEmail;
  userPassword: UserPassword;
  createdAt: Date | null;
};
export class UserEntity extends Entity<UserProps> {
  set _userName(content) {
    this.props.userName = content;
  }

  get _useName(): UserName {
    return this.props.userName;
  }

  set _userLogin(content) {
    this.props.userLogin = content;
  }

  get _userLogin(): UserLogin {
    return this.props.userLogin;
  }

  set _userEmail(content) {
    this.props.userEmail = content;
  }

  get _userEmail(): UserEmail {
    return this.props.userEmail;
  }

  set _userPassword(content) {
    this.props.userPassword = content;
  }

  get _userPassword(): UserPassword {
    return this.props.userPassword;
  }

  get _createdAt(): Date {
    return this.props.createdAt;
  }
}
