import { ImageRepository } from '../../../application/repositories/image.repository';
import { Injectable } from "@nestjs/common";


@Injectable()
export class DeleteImageUseCase{
    constructor(private imageRepository:ImageRepository){}
    async execute(imageId:string){
        return this.imageRepository.deleteImage(imageId)
    }
}