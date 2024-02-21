import { UserEntity } from '../../../../application/entities/user.entity';
import { User as PrismaUser } from '@Prisma/client';
import * as bcrypt from 'bcrypt';
export class PrismaMapper {
  static async toPrisma(user: UserEntity) {
    const password = await bcrypt.hash(user.userPassword, 10);
    return {
      userEmail: user.userEmail,
      userLogin: user.userLogin,
      userName: user.userName,
      userPassword: password,
    };
  }

  static toDomain(user: PrismaUser): UserEntity {
    return new UserEntity(user, user.userId);
  }
}
