import { UserEntity } from '../../../application/entities/user.entity';
import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { FindUserByEmailUseCase } from '../find-user-by-email-use-case';
import { UserEmail } from '../../../application/entities/Value-Objects/user-entity-user-email';
import { UserLogin } from '../../../application/entities/Value-Objects/user-entity-user-login';
import { UserName } from '../../../application/entities/Value-Objects/user-entity-user-name';
import { UserPassword } from '../../../application/entities/Value-Objects/user-entity-user-password';
describe('find user by email use case unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const findByEmail = new FindUserByEmailUseCase(userRepository);

  it('Should return a user searching by email', async () => {
    const users: UserEntity[] = [
      new UserEntity({
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      }),
    ];
    console.log(await userRepository.findAll());
    const result = await findByEmail.execute('test@email');

    expect(result).toBeDefined();
  });
});
