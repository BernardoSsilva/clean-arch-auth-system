import { UserEntity } from '@application/entities/user.entity';

export class UserPresenter {
  static toHttp(user: UserEntity) {
    return {
      userId: user.id,
      userName: user.userName,
      userLogin: user.userLogin,
      userEmail: user.userEmail,
    };
  }
}
