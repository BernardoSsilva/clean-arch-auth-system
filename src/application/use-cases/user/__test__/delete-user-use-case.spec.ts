import { UserEntity } from '../../../entities/user.entity';
import { InMemoryUserRepository } from '../../../../../test/repositories/in-memory-user.repository';
import { DeleteUserUseCase } from '../delete-user.use-case';

describe('Delete user use case unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const deleteUser = new DeleteUserUseCase(userRepository);

  it('Should be able to delete a user', async () => {
    await userRepository.create(
      new UserEntity({
        userName: 'testName',
        userLogin: 'testLogin',
        userEmail: 'test@email',
        userPassword: 'testPassword',
        createdAt: new Date(),
      }),
    );

    const users = await userRepository.findAll()

    await deleteUser.execute(users[0].id)

    expect(() => userRepository.findAll()).toHaveLength(0)
  });
});
