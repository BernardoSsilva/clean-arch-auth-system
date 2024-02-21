import { UserEntity } from '../../../entities/user.entity';
import { InMemoryUserRepository } from '../../../../../test/repositories/in-memory-user.repository';
import { FindUserByEmailUseCase } from '../find-user-by-email.use-case';

describe('find user by email use case unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const findByEmail = new FindUserByEmailUseCase(userRepository);

  it('Should return a user searching by email', async () => {
    const users: UserEntity[] = [
      new UserEntity({
        userName: 'testName',
        userLogin: 'testLogin',
        userEmail: 'test@email',
        userPassword: 'testPassword',
        createdAt: new Date(),
      }),
    ];
    const result = await findByEmail.execute('test@email');

    expect(result).toBeDefined();
  });
});
