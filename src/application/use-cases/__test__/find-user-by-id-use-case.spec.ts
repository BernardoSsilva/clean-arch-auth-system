import { InMemoryUserRepository } from '../../../../test/repositories/in-memory-user.repository';
import { UserEntity } from '../../../application/entities/user.entity';
import { FindUserByIdUseCase } from '../find-user-by-id.use-case';

describe('Find user by id unit test', () => {
  const userRepository = new InMemoryUserRepository();
  const findUser = new FindUserByIdUseCase(userRepository);
  it('Should be able to find a user by id', async () => {
    const user = new UserEntity({
      userName: 'testName',
      userLogin: 'testLogin',
      userEmail: 'test@email',
      userPassword: 'testPassword',
      createdAt: new Date(),
    });

    userRepository.create(user);

    const result = await findUser.execute(user.id);

    expect(result).toBeDefined();
  });
});
