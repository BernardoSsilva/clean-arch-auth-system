import { UserName } from '../../../Value-Objects/user-entity-user-name';
import { UserProps } from '../../../user.entity';
import { UserEntity } from '../../../user.entity';
import { UserEmail } from '../../../Value-Objects/user-entity-user-email';
import { UserLogin } from '../../../Value-Objects/user-entity-user-login';
import { UserPassword } from '../../../Value-Objects/user-entity-user-password';


describe('User entity unit tests', () => {
  it('Should be able create a new user', () => {
    const userProps: UserProps = {
      userName: new UserName('Test full name'),
      userLogin: new UserLogin('testLogin'),
      userEmail: new UserEmail('test@email'),
      userPassword: new UserPassword('testPassword'),
      createdAt: new Date(),
    };
    const user = new UserEntity(userProps);
    console.log(user);
    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
  });

  

  it('Should throw an error if user password is invalid', () => {
    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword(''),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('null'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword(undefined),
        createdAt: new Date(),
      };
    }).toThrow();
  });
});
