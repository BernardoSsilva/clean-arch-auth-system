import { Injectable } from '@nestjs/common';
import { NotFoundError } from '../../../shared/errors/not-found.error';
import { UserRepository } from '../../repositories/user.repository';
@Injectable()
export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    const userExists = await this.userRepository.findById(userId);

    if (!userExists) {
      throw new NotFoundError('User not found');
    }
    const user = await this.userRepository.delete(userId);
    return {
      user,
    };
  }
}
