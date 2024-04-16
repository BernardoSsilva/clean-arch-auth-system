import { ImageEntity } from "../entities/image.entity";


export abstract class ImageRepository {
    abstract registerImage(image:ImageEntity, userId:string):void

    abstract findById(imageId:string):Promise<ImageEntity>

    abstract findAll():Promise<ImageEntity[]>

    abstract findByUserId(userId:string):Promise<ImageEntity>

    abstract deleteImage(imageId:string):Promise<void>
}
