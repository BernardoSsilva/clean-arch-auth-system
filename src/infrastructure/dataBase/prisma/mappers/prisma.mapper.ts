import { UserEntity } from '../../../../application/entities/user.entity';
import { User as PrismaUser } from '@Prisma/client';
export class PrismaMapper {
  static toPrisma(user: UserEntity) {
    return {
      userEmail: user.userEmail,
      userLogin: user.userLogin,
      userName: user.userName,
      userPassword: user.userPassword,
    };
  }

  static toDomain(user: PrismaUser): UserEntity {
    return new UserEntity(user);
  }
}
