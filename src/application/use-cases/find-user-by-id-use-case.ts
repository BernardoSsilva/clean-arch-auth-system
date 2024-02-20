import { NotFoundError } from '../../shared/errors/not-found.error';
import { UserRepository } from '../repositories/user.repository';

export class FindUserByIdUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    const user = await this.userRepository.findById(userId);
    return { user };
  }
}
