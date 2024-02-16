import { UserEntity } from '../entities/user.entity';
import { RepositoryContract } from './repository.contract';
export interface UserRepositoryInterface
  extends RepositoryContract<UserEntity> {
  findByEmail(email: string): Promise<UserEntity>;
  updatePassword(id: string, password: string): Promise<void>;
}
