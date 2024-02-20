import { UserEmail } from '../../entities/Value-Objects/user-entity-user-email';
import { UserLogin } from '../../entities/Value-Objects/user-entity-user-login';
import { UserName } from '../../entities/Value-Objects/user-entity-user-name';
import { UserPassword } from '../../entities/Value-Objects/user-entity-user-password';
import { UserEntity } from '../../../application/entities/user.entity';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { FindUserByIdUseCase } from '../find-user-by-id-use-case';

describe('Find user by id unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const findUser = new FindUserByIdUseCase(userRepository);
  it('Should be able to find a user by id', async () => {
    const users: UserEntity[] = [
      new UserEntity({
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      }),
    ];

    const result = await findUser.execute(users[0].id);
    expect(result).toBeDefined();
  });
});
