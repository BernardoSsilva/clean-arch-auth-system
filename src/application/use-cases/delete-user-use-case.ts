import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
@Injectable()
export class DeleteUserUseCase{
    constructor(private userRepository:UserRepository){}

    async execute(userId:string){
        await this.userRepository.delete(userId)
    }
}