import { Injectable } from '@nestjs/common';
import { DataConflictError } from '../../shared/errors/data-conflict.error';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export interface createUserInterface {
  userEmail: string;
  userLogin: string;
  userName: string;
  userPassword: string;
}

@Injectable()
export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(request: createUserInterface) {
    const { userEmail, userLogin, userName, userPassword } = request;
    const email = userEmail;
    const login = userLogin;
    const name = userName;
    const password = userPassword;

    const user = new UserEntity({
      userName: name,
      userLogin: login,
      userEmail: email,
      userPassword: password,
      createdAt: new Date(),
    });

    const userExists = await this.userRepository.findByEmail(userEmail);
    if (userExists) {
      throw new DataConflictError('User exists');
    }

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
