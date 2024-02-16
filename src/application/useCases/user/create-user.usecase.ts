import { UserRepositoryInterface } from "src/application/repositories/user.repository";

export namespace CreateUserUseCase {
  export type Input = {
    userName: string;
    userLogin: string;
    userEmail: string;
    userPassword: string;
  };

  export class UseCase{
    constructor(private userRepository:UserRepositoryInterface){}
    async execute(Input):Promise<void>{
       await this.userRepository.insert(Input)
    }
  }
}
