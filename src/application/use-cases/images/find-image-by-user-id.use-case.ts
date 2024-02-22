import { Injectable } from "@nestjs/common";
import { ImageRepository } from 'src/application/repositories/image.repository';


@Injectable()
export class FindImageByUserIdUseCase{
    constructor(private imageRepository:ImageRepository){}

    async execute(userId:string){
        return this.imageRepository.findByUserId(userId)
    }
}