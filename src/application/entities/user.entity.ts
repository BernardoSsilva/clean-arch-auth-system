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
  set userName(content) {
    this.props.userName = content;
  }

  get userName(): UserName {
    return this.props.userName;
  }

  set userLogin(content) {
    this.props.userLogin = content;
  }

  get userLogin(): UserLogin {
    return this.props.userLogin;
  }

  set userEmail(content) {
    this.props.userEmail = content;
  }

  get userEmail(): UserEmail {
    return this.props.userEmail;
  }

  set userPassword(content) {
    this.props.userPassword = content;
  }

  get userPassword(): UserPassword {
    return this.props.userPassword;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }
}
