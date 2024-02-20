import { RegisterUserUseCase } from "../register-user-use-case"

describe("Create user use case unit tests", () =>{

    it("Create a new user", () =>{
        const createUser = new RegisterUserUseCase()
        createUser.execute({
            userEmail: "test@email.com",
            userName:"test full name",
            userLogin:"testLogin",
            userPassword:"test password"
        })
    })
})
