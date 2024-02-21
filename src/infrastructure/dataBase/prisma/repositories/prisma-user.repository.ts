import { UserEntity } from '../../../../application/entities/user.entity';
import { DataConflictError } from '../../../../shared/errors/data-conflict.error';
import { UserRepository } from '../../../../application/repositories/user.repository';
import { UpdateUserDto } from '../../../../infrastructure/http/dtos/update-user.DTO';
import { PrismaService } from '../prisma.service';
import { PrismaMapper } from '../mappers/prisma.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  // private readonly prisma = new PrismaService();

  constructor(private prisma: PrismaService) {}

  async create(user: UserEntity): Promise<void> {
    const { userEmail, userLogin } = user;

    const userExists = await this.prisma.user.findMany({
      where: {
        OR: [
          {
            userEmail: userEmail,
            userLogin: userLogin,
          },
        ],
      },
    });

    if (userExists.length > 0) {
      throw new DataConflictError('user params already in uses');
    }

    const raw = PrismaMapper.toPrisma(user);
    const result = await this.prisma.user.create({
      data: raw,
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

    const editedUser = await this.prisma.user.findUnique({
      where: { userId },
      select: {
        userId: true,
      },
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
    const deletedUser = await this.prisma.user.delete({
      where: { userId },
    });
  }
}
