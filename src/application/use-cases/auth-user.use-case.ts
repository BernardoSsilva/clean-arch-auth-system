import { UserRepository } from '../../application/repositories/user.repository';
import { NotFoundError } from '../../shared/errors/not-found.error';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const equalsPasswords = await bcrypt.compareSync(password, user.userPassword)
    if (!equalsPasswords) {
      throw new NotFoundError('Invalid password');
    }
    return user;
  }
}
