import { UserEntity, UserProps } from '../../../user.entity';

describe('User entity unit tests', () => {
  it('Should be able create a new user', () => {
    const userProps: UserProps = {
      userName: 'Test full name',
      userLogin: 'testLogin',
      userEmail: 'test@email',
      userPassword: 'testPassword',
      createdAt: new Date(),
    };
    const user = new UserEntity(userProps);

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
  });
});
