import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { UserEntity } from '../../entities/user.entity';
import { UpdateUserUseCase } from '../update-user-use-case';

describe('Update user use case unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const updateUser = new UpdateUserUseCase(userRepository);
  it('Should be able to update a user', async () => {
    await userRepository.create(
      new UserEntity({
        userName:'testName',
        userLogin: 'testLogin',
        userEmail: 'test@email',
        userPassword: 'testPassword',
        createdAt: new Date(),
      }),
    );

    const userId = await userRepository.findAll();

    const result = await updateUser.execute(
      new UserEntity({
        userName: 'NewName',
        userLogin: 'newLogin',
        userEmail: 'new@email',
        userPassword: 'newPassword',
      }),
      userId[0].id
    );

    expect(result).toBeDefined();
  });
});
