import { UserEntity } from 'src/application/entities/user.entity';
import { UserRepository } from '../../../../application/repositories/user.repository';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from 'src/infrastructure/http/dtos/create.user.DTO';

export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: UserEntity): Promise<void> {
    await this.prismaService.user.create({
      data: {
        userEmail: user._userEmail._emailValue,
        userLogin: user._userLogin._loginValue,
        userName: user._userName._userName,
        userPassword: user._userPassword._passwordValue,
      },
    });
  }
  async findById(userId: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  async update(user: UserEntity, userId: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
