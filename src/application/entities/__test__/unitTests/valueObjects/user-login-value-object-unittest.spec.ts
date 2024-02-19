import { UserLogin } from '../../../Value-Objects/user-entity-user-login';

describe('User Login field unit tests', () => {
  it('Should throw an error if user login is invalid', () => {
    expect(() => new UserLogin('')).toThrow();

    expect(() => new UserLogin(null)).toThrow();

    expect(() => new UserLogin(undefined)).toThrow();
  });

  it("Should be able to create a new user login ", () =>{
    expect(() => new UserLogin("TestLogin")).toBeDefined()
  })
});
