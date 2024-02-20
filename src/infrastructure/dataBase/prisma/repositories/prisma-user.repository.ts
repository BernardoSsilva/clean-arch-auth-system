import { PartialType } from '@nestjs/mapped-types';
import { UserEntity } from 'src/application/entities/user.entity';
import { DataConflictError } from 'src/shared/errors/data-conflict.error';
import { UserRepository } from '../../../../application/repositories/user.repository';
import { PrismaService } from '../prisma.service';
import { UpdateUserDto } from '../../../../infrastructure/http/dtos/update.user.DTO';
export class PrismaUserRepository implements UserRepository {
  private readonly prisma = new PrismaService();

  async create(user: UserEntity): Promise<void> {
    const { userEmail, userLogin, userName, userPassword } = user;

    const userExists = await this.prisma.user.findMany({
      where: {
        OR: [
          {
            userEmail: userEmail._emailValue,
            userLogin: userLogin._loginValue,
          },
        ],
      },
    });

    if (userExists.length > 0) {
      throw new DataConflictError('user params already in uses');
    }
    const result = await this.prisma.user.create({
      data: {
        userEmail: userEmail._emailValue,
        userLogin: userLogin._loginValue,
        userName: userName._nameValue,
        userPassword: userPassword._passwordValue,
      },
    });

    console.log(result);
  }
  async findById(userId: string): Promise<UserEntity> {
    const result = await this.prisma.user.findUnique({
      where: { userId },
    });
    console.log(result);
    return { result } as unknown as UserEntity;
  }
  async findAll(): Promise<UserEntity[]> {
    const result = await this.prisma.user.findMany();
    return result as unknown as UserEntity[];
  }

  async findByEmail(sentEmail): Promise<UserEntity> {
    const { userEmail } = sentEmail;
    const result = await this.prisma.user.findUnique({
      where: { userEmail },
    });
    console.log(result);
    return { result } as unknown as UserEntity;
  }
  async update(user: UpdateUserDto, sentId): Promise<UserEntity> {
    const { userId } = sentId;
    console.log(user);
    const editedUser = await this.prisma.user.findUnique({
      where: { userId },
    });

    const newUserData = await this.prisma.user.update({
      where: { userId: editedUser.userId },
      data: {
        userEmail: user.userEmail,
        userLogin: user.userLogin,
        userName: user.userName,
        userPassword: user.userPassword,
      },
    });
    return newUserData as unknown as UserEntity;
  }
  async delete(id): Promise<void> {
    const { userId } = id;
    await this.prisma.user.delete({
      where: { userId },
    });
  }
}
