import { UserProps } from './../../user.entity';
import { UserEntity } from '../../user.entity';
import { UserName } from '../../validators/user-entity-user-name-validator';
import { UserEmail } from '../../validators/user-entity-user-email-validator';
import { UserLogin } from '../../validators/user-entity-user-login-validator';
import { UserPassword } from '../../validators/user-entity-user-password-validator';

describe('User entity unit tests', () => {
  it('Should create a new user', () => {
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
  });

  it('Should throw an error if user name is invalid', () => {
    expect(() => {
      const userProp: UserProps = {
        userName: new UserName(''),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName(null),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName(undefined),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();
  });

  it('Should throw an error if user login is invalid', () => {
    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin(''),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin(null),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin(undefined),
        userEmail: new UserEmail('test@email'),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();
  });

  it('Should throw an error if user email is invalid', () => {
    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail(''),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail(null),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();

    expect(() => {
      const userProp: UserProps = {
        userName: new UserName('testName'),
        userLogin: new UserLogin('testLogin'),
        userEmail: new UserEmail(undefined),
        userPassword: new UserPassword('testPassword'),
        createdAt: new Date(),
      };
    }).toThrow();
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
