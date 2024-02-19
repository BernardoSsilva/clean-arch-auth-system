import { UserEmail } from '../../../Value-Objects/user-entity-user-email';

describe('User email value object unit tests', () => {
  it('Should throw error when user email is invalid', () => {
    expect(() => new UserEmail(' ')).toThrow();
    expect(() => new UserEmail(null)).toThrow();
    expect(() => new UserEmail(undefined)).toThrow();
  });

  it('Should be able to create a new user email', () => {
    expect(() => new UserEmail('test@email.com')).toBeDefined();
  });
});
