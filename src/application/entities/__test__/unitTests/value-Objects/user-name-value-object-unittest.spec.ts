import { UserName } from '../../../Value-Objects/user-entity-user-name';

describe('User Name Validator unit tests', () => {
  it('Should throw an error if user name is invalid', () => {
    expect(() => new UserName('')).toThrow();

    expect(() => new UserName(null)).toThrow();

    expect(() => new UserName(undefined)).toThrow();
  });

  it("Should be create a new user name",() =>{
    expect(() => new UserName("Test User Name")).toBeDefined()
  })
});
