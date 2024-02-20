import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class UpdateUserUseCase{
    constructor(private userRepository:UserRepository){}
    async execute(user:UserEntity, userId:string){
        return await this.userRepository.update(user, userId);
        
    }
}