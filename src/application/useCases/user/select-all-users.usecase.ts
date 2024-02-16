import { UserEntity } from 'src/application/entities/user.entity';
import { UserRepositoryInterface } from 'src/application/repositories/user.repository';

export namespace SelectAllUsersUseCase {
  export type Input = {};

  export class UseCase {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(input: Input): Promise<UserEntity[]> {
      return await this.userRepository.findAll();
    }
  }
}
