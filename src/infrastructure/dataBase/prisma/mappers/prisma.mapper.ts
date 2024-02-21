import { UserEntity } from '../../../../application/entities/user.entity';

export class PrismaMapper {
  static toPrisma(user: UserEntity) {
    return {
      userEmail: user.userEmail,
      userLogin: user.userLogin,
      userName: user.userName,
      userPassword: user.userPassword,
    };
  }
}
