import { UpdateUserDto } from '../../infrastructure/http/dtos/update-user.DTO';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(user: UserEntity): Promise<void>;
  abstract findById(userId: string): Promise<UserEntity>;

  abstract findAll(): Promise<UserEntity[]>;

  abstract findByEmail(email: string): Promise<UserEntity>;

  abstract update(user: UpdateUserDto, userId: string): Promise<UserEntity>;
  abstract delete(id: string): Promise<void>;

  abstract authenticate(userEmail:string, userPassword:string):Promise<{ access_token: string }>
}
