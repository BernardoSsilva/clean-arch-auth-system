import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../application/repositories/user.repository';
import { NotFoundError } from '../../shared/errors/not-found.error';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(email) {
    const { userEmail, userPassword } = email
    
    const user = await this.userRepository.findByEmail(userEmail);
    if (!user) {
      throw new NotFoundError('User not found');
    }
    console.log(userPassword, user.userPassword)
    const equalsPasswords = bcrypt.compareSync(userPassword, user.userPassword)
    if (!equalsPasswords) {
      throw new NotFoundError('Invalid password');
    }
    return user;
  }
}
