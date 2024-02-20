import { UserRepository } from '../../application/repositories/user.repository';
import { UserEntity } from '../entities/user.entity';
export class FindUserByEmailUseCase {
  constructor(private UserRepository: UserRepository) {}

  async execute(email: string) {
    const user = await this.UserRepository.findByEmail(email);
    return { user };
  }
}
