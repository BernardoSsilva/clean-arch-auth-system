import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: UserEntity): Promise<void>;
  abstract findById(userId: string): Promise<UserEntity>;

  abstract findAll(): Promise<UserEntity[]>;

  abstract findByEmail(email: string): Promise<UserEntity>;

  abstract update(user: UserEntity, userId:string): Promise<UserEntity>;

  // abstract delete(id: string): Promise<void>;
}
