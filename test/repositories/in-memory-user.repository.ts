import { UserEntity } from 'src/application/entities/user.entity';
import { UserRepository } from 'src/application/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  public users: UserEntity[] = [];

  async create(user: UserEntity) {
    this.users.push(user);
  }

  async findById(userId: string): Promise<UserEntity> {
    return this.users.find((item) => item.id === userId);
  }

  async findAll():Promise<UserEntity[]>{
    return this.users
  }
}
