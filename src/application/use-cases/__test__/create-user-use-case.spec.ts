import { RegisterUserUseCase } from '../register-user-use-case';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';

describe('Create user use case unit tests', () => {
  it('Create a new user', async () => {
    const userRepository = new InMemoryUserRepository();
    const createUser = new RegisterUserUseCase(userRepository);
    const createdUser = await createUser.execute({
      userEmail: 'test@email.com',
      userLogin: 'testLogin',
      userName: 'test full name',
      userPassword: 'testPassword',
    });

    expect(createdUser).toBeTruthy();
    expect(userRepository.users).toHaveLength(1);
  });
});
