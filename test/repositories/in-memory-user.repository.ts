
import { UserEntity } from 'src/application/entities/user.entity';
import { UserRepository } from 'src/application/repositories/user.repository';

export class InMemoryUserRepository implements UserRepository {
  public users: UserEntity[] = [];

  async create(user: UserEntity) {
    this.users.push(user);
  }

  async findById(userId: string): Promise<UserEntity> {
    console.log(userId)
    return this.users.find((item) => item.id == userId);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const result = await this.users.find(
      (item) => item.props.userEmail === email,
    );
  
    return result;
  }

  async update(userEntity: UserEntity, userId: string): Promise<UserEntity> {
    const user = this.users.find((item) => item.id === userId);
    user[user.id] = userEntity;

    return user
  }

  async delete(userId:string):Promise<void>{
    const itemIndex = this.users.findIndex((item) =>item.id === userId)
    this.users.splice(itemIndex)
  }
}
