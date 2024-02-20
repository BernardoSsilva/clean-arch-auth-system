import { UserEntity } from '../../../application/entities/user.entity';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { DeleteUserUseCase } from '../delete-user-use-case';
import { UserEmail } from '../../../application/entities/Value-Objects/user-entity-user-email';
import { UserLogin } from '../../../application/entities/Value-Objects/user-entity-user-login';
import { UserName } from '../../../application/entities/Value-Objects/user-entity-user-name';
import { UserPassword } from '../../../application/entities/Value-Objects/user-entity-user-password';

describe('Delete user use case unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const deleteUser = new DeleteUserUseCase(userRepository);

  it('Should be able to delete a user', async () => {
    await userRepository.create(
      new UserEntity({
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      }),
    );

    const users = await userRepository.findAll()

    await deleteUser.execute(users[0].id)

    expect(() => userRepository.findAll()).toHaveLength(0)
  });
});
