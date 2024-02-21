import { UserEntity } from '../../../entities/user.entity';
import { InMemoryUserRepository } from '../../../../../test/repositories/in-memory-user.repository';
import { FindAllUsersUseCase } from '../find-all-users.use-case';

describe('Find all users use case unit test', () => {
  it('Should be able to find all user', async () => {
    const userRepository = new InMemoryUserRepository();

    await userRepository.create(
      new UserEntity({
        userName: 'testName',
        userLogin: 'testLogin',
        userEmail: 'test@email',
        userPassword: 'testPassword',
        createdAt: new Date(),
      }),
    );
    const findAll = new FindAllUsersUseCase(userRepository);
    const result = await findAll.execute();

    expect(result).toHaveLength(1);
  });
});
