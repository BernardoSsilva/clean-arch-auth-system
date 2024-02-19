import { UserName } from './Value-Objects/user-entity-user-name';
import { UserLogin } from './Value-Objects/user-entity-user-login';
import { UserEmail } from './Value-Objects/user-entity-user-email';
import { UserPassword } from './Value-Objects/user-entity-user-password';
import { Entity } from '../../shared/entities/entity';

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
