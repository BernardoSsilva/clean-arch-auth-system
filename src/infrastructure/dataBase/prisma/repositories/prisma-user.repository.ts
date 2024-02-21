import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../../../../application/entities/user.entity';
import { UserRepository } from '../../../../application/repositories/user.repository';
import { UpdateUserDto } from '../../../../infrastructure/http/dtos/update-user.DTO';
import { DataConflictError } from '../../../../shared/errors/data-conflict.error';
import { NotFoundError } from '../../../../shared/errors/not-found.error';
import { PrismaMapper } from '../mappers/prisma-user.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async create(user: UserEntity): Promise<void> {
    const userExists = await this.prisma.user.findMany({
      where: {
        OR: [
          {
            userEmail: user.userEmail,
            userLogin: user.userLogin,
          },
        ],
      },
    });

    if (userExists.length > 0) {
      throw new DataConflictError('user params already in uses');
    }

    const raw = await PrismaMapper.toPrisma(user);
    await this.prisma.user.create({
      data: raw,
    });
  }
  async findById(id: string): Promise<UserEntity> {
    const result = await this.prisma.user.findUnique({
      where: { userId: id },
    });

    return PrismaMapper.toDomain(result);
  }
  async findAll(): Promise<UserEntity[]> {
    const results = await this.prisma.user.findMany();
    return results.map((result) => PrismaMapper.toDomain(result));
  }

  async findByEmail(sentEmail): Promise<UserEntity> {
    const result = await this.prisma.user.findUnique({
      where: { userEmail: sentEmail },
    });

    return PrismaMapper.toDomain(result);
  }
  async update(user: UpdateUserDto, sentId): Promise<UserEntity> {
    const editedUser = await this.prisma.user.findUnique({
      where: { userId: sentId },
      select: {
        userId: true,
      },
    });

    const result = await this.prisma.user.update({
      where: { userId: editedUser.userId },
      data: {
        userEmail: user.userEmail,
        userLogin: user.userLogin,
        userName: user.userName,
        userPassword: user.userPassword,
      },
    });
    return PrismaMapper.toDomain(result);
  }
  async delete(id): Promise<void> {
    const { userId } = id;
    await this.prisma.user.delete({
      where: { userId },
    });
  }

  async authenticate(
    userEmail: string,
    userPassword: string,
  ): Promise<{ access_token: string }> {
    const user = await this.prisma.user.findUnique({
      where: { userEmail },
    });

    if (!user) {
      throw new NotFoundError('user not found');
    }
    const validatePassword = await bcrypt.compareSync(
      userPassword,
      user.userPassword,
    );

    const { userId } = user;
    const payload = { userId };

    if (!validatePassword) {
      throw new Error('Invalid password');
    }

    const expiresIn = 30 * 60 * 60 * 24;

    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: 'user.secret',
        expiresIn,
      }),
    };
  }
}
