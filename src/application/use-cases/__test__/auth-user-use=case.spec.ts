import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { AuthUserUseCase } from '../auth-user.use-case';
import { RegisterUserUseCase } from '../register-user.use-case';
import * as bcrypt from 'bcrypt';

describe('Authentication use case unit tests', () => {
  it('Should be able to authenticate a user', async () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new RegisterUserUseCase(userRepository);
    const createdUser = await createUser.execute({
      userEmail: 'test@email.com',
      userLogin: 'testLogin',
      userName: 'test full name',
      userPassword: await bcrypt.hash('testPassword', 10),
    });

    const loginUseCase = new AuthUserUseCase(userRepository);
    const loginSuccess = await loginUseCase.execute(createdUser.user);
    expect(loginSuccess).toBeTruthy();
  });
});
