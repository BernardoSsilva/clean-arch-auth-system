import { UserPassword } from '../../../Value-Objects/user-entity-user-password';

describe('User Password value object unit tests', () => {
  it('Should throw an error if is an invalid password', () => {
    expect(() => new UserPassword('')).toThrow();
    expect(() => new UserPassword(null)).toThrow();
    expect(() => new UserPassword(undefined)).toThrow();
  });

  it('Should be able to create a new password', () => {
    expect(() => new UserPassword('testPassword')).toBeDefined();
  });
});
