import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../application/repositories/user.repository';
import { NotFoundError } from '../../shared/errors/not-found.error';

@Injectable()
export class AuthUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const equalsPasswords = (password === user.userPassword)
    if (!equalsPasswords) {
      throw new NotFoundError('Invalid password');
    }
    return user;
  }
}
