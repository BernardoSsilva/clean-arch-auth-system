import { Injectable } from '@nestjs/common';
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class FindAllUsersUseCase{
    constructor(private userRepository:UserRepository){}

    async execute():Promise<UserEntity[]>{
        return await this.userRepository.findAll();
    }
}