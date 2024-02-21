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

    const user = new UserEntity({
      userName,
      userLogin,
      userEmail,
      userPassword,
      createdAt: new Date(),
    });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
