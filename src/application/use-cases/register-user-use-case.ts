import { UserLogin } from '../entities/Value-Objects/user-entity-user-login';
import { UserEmail } from './../entities/Value-Objects/user-entity-user-email';
import { UserEntity } from '../entities/user.entity';
import { UserName } from '../entities/Value-Objects/user-entity-user-name';
import { UserPassword } from '../entities/Value-Objects/user-entity-user-password';
import { UserRepository } from '../repositories/user.repository';

export interface createUserInterface {
  userEmail: string;
  userLogin: string;
  userName: string;
  userPassword: string;
}

export class RegisterUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(request: createUserInterface) {
    const { userEmail, userLogin, userName, userPassword } = request;
    const email = new UserEmail(userEmail);
    const login = new UserLogin(userLogin);
    const name = new UserName(userName);
    const password = new UserPassword(userPassword);

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
