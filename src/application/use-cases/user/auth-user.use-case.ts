import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user.repository';
import { NotFoundError } from '../../../shared/errors/not-found.error';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async execute(email) {
    const { userEmail, userPassword } = email;

    const user = await this.userRepository.findByEmail(userEmail);
    if (!user) {
      throw new NotFoundError('User not found');
    }

    const equalsPasswords = bcrypt.compareSync(userPassword, user.userPassword);
    if (!equalsPasswords) {
      throw new NotFoundError('Invalid password');
    }

    const payload = { sub: user.id, username: user.userName };

    return {
      access_token: await this.jwtService.signAsync(payload, {expiresIn: "6h", secret:"authSystem"}),
    };
  }
}
