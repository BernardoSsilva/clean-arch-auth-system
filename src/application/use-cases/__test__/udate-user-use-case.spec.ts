import { UserEmail } from '../../../application/entities/Value-Objects/user-entity-user-email';
import { UserLogin } from '../../../application/entities/Value-Objects/user-entity-user-login';
import { UserName } from '../../../application/entities/Value-Objects/user-entity-user-name';
import { UserPassword } from '../../../application/entities/Value-Objects/user-entity-user-password';
import { UserEntity } from '../../../application/entities/user.entity';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { UpdateUserUseCase } from '../update-user-use-case';

describe('Update user use case unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const updateUser = new UpdateUserUseCase(userRepository);
  it('Should be able to update a user', async () => {
    await userRepository.create(
      new UserEntity({
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      }),
    );

    const userId = await userRepository.findAll();

    const result = await updateUser.execute(
      new UserEntity({
        userName: new UserName('NewName'),
        userLogin: new UserLogin('newLogin'),
        userEmail: new UserEmail('new@email'),
        userPassword: new UserPassword('newPassword'),
        createdAt: null,
      }),
      userId[0].id,
    );

    expect(result).toBeDefined();
  });
});
