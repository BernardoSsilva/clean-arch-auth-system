import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class FindAllUsersUseCase{
    constructor(private userRepository:UserRepository){}

    async execute():Promise<UserEntity[]>{
        return await this.userRepository.findAll();
    }
}