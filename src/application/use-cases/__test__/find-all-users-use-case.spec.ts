import { UserEntity } from '../../../application/entities/user.entity';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { FindAllUsersUseCase } from '../find-all-users-use-case';
import { UserName } from '../../../application/entities/Value-Objects/user-entity-user-name';
import { UserEmail } from '../../../application/entities/Value-Objects/user-entity-user-email';
import { UserLogin } from '../../../application/entities/Value-Objects/user-entity-user-login';
import { UserPassword } from '../../../application/entities/Value-Objects/user-entity-user-password';

describe('Find all users use case unit test', () => {
  it('Should be able to find all user', async () => {
    const userRepository = new InMemoryUserRepository();

    await userRepository.create(
      new UserEntity({
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      }),
    );
    const findAll = new FindAllUsersUseCase(userRepository);
    const result = await findAll.execute();

    expect(result).toHaveLength(1);
  });
});
