
import { Injectable } from '@nestjs/common';
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
    const name =userName;
    const password = userPassword;

    const user = new UserEntity({
      userName: name,
      userLogin: login,
      userEmail: email,
      userPassword: password,
      createdAt: new Date(),
    });

    await this.userRepository.create(user);

    return {
      user,
    };
  }
}
