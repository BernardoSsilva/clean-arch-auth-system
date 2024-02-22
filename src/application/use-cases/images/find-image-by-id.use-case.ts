import { Injectable } from '@nestjs/common';
import { ImageRepository } from '../../../application/repositories/image.repository';

@Injectable()
export class FindImageByIdUseCase {
  constructor(private imageRepository: ImageRepository) {}
  async execute(imageId: string){
    const image = await this.imageRepository.findById(imageId);
    return image
  }
}
