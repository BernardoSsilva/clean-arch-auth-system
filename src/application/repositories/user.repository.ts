import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: UserEntity): Promise<void>;
  abstract findById(userId: string): Promise<UserEntity>;

  abstract findAllUsers(): Promise<UserEntity[]>;

  abstract findByEmail(email: string): Promise<UserEntity>;

  abstract update(user: UserEntity): Promise<void>;

  abstract delete(id: string): Promise<void>;
}
